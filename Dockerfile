FROM node:20-slim

WORKDIR /usr/home/app

COPY package*.json .

USER node

COPY . .

EXPOSE 3048
