# Use official Node.js image as base
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY server/package.json server/package-lock.json ./
RUN npm install

# Copy the rest of the server files
COPY server/ ./

# Expose port for backend
EXPOSE 5000

# Command to run the Express app
CMD ["node", "index.js"]
