# Project requirments
1. NodeJs v12.18.4
2. Npm v6.14.8
3. PostgreSQL v12.4
# Installation
1. Run ```npm i``` for installing project dependency
2. Create database
3. Create config.json in **config** directory with such format 
```
{
  "development": {
    "username": "username",
    "password": "password",
    "database": "dbName",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
   "test": {
    "username": "username",
    "password": "password",
    "database": "dbName",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
   "production": {
    "username": "username",
    "password": "password",
    "database": "dbName",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
}
```
4. Run ```npm run migrate``` for db migrations
5. Run ```npm run seed``` to fill the database with test data
6. Run ```npm run start``` for start server

# Routes
## Purchases

##### Method: GET URL: http://localhost:3000/api/v1/purchase/:purchaseId
##### Method: GET URL: http://localhost:3000/api/v1/purchase 
##### Method: POST URL: http://localhost:3000/api/v1/purchase {category, amount, userId}
##### Method: PATCH URL: http://localhost:3000/api/v1/purchase/:purchaseId {category, amount}
##### Method: DELETE URL: http://localhost:3000/api/v1/purchase/:purchaseId

## Items
##### Method: GET URL: http://localhost:3000/api/v1/item/:itemId
##### Method: GET URL: http://localhost:3000/api/v1/item 
##### Method: POST URL: http://localhost:3000/api/v1/item {name, price, brandId, purchaseId, fileLink}
##### Method: PATCH URL: http://localhost:3000/api/v1/item/:itemId {name, price, fileLink}
##### Method: DELETE URL: http://localhost:3000/api/v1/item/:itemId
##### Method: POST URL: http://localhost:3000/api/v1/item/filter { brands }