import mocha from 'mocha';
// import * as faker from 'faker';
import { assert } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server';
chai.use(chaiHttp);

describe('Product suit', () => {
    it('should create a new product', async () => {
      const productInput = {
        category_id: "6",
        product_category_id: "3",
        subcategory_id: "7",
        name: 'watch',
        slug: 'first-slug',
        description: "Des",
        price: 123,
        status: "status"
      }
      const res = await(
      chai
        .request(server)
        .post("/api/products")
        .send(productInput)
        );
      console.log('res', res.body);
    });
  });