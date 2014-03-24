iron_router_bug_redirect
========================

iron router bug on redirect when loged in

1. copy install.sh and sources/ in same directory
2. lunch install.sh with sudo (mrt needs it), it will create meteor create from sources
3. go to http://localhost:3000
4. click on link to log in -> you will be redirected to http://localhost:3000/app
5. press F5 -> you will be redirected to http://localhost:3000
6. press F5 again -> you will be redirected to http://localhost:3000/app
7. observe console logs when you refresh -> Meteor.user() is not defined when you are at http://localhost:3000/app
8. logout
9. comment Router.go in onBeforeAction 
10. click on link to be log in
11. refresh page ->Meteor.user() is  defined but not the first time
12. go to http://localhost:3000/app
13. refresh page ->Meteor.user() is  defined but not the first time

