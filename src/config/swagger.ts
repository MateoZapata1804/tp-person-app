import swaggerJSDoc from 'swagger-jsdoc';
import { apiEnv } from './env';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

const schemas = validationMetadatasToSchemas();

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Persons API',
      version: '1.0.0',
      description: 'API de personas',
    },
    servers: [
      {
        url: `http://localhost:${apiEnv.PORT}`,
      },
    ],
    components: {
      schemas: {
        ...schemas,
        DocumentType: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            description: { type: 'string' },
          },
          required: ['id', 'description'],
        },
        Person: {
          type: 'object',
          properties: {
            id: { type: 'integer', format: 'int32' },
            idType: { $ref: '#/components/schemas/DocumentType' },
            idNumber: { type: 'integer', format: 'int64' },
            companyName: { type: 'string' },
            firstName: { type: 'string' },
            secondName: { type: 'string' },
            firstLastName: { type: 'string' },
            secondLastName: { type: 'string' },
            email: { type: 'string' },
            authorizeCellPhoneMessages: { type: 'boolean' },
            authorizeEmailMessages: { type: 'boolean' },
          },
          required: ['idType', 'idNumber', 'email', 'authorizeCellPhoneMessages', 'authorizeEmailMessages'],
        },
        PersonBlacklist: {
          type: 'object',
          properties: {
            id: { type: 'integer', format: 'int32' },
            idType: { $ref: '#/components/schemas/DocumentType' },
            idNumber: { type: 'integer', format: 'int64' },
            reason: { type: 'string' },
          },
          required: ['idType', 'idNumber'],
        },
      },
    },
  },
  apis: ['./src/config/*.yaml'],
};

export const swaggerSpec = swaggerJSDoc(options);
