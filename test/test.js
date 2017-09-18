const test = require('tap').test;
const tilejsonvalidator = require('../index.js');

const goodObj = {};
const goodObjString = '{}';
const badObj = 12;
const badObjString = '{';

test('tilejsonvalidator', (tParent) => {
    test('String that is not an object', (t) => {
        const tj = badObjString;
        t.equal(tilejsonvalidator.validate(tj), false);
        t.end();
    });

    test('Not an object and not a string', (t) => {
        const tj = badObj;
        t.equal(tilejsonvalidator.validate(tj), false);
        t.end();
    });

    test('Good object', (t) => {
        const tj = goodObj;
        t.equal(tilejsonvalidator.validate(tj), false);
        t.end();
    });

    test('Good object string', (t) => {
        const tj = goodObjString;
        t.equal(tilejsonvalidator.validate(tj), false);
        t.end();
    });

    tParent.end();
});
