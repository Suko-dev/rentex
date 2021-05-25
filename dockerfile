FROM node

WORKDIR /app/server

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","run","dev"]