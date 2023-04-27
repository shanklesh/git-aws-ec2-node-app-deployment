import app from "./app.js";
import supertest from "supertest";

const request = supertest(app);
describe("/test api", () => {
  it("should return a response", async () => {
    await request.get("/test").then((response) => {
      expect(response.status).toEqual(500);
    });
  });
});
