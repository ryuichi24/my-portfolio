FROM node:13-alpine as builder
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./public ./public
COPY ./src ./src

ARG API_URL
ENV REACT_APP_API_URL=$API_URL

RUN npm install
RUN npm run build


FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx-react.conf /etc/nginx/conf.d/default.conf
EXPOSE 82

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]