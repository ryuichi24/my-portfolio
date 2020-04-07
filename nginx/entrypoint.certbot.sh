#!/bin/sh

certbot certonly -n -d ryuichi24.com,portfolio.ryuichi24.com,viket.ryuichi24.com,table.ryuichi24.com \
  --standalone --preferred-challenges http --email ryuichi.nishi24@gmail.com --agree-tos --expand


# start cron
/usr/sbin/crond -f -d 8 &


# Start nginx
nginx -g daemon off;