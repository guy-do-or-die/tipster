# Database

Our production MongoDB database in hosted on SaaS platform [MongoHQ](http://mongohq.com).

Use the following credentials to login to the MongoHQ dashboard:

Email:
tiiipster@gmail.com

Password:
tipster

## Default Database User

Username:
tiiipster

Password:
tiiipster

## Production Database URI

mongodb://tiiipster:tiiipster@dharma.mongohq.com:10088/Tiiipster

This URI is stored in Heroku's environment variable MONGOHQ_URL.

You can make sure but running the following command in Terminal:
$ heroku config:get MONGOHQ_URL

Our application gets this URI via process' env:
...
db: process.env.MONGOHQ_URL
...
