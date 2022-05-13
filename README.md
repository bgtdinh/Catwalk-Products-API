# Catwalk Products Microservice

Building and scaling the backend api microservice serving product information from a postgres database to another separate front end react project.

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

This project was deployed to AWS with multiple instances of the server load balanced using NGINX. The database was indexed reducing query times and a local cache system was initially employed on each server, however was later changed to a redis cache.

My api microservice containing products was primarily get requests so the optimzation that made the most sense was caching the results. By caching the results it would prevent querying the database and increasing server usage slowing response times.

I setup a redis cache where the servers would check the cache before querying the database if the cache did not contain the information. This drastically reduced response times when the information was saved on the Redis cache.
