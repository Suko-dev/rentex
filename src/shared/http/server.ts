import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import dbServer from "@shared/typeorm";

import "@shared/container";

import swaggerFile from "../../swagger.json";

dbServer("database");

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
