# RAG-Powered Knowledge System

RAG (Retrieval-Augmented Generation) application using Amazon Bedrock Knowledge Bases to retrieve relevant context and generate LLM responses.

<img src="./docs/rag.png" alt="Image" width="600" />

### 🧠 How It Works

#### ▫️ Indexing / Ingestion phase

1. Manual document ingestion to S3
2. Text chunking
3. Each chunk is converted into a numerical vector by embedding model on Bedrock Knowledge Base
4. Generated embeddings are indexed to enable search
5. Vectors are stored in S3 Vectors

#### ▫️ Retrieval / Generation phase

1. User query
2. Query is converted into a vector by embedding model on Bedrock Knowledge Base
3. Starts vector similarity search
4. Retrieved document chunks are used for LLM

### 🏗 Architecture

<p>
  <img src="./docs/architecture.png" alt="Image" width="600" />
  <br />
  <sub>Architecture diagram created with Lucidchart</sub>
</p>

### 🚀 Features

- RAG based context retrieval for accurate responses.
- Configurable top-K retrieval for optimized results.
- Semantic search using vector embeddings.
- Real-time command status indicators. (green: success, red: error)
- Displays retrieval results, LLM responses, model details, metrics, and sources references.

### 🛠 Tech Stack

#### ▫️ Frontend

- React (Vite)
- Tailwind CSS

#### ▫️ Backend / AWS

- Amazon Bedrock
- Amazon Bedrock Knowledge Base
- AWS Lambda
- Amazon API Gateway
- Amazon S3 Vectors

### 📦 Installation

Clone the repository and install dependencies.

```bash
git clone https://github.com/eobcre/bedrock-rag-project.git
cd bedrock-rag-project
npm install
```

**Environment Variables**

```
KNOWLEDGE_BASE_ID=your_knowledge_base_id
MODEL_ID=your_model_id
```

**Run Locally**

```
npm run dev
```

Note: This application requires a deployed AWS backend. (API Gateway, Lambda and Bedrock)
