FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install production dependencies
RUN yarn install --production

# Copy the rest of the files
COPY . .

# Expose the port
EXPOSE 3000

# Build the app
RUN yarn build

# Start the server
CMD ["yarn", "start"]