 FROM node:alpine as build

WORKDIR /app

COPY package*.json /app/

RUN npm install --silent

COPY . /app/
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]