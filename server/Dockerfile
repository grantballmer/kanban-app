FROM node:16

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

COPY . .

RUN npm install

RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "run", "dev"]