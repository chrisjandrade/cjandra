FROM node:9.8.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

ENV NODE_ENV=production

RUN npm install
RUN npm run build

EXPOSE 80

CMD ["./docker_assets/docker_entrypoint.sh"]