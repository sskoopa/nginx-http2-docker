FROM nginx:latest

# Need the default config file to edit?
# docker run --name tmp-nginx-container -d nginx
# docker cp tmp-nginx-container:/etc/nginx/nginx.conf nginx.conf
# docker rm -f tmp-nginx-container

COPY nginx.conf /etc/nginx/nginx.conf
COPY example.js /etc/nginx/example.js
COPY certs /etc/nginx/certs

VOLUME /data/www