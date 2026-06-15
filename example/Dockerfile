FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm install -g serve && npm run build:normal 

FROM busybox
COPY --from=builder /app/dist/example /www
RUN adduser -D appuser
USER appuser
EXPOSE 3000
CMD ["httpd","-f","-p","3000","-h","/www"]


