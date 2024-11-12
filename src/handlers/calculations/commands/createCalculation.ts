import { z } from "zod";
import { calculations } from "../../../db/schema";
import { db } from "../../../app";
export const CreateCalculationRequestSchema = z.object({
  calculationName: z.string(),
});

export type CreateCalculationRequest = z.infer<
  typeof CreateCalculationRequestSchema
>;

export interface CreateCalculationDto {
  calculationId: number;
}
export const createCalculation = async (
  request: CreateCalculationRequest
): Promise<CreateCalculationDto> => {
  await db
    .insert(calculations)
    .values({ calculationName: request.calculationName });
  const calculationDto: CreateCalculationDto = {
    calculationId: Math.floor(Math.random() * 1000),
  };
  return calculationDto;
};
