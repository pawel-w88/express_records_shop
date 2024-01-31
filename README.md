# express_records_shop

## Things that are going to be done

This file lists the changes that need to be made in each stage. It is ordered in reverse chronological order, meaning that the last changes made will always be on top of the file, so that readers will not have to scroll all the way down with each task added.

## Task 01 - Mock database and Controllers

Most applications made for the web have to do with some sort of data manipulation. In order to be able to manipulate our data we have to do two things first:

    - We need to define the endpoints of our app that our users will use to send
      different kinds of requests (GET, POST, DELETE, etc).
    - We have to define how do we want our data to look like and of course store them somewhere.

**Story**: Our client is a record shop owner who wants to have a list of products in the main page of their shop. They know that they want to display the title, the artist, the year, the cover image and the price for each record they have available. However, the client still doesn't have a full list of all their products. He would also like to be able to add new records to his collection.

**TODO**:

1. Please create two endpoints(routes) for the shop owner

   - `api/records` -> a `GET` that will return all records of the store
   - `api/records` -> a `POST` that will add a new record to the record collection

   For now you can just return a string from the above endpoints, just to make sure everything works.

2. Using `lowdb` set up a mock database for our records. It can be empty or it can contain already some fake data. Update the routes above so that they work just like they should.

   - `api/records` -> should return all the records that are in our lowdb database
   - `api/records` -> should add a new record to our lowdb database

**Task 03 - Routing**

In the first task, we saw that there are queries such as GET and POST that determine what the function of the endpoint is. (Queries, create in our case) Now let's look at PUT and DELETE.

PUT updates a resource that already exists.
DELETE deletes an existing resource.
Background: Our customer, the music shop, would like to be able to update products and delete them from the range. In addition to the product data model, our customer would like to have two other data models. One for users and one for orders

The steps:

Create three more endpoints (routes) for the product data model (record)

`records/:id` -> a GET request that returns a product based on the passed id
`records/:id` -> a PUT request that updates a product based on an id
`records/:id` -> a DELETE request that deletes the product with the id
Create new endpoints for users and orders.

A user contains an ID, first name, last name, email and password. (first name, last name, email, password). An order contains a product ID (id) and a quantity. We will add further properties to the models later.

User model (users)
`users` -> GET all users
`users/:id` -> GET to output a specific user
`users `-> POST create a user
`users/:id`-> PUT update a user
`users/:id` -> DELETE delete a user

Orders model (orders)
`orders` -> GET all orders
`orders/:id` -> GET output one order
`orders` -> POST create an order
`orders/:id` -> PUT update an order
`orders/:id` -> DELETE delete an order

**Task 04 - Mongoose and Seeding**

In this task we will introduce Mongoose. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. We will learn how to setup Mongoose and how to connect it with our app. We will create our user models and schemas and define exactly how a record/user/order object will look. The next step will be to create a feed function that will feed our database with some fake data so we will be able to test all our endpoints straight away after initialising our server.

**TODO:**

Please set up mongoose in your server.
Create a data schema and a model for our records, users and orders.
Write a seed script using chance that will run everytime we start our project. If the database is empty, it will feed it some records, orders and users.

chance eine Alternative zu faker
chancejs.com