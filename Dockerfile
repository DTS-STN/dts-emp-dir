FROM node:10-alpine
LABEL maintainer="-"

COPY /client /client

WORKDIR /client

RUN yarn install --quiet 
RUN yarn add serve --quiet
RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start-prod" ]