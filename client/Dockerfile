# Use official Node.js image as base
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY client/package.json client/package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY client/ ./

# Build the React app
RUN npm run build

# Expose port for frontend
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
