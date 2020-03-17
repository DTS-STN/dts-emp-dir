FROM node:10-alpine
LABEL maintainer="-"

COPY . ./

WORKDIR ./client

RUN yarn install --quiet && \
    yarn add serve --quiet && \
    yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start-prod"]
 

