FROM node:alpine as build
WORKDIR /usr/src/build
COPY . .
RUN npm ci
RUN npm run build
RUN npm prune --production

FROM node:alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/build .
EXPOSE 3000
CMD ["npm","start"]
