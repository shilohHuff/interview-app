#Stage 1 Create all the artifacts needed to run the application.
FROM node:7.10 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
COPY . ./
RUN npm run build

#Stage 2 Copy the static assests to a nginx container to be hosted.
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]