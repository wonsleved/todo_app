#FROM node:12.2.0-alpine as builder
#
#LABEL version="1.0"
#LABEL description="Production image for the TODO App Client"
#
#WORKDIR /app
#
#COPY package*.json ./
#
#RUN npm install --silent
#
#COPY . .
#
#RUN npm run build
#
#FROM nginx:1.15
#EXPOSE 3000
#COPY --from=builder /app/build /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/default.conf /etc/nginx/conf.d/default.conf

FROM node:alpine as build
#also say
WORKDIR /app
#copy the react app to the container
COPY package*.json /app/

# #prepare the contiainer for building react
RUN npm install --silent
#RUN npm install react-scripts@3.0.1 -g
COPY . /app/
RUN npm run build

#prepare nginx
FROM nginx:alpine

COPY --from=build /app/build/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/

#fire up nginx
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]