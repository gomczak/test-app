FROM node:22.12.0-alpine3.21

WORKDIR /test-app

COPY package*.json .

RUN npm ci --omit=dev && npm cache clean --force

COPY . .

EXPOSE 3000

CMD ["node", "./app.js"]