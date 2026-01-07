# scalix-managed: true
# This file is auto-generated/updated by Scalix Desktop based on your project structure.
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN corepack enable && pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app ./
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
CMD ["sh", "-c", "pnpm run preview -- --host 0.0.0.0 --port $PORT"]