FROM node as build
WORKDIR /app

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

COPY . .
RUN bun install
EXPOSE 5173

CMD ["yarn", "dev"]