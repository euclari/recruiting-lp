FROM oven/bun:1-alpine AS dependencies

WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install
COPY . .
EXPOSE 3000
CMD ["bun", "next", "dev", "--turbopack"]
