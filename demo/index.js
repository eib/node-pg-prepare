const { Client } = require('pg');
const prepare = require('../');

const client = new Client({
    user: process.env.USER,
    host: 'localhost',
    database: 'postgres',
    password: null,
    port: 5432,
});

async function run() {
    await client.connect();
    try {
        const firstName = 'Foo';
        const lastName = 'Bar';
        let stmt = prepare`SELECT ${firstName}::text AS first_name, ${lastName}::text AS last_name`;
        console.log('Statement:', stmt); //{ text: 'SELECT $1::text AS first_name, $2::text AS last_name', values: ['Foo', 'Bar'] }

        let result = await client.query(stmt);
        console.log('Result:', result.rows[0]); //{ first_name: 'Foo', last_name: 'Bar' }
    } finally {
        await client.end();
    }
}

run().catch(err => console.log('Error:', err));
