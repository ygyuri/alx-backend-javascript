const request = require("request");
const { expect } = require("chai");

describe("Index page", function () {
    it("should return correct status code", function (done) {
        request("http://localhost:7865", function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("should return correct result", function (done) {
        request("http://localhost:7865", function (error, response, body) {
            expect(body).to.equal("Welcome to the payment system");
            done();
        });
    });
});

describe("Regex integration testing", () => {
    describe("GET /cart/:id", () => {
        it("should return Payment methods for cart :id when :id is a number", (done) => {
            request.get(
                "http://localhost:7865/cart/12",
                (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    expect(body).to.equal("Payment methods for cart 12");
                    done();
                }
            );
        });

        it("should return 404 when :id is not a number", (done) => {
            request.get(
                "http://localhost:7865/cart/hello",
                (error, response, body) => {
                    expect(response.statusCode).to.equal(404);
                    expect(body).to.contain("Cannot GET /cart/hello");
                    done();
                }
            );
        });
    });
});
