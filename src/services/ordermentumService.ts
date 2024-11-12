import createClient from "ordermentum-sdk";
import "dotenv/config";

const glitchSupplierId = process.env.GLITCH_SUPPLIER_ID!;
const ordermentumClient = createClient({
  token: process.env.ORDERMENTUM_TOKEN!,
});

const getProducts = async () => {
  const products = await ordermentumClient.products.findAll({
    supplierId: glitchSupplierId,
  });
  return " hi";
};

export { getProducts };
