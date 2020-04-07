#stage 1
FROM node:13-alpine as builder

WORKDIR /app

#portfolio
COPY ./my-portfolio-web-page ./my-portfolio-web-page
#set env var
ARG PROJECT_URL_ONE
ENV REACT_APP_PROJECT_URL_ONE=$PROJECT_URL_ONE
ARG PROJECT_URL_TWO
ENV REACT_APP_PROJECT_URL_TWO=$PROJECT_URL_TWO

#video link manager
COPY ./video-link-manager ./video-link-manager
#set env var
ARG API_URL_VIDEO
ENV REACT_APP_API_URL_VIDEO=$API_URL_VIDEO

#time table manager
COPY ./time-table-manager ./time-table-manager
#set env var
ARG API_URL_TABLE
ENV REACT_APP_API_URL_TABLE=$API_URL_TABLE


#building
WORKDIR /app/my-portfolio-web-page
RUN npm install
RUN npm run build

WORKDIR /app/video-link-manager
RUN npm install
RUN npm run build

WORKDIR /app/time-table-manager
RUN npm install
RUN npm run build

#stage 2
FROM nginx:alpine

#copy each artifact of react apps
COPY --from=builder /app/my-portfolio-web-page/build /var/www/portfolio.ryuichi24.com/html
COPY --from=builder /app/video-link-manager/build /var/www/viket.ryuichi24.com/html
COPY --from=builder /app/time-table-manager/build /var/www/table.ryuichi24.com/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/portfolio.ryuichi24.conf /etc/nginx/conf.d/
COPY ./nginx/table.ryuichi24.conf /etc/nginx/conf.d/
COPY ./nginx/viket.ryuichi24.conf /etc/nginx/conf.d/

EXPOSE 80

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]