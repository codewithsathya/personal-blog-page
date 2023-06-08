FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY . .

RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build \
  else yarn build; \
  fi

CMD \
  if [ -f yarn.lock ]; then yarn start; \
  elif [ -f package-lock.json ]; then npm start; \
  elif [ -f pnpm-lock.yaml ]; then pnpm start; \
  fi