FROM node:latest

LABEL version="1.0"
LABEL description="Production image for the TODO App API"

WORKDIR /app

COPY server/package*.json ./

RUN npm install

COPY server .

CMD ["npm", "run", "start"]