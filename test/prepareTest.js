var prepare = require('../lib/prepare');

describe('prepare()', function () {
    describe('when there are no substitutions', function () {
        it('should return the whole string as the prepared query', function () {
            var stmt = prepare`SELECT 1`;
            stmt.query.should.eql('SELECT 1');
        });
        it('should return an empty params array', function () {
            var stmt = prepare`SELECT 1`;
            stmt.params.should.eql([]);
        });
    });

    describe('when there are substitutions', function () {
        it('should return the index-parametrized query string', function () {
            var firstName = 'Foo',
                lastName = 'Bar',
                stmt = prepare`SELECT ${firstName} AS first_name, ${lastName} AS last_name`;
            stmt.query.should.eql('SELECT $1 AS first_name, $2 AS last_name');
        });
        it('should return an ordered params array', function () {
            var firstName = 'Foo',
                lastName = 'Bar',
                stmt = prepare`SELECT ${firstName} AS first_name, ${lastName} AS last_name`;
            stmt.params.should.eql(['Foo', 'Bar']);
        });
    });
});
