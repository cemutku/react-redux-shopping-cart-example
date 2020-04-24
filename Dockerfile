FROM node
LABEL author="cemutku"
ENV NODE_ENV=development
ENV PORT=3000
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE $PORT
ENTRYPOINT [ "npm", "start" ]