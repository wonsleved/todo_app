FROM node:14-alpine3.10 as builder

LABEL version="1.0"
LABEL description="Production image for the TODO App frontend"

WORKDIR /app

COPY package*.json ./package.json

RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html