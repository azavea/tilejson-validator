const test = require('tap').test;
const fs = require('fs');
const glob = require('glob');
const tilejsonvalidator = require('../index.js');

function file(x) {
    return fs.readFileSync(x, 'utf8');
}

function filejs(x) {
    return JSON.parse(fs.readFileSync(x, 'utf8'));
}

test('tilejsonvalidator', (tParent) => {
    test('Good tilejson as strings', (t) => {
        glob.sync('test/data/good/*.json').forEach((f) => {
            const tj = file(f);
            t.deepEqual(tilejsonvalidator.validate(tj), true, f);
        });
        t.end();
    });

    test('Bad tilejson as strings', (t) => {
        glob.sync('test/data/bad/*.json').forEach((f) => {
            const tj = file(f);
            t.deepEqual(tilejsonvalidator.validate(tj), false, f);
        });
        t.end();
    });

    test('Good tilejson as objects', (t) => {
        glob.sync('test/data/good/*.json').forEach((f) => {
            const tj = filejs(f);
            t.deepEqual(tilejsonvalidator.validate(tj), true, f);
        });
        t.end();
    });

    test('Bad tilejson as objects', (t) => {
        glob.sync('test/data/bad/*.json').forEach((f) => {
            const tj = filejs(f);
            t.deepEqual(tilejsonvalidator.validate(tj), false, f);
        });
        t.end();
    });

    test('String that is not an object', (t) => {
        const tj = '{';
        t.equal(tilejsonvalidator.validate(tj), false);
        t.end();
    });

    test('Not an object and not a string', (t) => {
        const tj = 6;
        t.equal(tilejsonvalidator.validate(tj), false);
        t.end();
    });

    tParent.end();
});
