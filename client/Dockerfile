FROM node:12.0-alpine as builder
#FROM node:12.0-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install --silent
COPY . .

#RUN npm run build

#comment EXPOSE later
#EXPOSE 3000

#CMD ["npm", "run", "start"]


RUN npm run build

FROM nginx
EXPOSE 3000
RUN mkdir -p /etc/nginx/conf.d/
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/client/build /usr/share/nginx/html