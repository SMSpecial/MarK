# Production Multi-Stage Dockerfile for Google Cloud Run
# Optimized for minimal footprint and maximum security

# 1. Build Stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package descriptors
COPY package*.json ./

# Install all dependencies including devDependencies for build
RUN npm ci

# Copy source files
COPY . .

# Build the client bundle with Vite
RUN npm run build

# 2. Production Runtime Stage
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
# Google Cloud Run default port is 8080
ENV PORT=8080

# Run as non-root user for security compliance
USER node

# Copy built assets and server configuration from builder
COPY --chown=node:node --from=builder /app/package*.json ./
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/dist ./dist
COPY --chown=node:node --from=builder /app/server.ts ./
COPY --chown=node:node --from=builder /app/public ./public

EXPOSE 8080

# Start server using the standard production command
CMD ["npm", "run", "start"]
