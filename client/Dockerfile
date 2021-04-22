FROM node:12.0-alpine AS builder

LABEL version="1.0"
LABEL description="Production image for the TODO App frontend"

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build


FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html