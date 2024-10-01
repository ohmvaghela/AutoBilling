FROM node:22-alpine3.19 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY public/ ./public
COPY src/ ./src

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

# COPY env.sh /usr/share/nginx/html
# RUN chmod +x /usr/share/nginx/html/env.sh


COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# CMD ["/bin/sh", "-c", "/usr/share/nginx/html/env.sh && nginx -g 'daemon off;'"]
CMD ["nginx", "-g", "daemon off;"]
