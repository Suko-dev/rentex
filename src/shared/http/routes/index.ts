import { Router } from "express";

import { categoriesRoutes } from "@shared/http/routes/category.routes";

const router = Router();

router.use("/categories", categoriesRoutes);

export { router };
