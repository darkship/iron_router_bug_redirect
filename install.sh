#!/bin/bash

meteor create test_iron_router --release 0.8.0-rc0
cp sources/*.js test_iron_router/
cp sources/*.html test_iron_router/
cp sources/*.json test_iron_router/

cd test_iron_router;

meteor remove insecure;
meteor remove autopublish;
meteor add accounts-base;
meteor add accounts-password;

sudo mrt update --force
meteor add iron-router

meteor
