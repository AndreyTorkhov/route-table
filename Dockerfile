FROM node as build
WORKDIR /app

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

RUN bun install

COPY . .
EXPOSE 5173

CMD ["yarn", "dev"]