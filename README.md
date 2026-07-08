# RAG-Powered Knowledge System

RAG (Retrieval-Augmented Generation) application using Amazon Bedrock Knowledge Bases to retrieve relevant context and generate LLM responses.

<img src="./docs/rag.png" alt="Image" width="600" />

## 🧠 How It Works

#### ▫️ Indexing / Ingestion phase

1. Document is uploaded to S3.
2. Text is split into smaller chunks.
3. Each chunk is converted into a vector using an embedding model.
4. Embeddings are indexed for similarity search.
5. Vectors are stored in S3 Vectors.

#### ▫️ Retrieval / Generation phase

1. User sends a query.
2. Query is converted into a vector using the same embedding model.
3. Vector similarity search is performed.
4. Relevant document chunks are retrieved.
5. Retrieved context is added into the LLM prompt.
6. LLM generates a response based on the retrieved context.

## 📄 Data

Custom Support Manual including:

- Order cancellation policies
- Refund policies
- Shipping timelines
- Customer support hours

## 🏗 Architecture

<p>
  <img src="./docs/architecture.png" alt="Image" width="600" />
  <br />
  <sub>Architecture diagram created with Lucidchart</sub>
</p>

## 🚀 Features

- RAG based context retrieval for accurate responses.
- Configurable top-K retrieval for optimized results.
- Semantic search using vector embeddings.
- Real-time command status indicators. (green: success, red: error)
- Displays retrieval results, LLM responses, model details, metrics, and sources references.

## 💬 Example Queries

- "What is your refund policy?"
- "How long does shipping take?"
- "Can I cancel my order?"

## 🛠 Tech Stack

#### ▫️ Frontend

- React (Vite)
- Tailwind CSS

#### ▫️ Backend / AWS

- Amazon Bedrock
- Amazon Bedrock Knowledge Base
- AWS Lambda
- Amazon API Gateway (HTTP API)
- Amazon S3 Vectors
- AWS SAM
- GitHub Actions

> Note: AWS Lambda + Amazon API Gateway are managed and deployed via AWS SAM and GitHub Actions.


## 📚 References

- [AWS SAM Template Anatomy](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy.html)

- [AWS SAM resources and properties](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-resources-and-properties.html)

- [Tutorial: Deploy a Hello World application with AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html)

- [AWS::Serverless::HttpApi](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-httpapi.html)

- [Enforce CloudFront-Only Access for AWS API Gateway](https://pubudu.dev/posts/access-api-gw-rest-api-only-from-cloudfront/)

- [Protecting APIs with custom headers in CloudFront](https://arpadt.com/articles/protecting-apis-with-cloudfront)

- [GitHub Actions to deploy with AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/deploying-using-github.html)