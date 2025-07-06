# Use a Node.js base image for development
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install curl for healthcheck
RUN apt-get update && apt-get install -y curl



# Copy the rest of the application code
COPY . .

# Expose the port Astro runs on
EXPOSE 4321

# Start the development server with hot-reloading
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
