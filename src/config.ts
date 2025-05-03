import * as mysql from "mysql2";

const createConfig = () => ({
    port: 3000,
    mysql: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USERNAME,
        database: process.env.MYSQL_DATABASE,
        password: process.env.MYSQL_PASSWORD,
    },
});

const createMysqlConnection = () => {
    const config = createConfig();

    return mysql.createConnection(config.mysql);
};

const getDatabase = () => {
    if (process.env.NODE_ENV === 'local') {
        // mysql database
    } else {

    }

}

export { createMysqlConnection, createConfig };
