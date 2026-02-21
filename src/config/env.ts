import 'dotenv/config';

const companyDocuments = process.env.COMPANY_MANDATORY_DOCUMENTS;
export const apiEnv = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || '',
  API_PREFIX: process.env.API_PREFIX || '/api',
  COMPANY_MANDATORY_DOCUMENTS: companyDocuments ? companyDocuments.split(',').map((doc) => doc.trim()) : [],
};
