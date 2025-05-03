"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfig = void 0;
var createConfig = function () { return ({
    port: 3000,
    postgresql: {
        host: process.env.POSTGRESQL_HOST,
        port: Number(process.env.POSTGRESQL_PORT),
        user: process.env.POSTGRESQL_USERNAME,
        database: process.env.POSTGRESQL_DATABASE,
        password: process.env.POSTGRESQL_PASSWORD,
    },
}); };
exports.createConfig = createConfig;
// const createPostgresqlConnection = async () => {
//     const config = createConfig();
//     const client = new Client(config.postgresql);
//     await client.connect();
//     console.log(`Connected to postgres DB on port ${config.postgresql.port}`)
//     return client;
// };
var getDatabase = function () {
    if (process.env.NODE_ENV === 'local') {
        // mysql database
    }
    else {
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxJQUFNLFlBQVksR0FBRyxjQUFNLE9BQUEsQ0FBQztJQUN4QixJQUFJLEVBQUUsSUFBSTtJQUNWLFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWU7UUFDakMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUN6QyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7UUFDckMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CO1FBQ3pDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQjtLQUM1QztDQUNKLENBQUMsRUFUeUIsQ0FTekIsQ0FBQztBQXVCTSxvQ0FBWTtBQXJCckIsbURBQW1EO0FBQ25ELHFDQUFxQztBQUVyQyxvREFBb0Q7QUFFcEQsOEJBQThCO0FBRTlCLGdGQUFnRjtBQUVoRixxQkFBcUI7QUFDckIsS0FBSztBQUVMLElBQU0sV0FBVyxHQUFHO0lBQ2hCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFLENBQUM7UUFDbkMsaUJBQWlCO0lBQ3JCLENBQUM7U0FBTSxDQUFDO0lBRVIsQ0FBQztBQUVMLENBQUMsQ0FBQSJ9