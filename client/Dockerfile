#FROM node:14-alpine3.10 as builder
#
#LABEL version="1.0"
#LABEL description="Production image for the TODO App frontend"
#
#WORKDIR /app
#
#COPY ./package*.json /app/package.json
#
#RUN echo ${pwd}
#RUN ls -l
#
#RUN npm install
#
#COPY . .
#
#RUN npm run build
#
#
#FROM nginx:alpine
#EXPOSE 3000
#COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=builder /app/build /usr/share/nginx/html

FROM node:latest AS builder

LABEL version="1.0"
LABEL description="Production image for the TODO App Client"

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install -g npm@7.10.0

RUN npm install


RUN npm run build