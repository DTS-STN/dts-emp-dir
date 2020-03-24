FROM node:10-alpine
LABEL maintainer="-"

ARG API_SERVER_URL=x
ENV API_SERVER_URL=${API_SERVER_URL}

COPY . ./

WORKDIR ./

RUN yarn install --quiet

EXPOSE 3000

ENTRYPOINT [ "yarn", "start"]
 

