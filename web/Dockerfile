FROM node:12.18-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -y

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
