FROM node:18-alpine
RUN npm install -g pnpm
USER node
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app

COPY --chown=node:node package.json ./
COPY --chown=node:node pnpm-lock.yaml ./

RUN pnpm install

COPY --chown=node:node . .
EXPOSE 3001

# RUN pnpm build
CMD ["pnpm", "start"]
