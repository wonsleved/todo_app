FROM node:latest AS builder

LABEL version="1.0"
LABEL description="Production image for the TODO App frontend"

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm audit fix --force

COPY . .

RUN npm run build --prod


FROM nginx:alpine
EXPOSE 3000
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html