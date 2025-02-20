# Step 1: Use a more recent version of Node.js for building the frontend app
FROM node:18 AS build
 
# Set the working directory in the container
WORKDIR /app
 
# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the source code
COPY . .
 
# Build the frontend application (e.g., React, Vite)
RUN npm run build
 
# Step 2: Serve the app with Nginx
FROM nginx:alpine
 
# Copy the build directory from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html
 
# Expose the port that Nginx will listen on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]