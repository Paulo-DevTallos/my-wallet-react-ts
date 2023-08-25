FROM node:20-slim

WORKDIR /usr/home/app

USER node

COPY . .

EXPOSE 3047

