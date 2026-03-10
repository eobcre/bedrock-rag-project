import { knowledgeBaseService } from "./knowledgeBaseService.js";

export const ragService = async ({ query, retrieval, topK }) => {
  const kbRes = await knowledgeBaseService({ query });
  const answer = kbRes.output?.text || "";

  // dummy data
  // const chunks = [{ id: "doc1", text: "AWS is a cloud platform." }]; // RAG result
  // const answer = "AWS is a cloud computing platform."; // bedrock answer

  const retrieveChunks =
    kbRes.citations?.flatMap((citation) => {
      return citation.retrievedReferences.map((ref) => ({
        text: ref.content?.text,
        location: ref.location,
      }));
    }) || [];

  // const sources = retrieveChunks.map((chunk) => chunk.location).filter(Boolean);

  return {
    ok: true,
    query,
    retrieval,
    topK,
    answer,
    // retrieveChunks,
    // sources,
    // model: "Nova",
  };
};
