# Project-Catwalk Products Microservice

Building and scaling the backend api microservice for the products section of another previous front end project.

# Installation

```
npm install
```

Fill in the data in the env.example and remove the .example extension so its
```
.env
```

This project runs using postgres so follow instructions on how to set that up if needed with the service running.

To create the tables, load data into the server, and index the tables create a data folder with csv's and run the following commands.

```
npm run build-tables
npm run import-data
npm run index-data
```

# Testing

If you would like to do basic unit testing the commands to do that after installing the packages is:

```
npm run test
```

If you would like to do local stress tests please make sure k6 is installed on your machine and then run:

```
npm run k6
```

# Optimizations

This project was deployed to AWS with multiple instances of the server load balanced using NGINX. The database was index increasing query times and a local cache system was employed on each server.

My api microservice containing products was primarily get requests so the optimzation that made the most sense was caching the results. By caching the results it would prevent querying the database and running further code which would slow the response times.

I setup a local cache which was located on each server which held a small cache if the same query was made in a certain time frame. This helped when it was the same query being hit repeated in a short timeframe however if it was multiple random queries there was no reduction in response time.

I was unable to finish the caching rework, however looking ahead my plan was to implement a Redis database caching system where the servers would check the data from the Redis database before attempting to query the Postgres database. This would decrease response times as long as the data was already cached.