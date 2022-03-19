FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json .
COPY yarn.json .
RUN npm install yarn
RUN yarn install
RUN yarn build
COPY . .
EXPOSE 1337
CMD ["yarn", "start"]
