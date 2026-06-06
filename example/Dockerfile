FROM ubuntu
EXPOSE 3000
WORKDIR /app
RUN apt update
RUN apt install nodejs npm -y
COPY . .
RUN npm install
RUN npm run build:normal
RUN npm install -g serve
CMD ["serve", "-s", "-l", "3000", "dist/example"]
