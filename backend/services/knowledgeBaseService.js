import { RetrieveAndGenerateCommand } from "@aws-sdk/client-bedrock-agent-runtime";
import { bedrockClient } from "./bedrockClient.js";

export const knowledgeBaseService = async ({ query, topK }) => {
  const start = Date.now();

  const cmd = new RetrieveAndGenerateCommand({
    input: {
      text: query,
    },
    retrieveAndGenerateConfiguration: {
      type: "KNOWLEDGE_BASE",
      knowledgeBaseConfiguration: {
        knowledgeBaseId: process.env.KNOWLEDGE_BASE_ID,
        modelArn: process.env.MODEL_ID,
        retrievalConfiguration: {
          vectorSearchConfiguration: {
            numberOfResults: Number(topK),
          },
        },
      },
    },
  });

  const res = await bedrockClient.send(cmd);

  const totalLatency = Date.now() - start;

  return { res, totalLatency };
};
