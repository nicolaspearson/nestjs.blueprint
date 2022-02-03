import path from 'path';

// Set up test environment variables
process.env.API_HOST = 'localhost';
process.env.API_PORT = '3000';
process.env.AWS_ACCESS_KEY_ID = 'test';
process.env.AWS_ENDPOINT = 'http://localhost:4566';
process.env.AWS_REGION = 'eu-west-1';
process.env.AWS_SECRET_ACCESS_KEY = 'test';
process.env.AWS_S3_BUCKET_NAME = 'dellingr';
process.env.ENVIRONMENT = 'test';
process.env.JWT_ALGORITHM = 'HS256';
process.env.JWT_ISSUER = 'support@dellingr.com';
process.env.JWT_SECRET = 'secretKey';
process.env.JWT_TOKEN_EXPIRATION = '15m';
process.env.LOG_LEVEL = 'error';
process.env.NODE_ENV = 'development';
process.env.TYPEORM_CONNECTION = 'postgres';
process.env.TYPEORM_DATABASE = 'dellingr';
process.env.TYPEORM_ENTITIES = path.resolve(__dirname, '../../src/db/entities/*.ts');
process.env.TYPEORM_HOST = process.env.TYPEORM_HOST || 'localhost';
process.env.TYPEORM_MIGRATIONS = path.resolve(__dirname, '../../src/db/migrations/*.ts');
process.env.TYPEORM_MIGRATIONS_RUN = 'true';
process.env.TYPEORM_PASSWORD = 'masterkey';
process.env.TYPEORM_PORT = process.env.TYPEORM_PORT || '5432';
process.env.TYPEORM_SYNCHRONIZE = 'true';
process.env.TYPEORM_USERNAME = 'admin';
process.env.TYPEORM_USE_WEBPACK = 'false';
