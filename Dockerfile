# Create the container from the alpine linux image
FROM nginx:1.15-alpine

# Add nodejs for npm
RUN apk add --update nodejs nodejs-npm

# Create the directories we will need
RUN mkdir -p /tmp/frontend
RUN mkdir -p /var/www/html

# Set the directory we want to run the next commands for
WORKDIR /tmp/frontend

# Install the dependencies, can be commented out if you're running the same node version
COPY package.json .
RUN npm install

# Copy our source code into the container
COPY . .

COPY .env.production.example .env

# run webpack and the vue-loader
RUN npm run build

# Copy the respective nginx configuration files
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy the built app to our served directory
RUN cp -r dist/* /var/www/html

# remove tmp/frontend directory
RUN rm -r /tmp/frontend

# make all files belong to the nginx user
RUN chown nginx:nginx /var/www/html

# expose port to enter the container
EXPOSE 8080

# start nginx and keep the process from backgrounding and the container from quitting
CMD ["nginx", "-g", "daemon off;"]
