FROM node:20-alpine as builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM node:20-alpine as runner

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY package.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/server.js"]