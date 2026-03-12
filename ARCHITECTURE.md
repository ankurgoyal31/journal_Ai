# System Architecture

## 1. How would you scale this to 100k users?

To scale the system to 100k users:

* Use a load balancer to distribute requests across multiple backend servers.
* Deploy backend services using container platforms such as Docker and Kubernetes.
* Use a managed database like MongoDB Atlas with sharding and replication.
* Add Redis caching to reduce database load.
* Use a message queue (RabbitMQ / Kafka) to process LLM analysis asynchronously.

---

## 2. How would you reduce LLM cost?

LLM costs can be reduced by:

* Caching results of previously analyzed journal entries.
* Using smaller or optimized models for simple sentiment analysis.
* Limiting the number of AI calls per user.
* Running batch processing for multiple entries.

---

## 3. How would you cache repeated analysis?

If a user submits the same journal text multiple times:

* Create a hash of the journal text.
* Store the AI analysis result in Redis or database.
* Before calling the LLM, check if the hash already exists.
* If it exists, return the cached result instead of calling the LLM again.

---

## 4. How would you protect sensitive journal data?

Journal entries may contain personal emotional information. To protect user privacy:

* Use HTTPS for secure communication.
* Encrypt sensitive data before storing it in the database.
* Implement authentication and access control.
* Restrict database access using secure environment variables.
* Apply proper logging and monitoring.
