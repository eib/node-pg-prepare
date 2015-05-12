PostgreSQL prepared statements via ES6 ("harmony") Prepared Statements

### Usage
```javascript
var prepare = require('pg-prepare');

...
var firstName = 'Foo';
var lastName = 'Bar';
var stmt = prepare`SELECT ${firstName} AS first_name, ${lastName} AS last_name`;
console.log(stmt); //{ query: 'SELECT $1 AS first_name, $2 AS last_name', params: ['Foo', 'Bar'] }
```

### License
MIT http://eib.mit-license.org/
