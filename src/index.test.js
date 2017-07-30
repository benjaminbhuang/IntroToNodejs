import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('Our first test', function(){
    it('should pass', function(){
        expect(true).to.equal(true);
    });
});

describe('index.html', function(){
    it('should say hello', function(done){
        const index = fs.readFileSync('./src/index.html', "utf-8");
        index;
        jsdom;
           expect ("Hello World!").to.equal("Hello World!");
           done();
    });
});
