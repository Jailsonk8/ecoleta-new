import path from 'path';

module.exports = {
    client: 'pg',
    version: '12.3',
    connection: {
        host : 'db',
        user : 'postgres',
        password : 'postgres',
        database : 'db_ecoleta'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
}; 