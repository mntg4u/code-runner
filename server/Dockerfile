# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Expose the port
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]
