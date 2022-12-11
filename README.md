# restapi-mongodb
MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

Representational state transfer (REST) is a software architectural style that was created to guide the design and development of the architecture for the World Wide Web. REST defines a set of constraints for how the architecture of an Internet-scale distributed hypermedia system, such as the Web, should behave. The REST architectural style emphasizes the scalability of interactions between components, uniform interfaces, independent deployment of components, and the creation of a layered architecture to facilitate caching components to reduce user-perceived latency, enforce security, and encapsulate legacy systems.

A REST API is an API implementation that adheres to the REST architectural constraints. It acts as an interface. The communication between the client and the server happens over HTTP. A REST API takes advantage of the HTTP methodologies to establish communication between the client and the server. REST also enables servers to cache the response that improves the application’s performance.

The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively.



Register New User

    POST    -   /register   - Accepts name, email and password in the body, the email Id should be unique i.e no two users can have the same email id


POST    -   /login      - Accepts email and password in request body, verify the email and password and respond with correct http status code in case of success or failure
    
Return token in the response after successful login (Example Response - { token: <JWT Token> } )


    
Add CRUD routes for Posts create, read, update, and delete operations

GET     -   /posts          - Get all the posts in the db, the response should be in format (Example - { posts: [] } )

POST    -   /posts          - Create a new post (accept title, body, image) and store the info in the db with the user reference, return the post created in the response (Example - { _id, name, title, body, user } )

PUT     -   /posts/:postId  - Edit/Update a Post with the id provided

DELETE  -   /posts/:postId  - Delete a Post with the id provided




Add a middleware to perform authentication and authorization for users (only logged in users can access the posts apis - use JWT for authentication)
Only authorized users can perform Edit/Delete Operation for the posts, userA should not be able to edit/delete userB's posts
Use appropriate status code for different operations
