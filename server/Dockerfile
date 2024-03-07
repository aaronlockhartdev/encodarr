FROM node:current as build

WORKDIR /usr/src/app/supervisor

COPY supervisor/package.json ./
RUN npm install

COPY supervisor .
RUN npm run build

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM node:current-alpine as run

WORKDIR /app/supervisor

COPY --from=build /usr/src/app/supervisor/package.json .
COPY --from=build /usr/src/app/supervisor/dist dist

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --omit dev

COPY --from=build /usr/src/app/build ./build
COPY index.js ./

EXPOSE 3000

ENTRYPOINT [ "node", "." ]
