const {areaofcircle} = require('../src/app1')
const {suite,test, Test} = require ('mocha')

let expect;
(async ()=>{
    const chai = await import('chai'); // importing chai explicitly
    expect = chai.expect;
})();

//1.BDD Describe and it
describe('AreaofcircleSuite', ()=>{
    it('areaofcircle(5) should return 78.53981633974483', ()=>{
        expect(areaofcircle(5)).to.be.equal(78.53981633974483);
    })
})
context('AreaofcircleSuite', ()=>{
    specify('areaofcircle(5) should return 78.53981633974483', ()=>{
        expect(areaofcircle(5)).to.be.equal(78.53981633974483);
    })
})
//tdd
suite('AreaofcircleSuite', ()=>{
    test('areaofcircle(5) should return 78.53981633974483', ()=>{
        expect(areaofcircle(5)).to.be.equal(78.53981633974483);
    })
})