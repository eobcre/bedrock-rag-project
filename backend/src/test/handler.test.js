import { jest } from "@jest/globals";

jest.unstable_mockModule("../services/ragService.js", () => ({
  ragService: jest.fn(() =>
    Promise.resolve({
      ok: true,
      answer: "You can request a refund within 30 days.",
      sources: [],
    }),
  ),
}));

const { handler } = await import("../index.js");

describe("Lambda handler tests", () => {
  test("returns 200 when request is OK", async () => {
    const event = {
      body: JSON.stringify({
        query: "I want to refund.",
        topK: 3,
      }),
    };

    const result = await handler(event);
    const body = JSON.parse(result.body);

    expect(result.statusCode).toBe(200);
    expect(body.ok).toBe(true);
    expect(body.answer).toBeDefined();
  });
});
