FROM node:13-alpine as builder
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./public ./public
COPY ./src ./src

ARG PROJECT_URL_ONE
ENV REACT_APP_PROJECT_URL_ONE=$PROJECT_URL_ONE
ARG PROJECT_URL_TWO
ENV REACT_APP_PROJECT_URL_TWO=$PROJECT_URL_TWO

RUN npm install
RUN npm run build


FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx-react.conf /etc/nginx/conf.d/default.conf
EXPOSE 88

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]