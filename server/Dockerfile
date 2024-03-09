FROM node:current as build

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM node:current-alpine as run

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/packages ./packages

RUN npm ci --omit dev

EXPOSE 3000

ENTRYPOINT [ "node", "build/main.esm.js" ]
