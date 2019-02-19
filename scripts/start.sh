#!/usr/bin/env bash
npm run build

if [ "$NODE_ENV" == "production" ] ; then
  node server
else
  npm start
fi
