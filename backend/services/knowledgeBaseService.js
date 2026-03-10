import { RetrieveAndGenerateCommand } from "@aws-sdk/client-bedrock-agent-runtime";
import { bedrockClient } from "../utils/bedrockClient.js";

export const knowledgeBaseService = async ({ query }) => {
  const cmd = new RetrieveAndGenerateCommand({
    input: {
      text: query,
    },
    retrieveAndGenerateConfiguration: {
      type: "KNOWLEDGE_BASE",
      knowledgeBaseConfiguration: {
        knowledgeBaseId: process.env.KNOWLEDGE_BASE_ID,
        modelArn: process.env.MODEL_ID,
      },
    },
  });

  const res = await bedrockClient.send(cmd);
  return res;
};
