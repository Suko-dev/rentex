import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindCategoryByNameUseCase } from "./FindCategoryByNameUseCase";

class FindCategoryByNameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const findCategoryByNameUseCase = container.resolve(
            FindCategoryByNameUseCase
        );

        const name = request.params.category;
        const category = await findCategoryByNameUseCase.execute(name);

        return response.status(200).json(category);
    }
}

export { FindCategoryByNameController };
