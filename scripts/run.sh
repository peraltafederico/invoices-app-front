#!/bin/bash

s3 rm --recursive s3://invoicesapp.peraltafedericomanuel.com
s3 cp ./public s3://invoicesapp.peraltafedericomanuel.com --recursive