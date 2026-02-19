const request = require("supertest");
const server = require("../src/server");

describe("Servidor HTTP", () => {
  it("Debe responder Hola Carlos", async () => {
    const response = await request(server).get("/");
    expect(response.text).toBe("Hola Carlos");
  });

  it("Debe responder 404 en ruta inválida", async () => {
    const response = await request(server).get("/invalido");
    expect(response.statusCode).toBe(404);
  });
});
