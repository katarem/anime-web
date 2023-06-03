FROM node:18
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install
ENTRYPOINT [ "npm", "run", "dev" ]
EXPOSE 8000
