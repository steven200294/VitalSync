# Multi-stage build : le premier stage installe les dependances et execute les tests,
# le second stage produit une image legere de production.
# Avantages : l'image finale ne contient pas les devDependencies (jest, supertest),
# ce qui reduit la taille de l'image et la surface d'attaque en termes de securite.

# Stage 1 : Build et tests
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test

# Stage 2 : Production
FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /app/server.js .
EXPOSE 3000
CMD ["node", "server.js"]
