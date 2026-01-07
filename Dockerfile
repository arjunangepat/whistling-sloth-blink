# Use an official Node.js runtime as a parent image
FROM node:20-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock/pnpm-lock.yaml)
COPY package.json ./
COPY pnpm-lock.yaml ./
# If using npm:
# COPY package-lock.json ./
# If using yarn:
# COPY yarn.lock ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the React application
RUN pnpm run build

# Use a lighter Node.js image for the final stage
FROM node:20-alpine

WORKDIR /app

# Copy build artifacts from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port the app runs on
ENV PORT 8080
EXPOSE 8080

# Command to run the application
CMD ["pnpm", "start"]