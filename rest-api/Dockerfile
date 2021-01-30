FROM node:14-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build-ts

CMD ["node", "./dist/server.js"]