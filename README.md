# Spotify-Microservice-System

## 1. user-service

### 📌 Project Setup Summary

- `npx tsc --init` - Initialize TypeScript configuration.

- Updated TypeScript configuration (tsconfig.json):
    - Set `"module": "NodeNext"` to Enables modern Node.js ESM (import/export)
    - Set `"target": "ES2020"` for Compiles TS into modern JavaScript

- Install dependencies & their TypeScript type definitions:
    - `npm i express mongoose dotenv bcrypt jsonwebtoken concurrently nodemon && npm i -D @types/express @types/mongoose @types/bcrypt @types/jsonwebtoken @types/dotenv` type definitions are needed for safer, clearer, and more maintainable code by explicitly defining the expected types of data and interfaces, enhancing both development and runtime robustness.

- Setup `package.json` scripts for easier development and running:
    - `"build": "tsc"` 👉 Compiles all TypeScript (.ts) files into JavaScript inside the dist folder.
    - `"start": "node dist/index.js"` 👉 Runs the compiled JavaScript app from the dist folder in production.
    - `"dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""` 👉 Runs TypeScript compiler in watch mode AND restarts the server automatically whenever files change.




## 2. admin-service

### 📌 Project Setup Summary

- Same tsconfig.json configuration.

- Install dependencies & their TypeScript type definitions:
    - `npm i express dotenv @types/express @types/dotenv cloudinary`
    - `npm i -D nodemon typescript concurrently`
    - `npm i @neondatabase/serverless` - to use neon Postgressql

- 