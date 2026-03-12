# AI-Assisted Journal System

## Overview

This project is a full-stack prototype that allows users to write journal entries, analyze emotions using an AI model, and view insights over time.

## Features

* Create journal entry
* Emotion analysis using LLM
* View previous entries
* Insights about emotional trends

## Tech Stack

Frontend:

* Next.js / React

Backend:

* Node.js / Next.js API routes

Database:

* MongoDB

AI Model:

* Gemini / OpenAI API

## API Endpoints

POST /api/journal
Create a journal entry.

GET /api/journal/:userId
Fetch all journal entries for a user.

POST /api/journal/analyze
Analyze emotion from journal text.

GET /api/journal/insights/:userId
Get emotional insights.

## Setup Instructions

1. Clone the repository
2. Install dependencies

npm install

3. Create `.env.local`

MONGO_URI=your_mongodb_uri
AI_API_KEY=your_api_key

4. Run the project

npm run dev
