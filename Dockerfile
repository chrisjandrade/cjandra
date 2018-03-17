FROM node:9.8.0-alpine

RUN mkdir -p /opt/cjandra

WORKDIR /opt/cjandra

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["./docker_assets/docker_entrypoint.sh"]