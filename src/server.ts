import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "./swagger.json";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(8080, () => console.log(`Servidor rodando na porta 8080`));