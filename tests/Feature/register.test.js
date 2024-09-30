import request from 'supertest';
import Utilities from "../../../src/lin/utils.js";
import AppConfig from "../../config/app.config.js";


const app = Utilities.bootstrapTestEnvironment()

describe("Tests for register endpoints", () => {
    test("It should register a new user", () => {
        const response = request(app).post("api/v1/auth/register").send()
    })

    expect(response.status).toBe(201);
    expect(response.body.status).toBe(true);
    expect(response.body.message).toBe("User successfully registered")
})