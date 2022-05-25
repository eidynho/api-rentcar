import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

export { specificationsRoutes };
