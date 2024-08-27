import supertest from "supertest";
import app from "../server/app.js";

it("tests status endpoint", async () => {
  const res = await supertest(app).get("/status");

  expect(res.statusCode).toEqual(200);
});
