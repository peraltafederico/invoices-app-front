#!/bin/bash

aws s3 rm --recursive s3://invoicesapp.peraltafedericomanuel.com
aws s3 cp ./public s3://invoicesapp.peraltafedericomanuel.com --recursive