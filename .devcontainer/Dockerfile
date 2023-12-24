# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the Docker image
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN yarn install

# Copy the rest of the project files into the working directory
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000