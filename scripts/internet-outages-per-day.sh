#!/bin/sh
logpath=~/logs/connection.log
grep 'Disconnected' $logpath | awk '{print $1}' | cut -c2- | sort | uniq -c
