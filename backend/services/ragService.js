import { knowledgeBaseService } from "./knowledgeBaseService.js";

export const ragService = async ({ query, topK }) => {
  const kbRes = await knowledgeBaseService({ query, topK });
  const answer = kbRes.output?.text || "";

  // chunks
  const rawChunks =
    kbRes.citations?.flatMap((citation) => {
      return citation.retrievedReferences.map((ref) => ({
        text: ref.content?.text,
        location: ref.location,
      }));
    }) || [];

  const retrieveChunks = rawChunks.slice(0, Number(topK));

  // sources
  const sources = retrieveChunks.map((chunk) => chunk.location).filter(Boolean);

  return {
    ok: true,
    query,
    topK,
    answer,
    retrieveChunks,
    retrieveChunksCount: retrieveChunks.length,
    sources,
    model: process.env.MODEL_ID,
  };
};
