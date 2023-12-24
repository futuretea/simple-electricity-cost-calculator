# Stage 1: Build
# Use a specific node version as the base image
FROM node:18 as build-stage

# Set the working directory in the Docker image
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN yarn install

# Copy the rest of the project files into the working directory
COPY . .

# Build the application for production
RUN yarn build

# Stage 2: Setup Production Environment
# Use a stable version of nginx as the base image for the production environment
FROM nginx:stable-alpine as production-stage

# Copy the build directory from the build-stage to the nginx serve directory
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Start nginx when the container is launched
CMD ["nginx", "-g", "daemon off;"]
