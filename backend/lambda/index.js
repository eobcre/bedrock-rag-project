import { ragService } from "../services/ragService.js";

export const handler = async (e) => {
  try {
    const body = e?.body ? JSON.parse(e.body) : {};
    const { query, topK } = body;

    const res = await ragService({ query, topK });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    };
  } catch (err) {
    console.error("Lambda error:", err);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ok: false,
        error: err.message,
      }),
    };
  }
};
