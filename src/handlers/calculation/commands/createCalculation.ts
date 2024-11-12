import { z } from "zod";
export const CreateCalculationRequestSchema = z.object({
  calculationName: z.string(),
});

export type CreateCalculationRequest = z.infer<
  typeof CreateCalculationRequestSchema
>;

export interface CreateCalculationDto {
  calculationId: number;
}
export const createCalculation = (
  request: CreateCalculationRequest
): CreateCalculationDto => {
  const calculationDto: CreateCalculationDto = {
    calculationId: Math.floor(Math.random() * 1000),
  };
  return calculationDto;
};
