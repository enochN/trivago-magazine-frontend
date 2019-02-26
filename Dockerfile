FROM node:8.15.0-alpine

USER node

RUN mkdir -p /home/node/app/node_modules
RUN chown -R node:node /home/node/app/

WORKDIR /home/node/app/

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json /home/node/app/

USER node
RUN npm install

COPY --chown=node:node . /home/node/app/

RUN mkdir -p /home/node/app/build
RUN npm run build

EXPOSE 5005
ENV NODE_ENV=production
CMD ["node", "server"]