import express from "express";
import {
  createCalculation,
  CreateCalculationRequestSchema,
} from "../handlers/calculation/commands/createCalculation";
import { validateData } from "../../middleware/validationMiddleware";

const router = express.Router();
router.post(
  "/createCalculation",
  validateData(CreateCalculationRequestSchema),
  (req, res) => {
    // #swagger.tags = ['Calculations']
    // #swagger.description = 'Endpoint to create a calculation.'
    /*	#swagger.parameters['Create Calculation Request'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/CreateCalculationRequest" }
    } */
    const result = createCalculation(req.body);

    /* #swagger.responses[200] = { 
  schema: { "$ref": "#/definitions/CreateCalculationDto" }*/
    res.status(200).json(result);
  }
);
export default router;
