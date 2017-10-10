FROM mhart/alpine-node:8

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

RUN npm install --production

EXPOSE 5005

CMD [ "npm", "start" ]
