#!/bin/sh

cd ./infra/docker

if [ $1 == "build" ]; then
  docker-compose build
fi

if [ $1 == "up" ]; then
  if [ ! -e ../node_modules ]; then
    docker-compose run --rm web sh -c "npm install"
  fi

  docker-compose up -d
fi

if [ $1 == "down" ]; then
  docker-compose stop
fi
