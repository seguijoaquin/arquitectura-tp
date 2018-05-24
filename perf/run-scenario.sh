#!/bin/sh
npm run artillery -- run -o myreport_$1 $1.yaml -e $2
