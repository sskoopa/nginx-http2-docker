# nginx-http2-docker

This is a docker compose setup to give you a standard nginx web server
configured with SSL and HTTP/2 to serve static content and/or reverse proxy
content from the linux host on your Chromebook.  This has been developed from
ChromeOS 71 with Linux support enabled.

- `docker-compose build && docker-compose up`
- then open browser to https://penguin.linux.test
