import { ragService } from "./services/ragService.js";

// const SECRET = process.env.ORIGIN_SECRET;

export const handler = async (e) => {
  // const header = e.headers?.["x-origin-verify"];

  // if (header !== SECRET) {
  //   return {
  //     statusCode: 403,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ message: "Forbidden..." }),
  //   };
  // }

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
