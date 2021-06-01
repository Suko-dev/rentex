import { Router } from "express";

import { categoriesRoutes } from "@shared/http/routes/category.routes";
import { userRoutes } from "@shared/http/routes/user.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/user", userRoutes);

export { router };
