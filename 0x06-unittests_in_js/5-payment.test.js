const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function () {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should log the correct total for 120', function () {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });

  it('should log the correct total for 20', function () {
    sendPaymentRequestToApi(10, 10);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
