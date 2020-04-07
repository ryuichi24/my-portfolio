#!/bin/sh

certbot certonly -n -d ryuichinishi.com,portfolio.ryuichinishi.com,viket.ryuichinishi.com,table.ryuichinishi.com \
  --standalone --preferred-challenges http --email ryuichi.nishi24@gmail.com --agree-tos --expand


# start cron
/usr/sbin/crond -f -d 8 &


# Start nginx
/usr/sbin/nginx -g "daemon off;"