FROM node:12-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12-alpine AS deploy
WORKDIR /app
COPY package* ./
RUN npm install --production
COPY --from=build ./app/public ./public
COPY --from=build ./app/build ./build
EXPOSE 8000
CMD ["npm", "start"]