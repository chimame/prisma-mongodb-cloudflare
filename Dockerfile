FROM node:14.17-alpine3.12

RUN yarn global add @cloudflare/wrangler@1.19.5
WORKDIR /app
