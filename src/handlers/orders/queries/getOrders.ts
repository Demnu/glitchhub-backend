import { z } from "zod";
import { getProducts } from "../../../services/ordermentumService";

// Define the schema for request validation
export const GetOrdersRequestSchema = z.object({
  pageNumber: z.number().optional(),
});

export type GetOrdersRequest = z.infer<typeof GetOrdersRequestSchema>;

// Define the OrderDto interface
export interface OrderDto {
  orderId: number;
}

// The getOrders function to fetch orders and handle errors properly
export const getOrders = async (
  request: GetOrdersRequest
): Promise<OrderDto | null> => {
  try {
    const products = await getProducts();
    return { orderId: -1 };
  } catch (error: unknown) {
    if (error instanceof Error) {
      const errorMessage = "Could not retrieve products from ordermentum";
      const newError = new Error(errorMessage);
      newError.stack = error.stack;
      throw newError;
    }
    throw new Error("Unknown error occurred during order retrieval");
  }
};
