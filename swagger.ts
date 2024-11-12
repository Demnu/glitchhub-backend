import {
  CreateCalculationDto,
  CreateCalculationRequest,
} from "./src/handlers/calculation/commands/createCalculation";

const swaggerAutogen = require("swagger-autogen")();

interface ObjectDefinitionsInterface {
  CreateCalculationRequest: CreateCalculationRequest;
  CreateCalculationDto: CreateCalculationDto;
}

const definitions: ObjectDefinitionsInterface = {
  CreateCalculationRequest: {
    calculationName: "Example Calculation",
  },
  CreateCalculationDto: { calculationId: -1 },
};

const doc = {
  info: {
    version: "1.0.0",
    title: "Glitchhub API",
    description:
      "Documentation automatically generated by the <b>swagger-autogen</b> module.",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "User",
      description: "Endpoints",
    },
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header", // can be "header", "query" or "cookie"
      name: "X-API-KEY", // name of the header, query parameter or cookie
      description: "any description...",
    },
  },
  definitions: {
    ...definitions,
    Parents: {
      father: "Simon Doe",
      mother: "Marie Doe",
    },
    User: {
      name: "Jhon Doe",
      age: 29,
      parents: {
        $ref: "#/definitions/Parents",
      },
      diplomas: [
        {
          school: "XYZ University",
          year: 2020,
          completed: true,
          internship: {
            hours: 290,
            location: "XYZ Company",
          },
        },
      ],
    },
    AddUser: {
      $name: "Jhon Doe",
      $age: 29,
      about: "",
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/app.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./src/app"); // Your project's root file
});
