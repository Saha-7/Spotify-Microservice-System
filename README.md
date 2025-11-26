# Spotify-Microservice-System

## 1. user-service

### 📌 Project Setup Summary

- `npx tsc --init` - Initialize TypeScript configuration.

- Updated TypeScript configuration (tsconfig.json):
    - Set `"module": "NodeNext"` to Enables modern Node.js ESM (import/export)
    - Set `"target": "ES2020"` for Compiles TS into modern JavaScript

- Install dependencies & their TypeScript type definitions:
    - `npm i express mongoose dotenv bcrypt jsonwebtoken concurrently nodemon && npm i -D @types/express @types/mongoose @types/bcrypt @types/jsonwebtoken @types/dotenv` type definitions are needed for safer, clearer, and more maintainable code by explicitly defining the expected types of data and interfaces, enhancing both development and runtime robustness.
    -  `npm i cors @types/cors`

- Setup `package.json` scripts for easier development and running:
    - `"build": "tsc"` 👉 Compiles all TypeScript (.ts) files into JavaScript inside the dist folder.
    - `"start": "node dist/index.js"` 👉 Runs the compiled JavaScript app from the dist folder in production.
    - `"dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""` 👉 Runs TypeScript compiler in watch mode AND restarts the server automatically whenever files change.

-   Set your `.env file` exactly similar to `.env.example` file & add the required details init.




## 2. admin-service

### 📌 Project Setup Summary

- Same tsconfig.json configuration.

- Install dependencies & their TypeScript type definitions:
    - `npm i express dotenv @types/express @types/dotenv cloudinary`
    - `npm i -D nodemon typescript concurrently`
    - `npm i @neondatabase/serverless` - to use neon Postgressql
    - `npm i multer axios datauri`
    - `npm i @types/multer`
    -  `npm i cors @types/cors`


- Follow the same setup in your `.env` file similar to `.env.example` file in admin-service. [` PORT, DB_URL, CLOUDINARY-SECRETS` ]


-   Redis setup:
    -   `npm i redis @types/redis`
    -   Follow the Redis config on `index.ts` file
    -   Set your `.env file` exactly similar to `.env.example` file & add the required details init.






## 3. song-service

### 📌 Project Setup Summary

- Same tsconfig.json configuration.

- Install dependencies & their TypeScript type definitions:
    - `npm i express dotenv @types/express @types/dotenv`
    - `npm i @neondatabase/serverless` - to use neon Postgressql
    - `npm i -D nodemon typescript concurrently`
    -  `npm i cors @types/cors`

-   Redis setup:
    -   `npm i redis @types/redis`
    -   Follow the Redis config on `index.ts` file
    -   Set your `.env file` exactly similar to `.env.example` file & add the required details init.