FROM node:18-alpine

RUN apk add --no-cache libc6-compat

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app
ENV PORT=3080

COPY . /app
RUN npm install && npm run build
RUN npx prisma generate

CMD [ "node", "/app/dist/server.bundle.js" ]