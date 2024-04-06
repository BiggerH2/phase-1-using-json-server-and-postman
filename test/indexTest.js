const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Mocking Client/Server Communication', () => {
  it('should retrieve data from JSON Server using GET request', (done) => {
    request('http://localhost:3000/articles/1', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const article = JSON.parse(body);
      expect(article).to.be.an('object');
      expect(article.title).to.equal('Example Article');
      expect(article.content).to.equal('This is an example.');
      done();
    });
  });

  it('should send data to JSON Server using POST request', (done) => {
    const article = {
      title: 'Third Article',
      content: 'Another example!'
    };

    request.post(
      {
        url: 'http://localhost:3000/articles',
        json: article
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(201); // Assuming JSON Server returns 201 for successful POST
        expect(body).to.be.an('object');
        expect(body.title).to.equal('Third Article');
        expect(body.content).to.equal('Another example!');
        expect(body.id).to.be.a('number');
        done();
      }
    );
  });
});
