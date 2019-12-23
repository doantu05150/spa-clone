FROM mhart/alpine-node:8 as build

LABEL authors="evan <sang@digitaltoken.io>"

# Set the working directory, copy dependency management files to the working directory,
# and install the dependencies
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN apk add --no-cache git
RUN yarn install && \
    yarn cache clean

# Copy all files to the working directly, build the application
# and purge the development dependencies
COPY . .
RUN yarn build

# Create a new image using a minimal Node.js image
# with no extra tools packaged in, such as Yarn or npm for the smallest final size
FROM mhart/alpine-node:base-8

WORKDIR /usr/src
ENV NODE_ENV="production"
ENV HOST 0.0.0.0
ENV PATH="./node_modules/.bin:$PATH"

# Copy files from the base image over to our new image's working directory
COPY --from=build /usr/src .

EXPOSE 3000

CMD ["node", "entry.js"]
