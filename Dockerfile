FROM node:10-alpine
LABEL maintainer="-"

COPY . /src

WORKDIR /src

RUN npm install --quiet --production

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]