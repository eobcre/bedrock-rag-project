import { RetrieveAndGenerateCommand } from "@aws-sdk/client-bedrock-agent-runtime";
import { bedrockClient } from "../utils/bedrockClient.js";

export const knowledgeBaseService = async ({ query, topK }) => {
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
  return res;
};
