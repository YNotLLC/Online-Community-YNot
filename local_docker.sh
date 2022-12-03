#!/bin/sh

cd ./infra/docker

docker-compose build

if [ ! -e ../node_modules ]; then
  docker-compose run --rm web sh -c "npm install"
fi

docker-compose up -d
