#!/bin/sh

certbot certonly --standalone -d ryuichi24.com,portfolio.ryuichi24.com,viket.ryuichi24.com,table.ryuichi24.com --email ryuichi.nishi24@gmail.com -n --agree-tos --expand


# start cron
/usr/sbin/crond -f -d 8 &


# Start nginx
/usr/sbin/nginx -g "daemon off;"