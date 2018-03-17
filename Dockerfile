FROM node:9.8.0-alpine

RUN mkdir -p /usr/src/app

ENV NODE_ENV=production

WORKDIR /usr/src/app

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

COPY package.json ./
COPY . .

RUN npm install
RUN npm rebuild node-sass --force

EXPOSE 80

CMD ["./docker_assets/docker_entrypoint.sh"]
