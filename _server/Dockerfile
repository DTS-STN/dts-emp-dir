
FROM node:10-alpine

ARG NODE_ENV=x
ENV NODE_ENV=${NODE_ENV}
ARG MONGO_CONN_STRING=x
ENV MONGO_CONN_STRING=${MONGO_CONN_STRING}
ARG MONGO_DB_PASS=x
ENV MONGO_DB_PASS=${MONGO_DB_PASS}
ARG NODE_SERVER_PORT=6001
ENV NODE_SERVER_PORT=${NODE_SERVER_PORT} 
ARG NODE_JWTSECRET=x
ENV NODE_JWTSECRET=${NODE_JWTSECRET}

COPY . ./

WORKDIR ./

RUN yarn install

EXPOSE ${NODE_SERVER_PORT}

ENTRYPOINT [ "yarn", "start" ]