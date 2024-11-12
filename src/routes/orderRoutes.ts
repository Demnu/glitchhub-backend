import express, { Request, Response, NextFunction } from "express";
import { validateData } from "../../middleware/validationMiddleware";
import {
  getOrders,
  GetOrdersRequestSchema,
} from "../handlers/orders/queries/getOrders";

const router = express.Router();

router.post(
  "/getOrders",
  validateData(GetOrdersRequestSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // #swagger.tags = ['Orders']
      // #swagger.description = 'Endpoint to get orders from Ordermentum.'
      /*	#swagger.parameters['Get Orders Request'] = {
              in: 'body',
              required: true,
              schema: { $ref: "#/definitions/GetOrdersRequest" }
      } */

      const result = await getOrders(req.body);

      /* #swagger.responses[200] = { 
        schema: { "$ref": "#/definitions/OrderDtos" }} */
      res.status(200).json(result);
    } catch (error) {
      next(error); // Passes error to the error-handling middleware
    }
  }
);

export default router;
