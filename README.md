# Spotify-Microservice-System


## 📌 Project Setup Summary

- `npx tsc --init` - Initialize TypeScript configuration.

- Updated TypeScript configuration (tsconfig.json):
    - Set `"module": "NodeNext"` to Enables modern Node.js ESM (import/export)
    - Set `"target": "ES2020"` for Compiles TS into modern JavaScript

- Install dependencies & their TypeScript type definitions:
    - `npm i express mongoose dotenv bcrypt jsonwebtoken concurrently nodemon && npm i -D @types/express @types/mongoose @types/bcrypt @types/jsonwebtoken @types/dotenv` type definitions are needed for safer, clearer, and more maintainable code by explicitly defining the expected types of data and interfaces, enhancing both development and runtime robustness.
