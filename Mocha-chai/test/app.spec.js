const {add,sub,mul} = require('../src/app')
//const expect = require('chai').expect
let expect;
(async ()=>{
    const chai = await import('chai');
    expect = chai.expect;
})();

//1.BDD -'describe' and 'it'
describe('Suite 1', ()=>{
    it('add(2,3) should return 5', ()=>{
        expect(add(2,3)).to.be.equal(5);
    })
})

describe('Suite 2', ()=>{
    it('sub(5,3) should return 2', ()=>{
        expect(sub(5,3)).to.be.equal(2);
    })
})
describe('Suite 3', ()=>{
    it('mul(5,3) should return 15', ()=>{
        expect(mul(5,3)).to.be.equal(15);
    })


    describe('Hookssuite 1', ()=>{
        before(()=>{
            
              
            console.log('before')
        });
    
        after(()=>{
            console.log('after')
        });
        beforeEach(()=>{
            console.log('beforeEach')
        });
        afterEach(()=>{
            console.log('afterEach')
        });

        //tdd hooks
        const {suite,test,setup,teardown,suiteSetup,suiteTeardown}=require('mocha')
        suite('TDD hooks', ()=>{
            suiteSetup(() => {
                console.log('one suitesetup')
            });
            suiteTeardown(() =>{
                console.log('one suiteTeardown')
            });
            setup(() => {
                console.log('one setup')
            });
            teardown(() =>{
                console.log('one teardown')
            });
            //testcases
            test('add(7,3) shoul return 10', ()=>{
                console.log('one test')
            });
        });

})

})
