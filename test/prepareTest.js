const prepare = require('../');
const { expect } = require('chai');

describe('prepare()', function () {
    describe('when there are no substitutions', function () {
        it('should return the whole string as the prepared query', function () {
            const stmt = prepare`SELECT 1`;
            expect(stmt.text).to.equal('SELECT 1');
        });
        it('should return an empty values array', function () {
            const stmt = prepare`SELECT 1`;
            expect(stmt.values).to.deep.equal([]);
        });
    });

    describe('when there are substitutions', function () {
        it('should return the index-parametrized query string', function () {
            const firstName = 'Foo';
            const lastName = 'Bar';
            const stmt = prepare`SELECT ${firstName} AS first_name, ${lastName} AS last_name`;
            expect(stmt.text).to.equal('SELECT $1 AS first_name, $2 AS last_name');
        });
        it('should return an ordered values array', function () {
            const firstName = 'Foo';
            const lastName = 'Bar';
            const stmt = prepare`SELECT ${firstName} AS first_name, ${lastName} AS last_name`;
            expect(stmt.values).to.deep.equal(['Foo', 'Bar']);
        });
    });
});
