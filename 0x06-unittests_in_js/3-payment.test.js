const expect = require("chai").expect;
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
    it("validate the usage of the Utils function", function () {
        const util_spy = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(100, 20);
        expect(util_spy.calledOnce).to.be.true;
        expect(util_spy.calledWith("SUM", 100, 20)).to.be.true;
        util_spy.restore();
    });
});
