#!/bin/sh
docker run --name rsm --rm -it -v $PWD:$PWD -w $PWD node:16-alpine