import request from 'supertest';
import Utilities from "../../../src/lib/utils.js";


const app = Utilities.bootstrapTestEnvironmet();

beforeEach(async () => {
    updateENV ({NODE_ENV: 'Test'});
    connectToDatabase()
})


describe ("Tests for the login endpoints", () => {
    it( "should login a new user", async () => {
        const response = await request(app).post("/api/v1/auth/login").send({
            email: 'vgh@example.com',
            paswword: 'pass',
            confirm_password: 'password',
            role: 'user',
            firstname: 'John',
            lastname: 'Doe',
            role: 'student'
        }) 
    })
    expect(response.status).toBe(201);
    expect(response.body.success).toBe (true);
    expect(response.body.data.email).toBe("v3QGhe@example.com");
});



export default Utilities