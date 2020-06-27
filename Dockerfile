# WEB

FROM node:12.18-alpine as web

WORKDIR /usr/app/web/
COPY web/package*.json ./
RUN npm install -y
COPY web/ ./
RUN npm run build

# SERVER

FROM node:12.18-alpine

WORKDIR /usr/app/
COPY --from=web /usr/app/web/build/ ./web/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install -y
COPY server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]
