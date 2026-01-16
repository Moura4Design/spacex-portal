FROM node:20-alpine
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

ARG NEXT_PUBLIC_SPACEX_GRAPHQL
ENV NEXT_PUBLIC_SPACEX_GRAPHQL=$NEXT_PUBLIC_SPACEX_GRAPHQL

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
