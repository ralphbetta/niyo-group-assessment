import { serverport } from "./environment.config";

export const swagger_options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "FINSCROW API Documentation - Secure Escrow Payment Platform",
        version: "0.1.0",
        description:
          "Welcome to the FINSCROW API documentation, your comprehensive guide to integrating with our secure escrow payment platform. FINSCROW offers a robust set of APIs designed to facilitate seamless transactions involving both cryptocurrency and fiat currency, providing developers with the tools they need to build secure and reliable payment solutions for their applications",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "NIYO ASSESSMENT",
          url: "https://assessment.com",
          email: "api@assessment.com",
        },
      },
  
      servers: [
        {
          url: `http://localhost:${serverport}/api`,
          "description": "Local API Server",
        },
      ],
  
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            in: 'header',
            name: 'Authorization',
            description: 'Bearer token to access these API endpoints',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
          ApiKeyAuth: {
            type: "apiKey",
            name: "x-api-key",
            in: "header",
            description: "API key",
          },
        },
      },
      security: [
        {
          bearerAuth: [],
          apiKeyAuth: [],
        },
      ],
  
    },
    apis: ["./src/docs/*.ts"],
  };
  