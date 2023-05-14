//Import modules needed for our tests
const { describe, test, expect } = require('@jest/globals');
const request = require('supertest');
const {User, Show} = require('../models/index');
const app = require('../src/app');


// TODO: Wipe database before each tests
describe("Getting users and updating show", () => {
  // Test for log in and verification(extension)
  //Test for username and password(extension)
  //Get all users
  test("Get all users", async () => {
    const response = await request(app).get("/");
    expect(response.body[0]).toBe("username");
    expect(response.body[0]).toBe("password");
  });
  //Get one user
  test("Get one user", async () => {
    const response = await request(app).get("/");
    expect(response.body).toBe();
  });
  //Get all shows user has watched(By checking id)
  test("Check for id and return shows", async () => {
    const response = await request(app).get("/");
    expect(response.body).toBe();
  });
  //update and add show if user has watched it
});
