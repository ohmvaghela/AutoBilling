FROM node:22-alpine3.19
# FROM alpine:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY index.js connect.js ./
COPY model/ /usr/src/app/model/
COPY public/ /usr/src/app/public/
COPY routes/ /usr/src/app/routes/
COPY views/ /usr/src/app/views/

EXPOSE 8000

CMD ["node", "index.js"]

