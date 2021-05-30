import { createConnection, Connection } from "typeorm";

const connection = async (database = "localhost"): Promise<Connection> => {
    const connection = await createConnection({
        type: "postgres",
        host: database,
        database: "rentex",
        username: "docker",
        password: "ignite",
    });
    return connection;
};
export { connection };
