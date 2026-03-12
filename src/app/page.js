"use client"
import { useState,useRef,useEffect} from "react";
const Page = () => {
const boxRef = useRef(null)
const [input, set_Input] = useState("");
const [categories,set_categories] = useState([])
  const get_catagory = async()=>{
  let find = localStorage.getItem("User_Id")
  console.log(find)
 let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user_data`,{
  method:'POST',headers:{"Content-Type":"application/json"},body:JSON.stringify({journal:input,user_id:find})
  })
 let data = await res.json()
 get(find)
   }
    async function get(find) {
       let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get_data?user_id=${find}`)
      let data = await res.json();
      console.log(data.data)
      set_categories(data.data)
     }
 useEffect(() => {
   let find = localStorage.getItem("User_Id")
    if(!find){
    let userId = crypto.randomUUID()
    localStorage.setItem("User_Id",userId);
    // return;
    }
   get(find)
}, [])

const delete_record= async(id,i)=>{
console.log(id)
let update = [...categories]
update.splice(i,1);
set_categories(update)
console.log(update.length)
await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/delete`,{method:'POST',headers:{"Content-Type":"application/json"},body:JSON.stringify({id:id})})}
  return (     
    <>
 <div className="animatedBg">
          <div ref={boxRef} className='msg'> 
               <div className='ih'> 
                   </div>
        <div className='sen'> <div className='inp'><input onChange={(e)=>set_Input(e.target.value)}value={input}className='tex'type="text"placeholder='Ask Any quetions 'onKeyDown={(e) => {if (e.key === "Enter" && !e.shiftKey) { get_catagory() }}}/>
            <span onClick={get_catagory} className='btn'>send</span>
           </div>
          {categories.length>0 && categories.map((item,i)=>{
  return(
    <div className="categoryCard" key={i}>
      <h3>input : {item.journal}</h3>
       <h2>Emotion : {item.data.emotion}</h2>
          <h3>{item.data.sub_category}</h3>
       {item.data.keywords &&
      item.data.keywords.map((keywords,j)=>(
        <span className="tag" key={j}>{keywords}</span>
      ))}
      <p>{item.data.summary}</p>
      <div className="deleteBtn" onClick={()=>delete_record(item._id,i)}>
        delete
      </div>
    </div>
  )
})}
  </div>
     </div> 
     </div>
    </>
  )
}
export default Page
