PostgreSQL prepared statements via ES6 Template Literals (string interpolation)

### Usage
```javascript
const prepare = require('pg-prepare');

...
const firstName = 'Foo';
const lastName = 'Bar';

let stmt = prepare`SELECT ${firstName}::text AS first_name, ${lastName}::text AS last_name`;
console.log('Statement:', stmt); //{ text: 'SELECT $1::text AS first_name, $2::text AS last_name', values: ['Foo', 'Bar'] }

let result = await client.query(stmt);
console.log('Result:', result.rows[0]); //{ first_name: 'Foo', last_name: 'Bar' }
```

See also: [./demo/index.js](demo/index.js)


### License
MIT http://eib.mit-license.org/
