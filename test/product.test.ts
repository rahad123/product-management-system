import mocha from "mocha";
import { assert } from "chai";
import chai from "chai";
import chaiHttp from "chai-http";
import { faker } from "@faker-js/faker";
import server from "../src/server";
import { expect } from "chai";
chai.use(chaiHttp);

describe("Product suit", () => {
  it("should create a new product", async () => {
    const productInput = {
      category_id: faker.random.numeric(3),
      product_category_id: faker.random.numeric(3),
      subcategory_id: faker.random.numeric(3),
      name: faker.lorem.word(),
      slug: faker.lorem.word(),
      description: faker.lorem.word(),
      price: faker.random.numeric(3),
      status: faker.lorem.word(),
    };
    const res = await chai
      .request(server)
      .post("/api/products")
      .send(productInput);
    expect(res.body).to.be.an("object");
  });

  it("should return all product", async () => {
    const productInput = {
      category_id: faker.random.numeric(3),
      product_category_id: faker.random.numeric(3),
      subcategory_id: faker.random.numeric(3),
      name: faker.lorem.word(),
      slug: faker.lorem.word(),
      description: faker.lorem.word(),
      price: faker.random.numeric(3),
      status: faker.lorem.word(),
    };
    const res = await chai
      .request(server)
      .post("/api/products")
      .send(productInput);
    const createProduct = res.body;

    const resforProduct = await chai.request(server).get("/api/products");
    const resForGet = resforProduct.body;
    expect(createProduct).to.be.an("object");
    expect(resForGet).to.be.an("object");
  });

  it("should return single product", async () => {
    const productInput = {
      category_id: faker.random.numeric(3),
      product_category_id: faker.random.numeric(3),
      subcategory_id: faker.random.numeric(3),
      name: faker.lorem.word(),
      slug: faker.lorem.word(),
      description: faker.lorem.word(),
      price: faker.random.numeric(3),
      status: faker.lorem.word(),
    };
    const res = await chai
      .request(server)
      .post("/api/products")
      .send(productInput);
    const createProduct = res.body;

    const resforProduct = await chai
      .request(server)
      .get("/api/products")
      .send(createProduct.product_id);
    const resForGet = resforProduct.body;
    expect(createProduct).to.be.an("object");
    expect(resForGet).to.be.an("object");
  });
});
