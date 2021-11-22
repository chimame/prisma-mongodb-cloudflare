#!/bin/sh

npm install
npm run generate

exec "$@"
