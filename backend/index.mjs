export const handler = async (e) => {
  try {
    const body = e?.body ? JSON.parse(e.body) : {};
    const { query, topK } = body;

    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        query,
        topK
      })
    };
  } catch (err) {
    console.error("Lambda error:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        ok: false,
        error: err.message
      })
    };
  }
};