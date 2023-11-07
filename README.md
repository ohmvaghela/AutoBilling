Database password : seventhFloor
> # Always use `git pull` before making changes then push

>  Add DATABASEURL, SECRET_KEY

# Installed

|                       |                                                         |
| --------------------- | ------------------------------------------------------- |
| `mongoose`            | MongoDB ORM for Node.js data modeling.                  |
| `mongodb`             | NoSQL database for scalable, document-oriented storage. |
| `express`             | Minimalist Node.js web application framework.           |
| `bcryptjs`              | Password hashing library for secure authentication.     |
| `jsonwebtoken`        | Token-based authentication and authorization mechanism. |
| `multer`              | Middleware for handling file uploads in Node.js.        |
| `nodemon`             | Utility for automatic Node.js server restarts.          |
| `validator`           |                                                         |
| `mongoose-type-email` |                                                         |
| `dotenv`              |                                                         |
| `cookie-parser`              |Used for saving authentication token to the cookie                                                         |

# REQUESTS
- User SignUp
    - Request
    ```
    http://localhost:8000/addUser
    ```
    - Body
    ```
    {
    "shopName":"xyz",
    "firstName":"xyz",
    "shopEmail":"xyz@gmail.com",
    "lastName":"xyz",
    "password":"xyz"
    }
    ```

- User Login
    - Request
    ```
    http://localhost:8000/loginUser
    ```
    - Body
    ```
    {
    "loginEmail": "xyz@gmail.com",
    "password": "xyz"
    }
    ```
- Add bill
    - Request
    ```
    http://localhost:8000/addBill
    ```
    - Body
    ```
    {
    "consumerName" :"rishab",
    "consumerEmail" :"rkt10@iitbbs.ac.in",
    "shopEmail" :"an30@iitbbs.ac.in",
    "billAmount" :5000,
    "billDescription":"sadas"
    }
    ```
- Bill Fetch
    - Request
    ```
    http://localhost:8000/billFetch/:id
    ```
- Shop Fetch
    - Request
    ```
    http://localhost:8000/shopFetch?email=xyz.gmail.com
    ```

### WebHooks
- Say we want to subscribe some events on 3rd party server side say razorpay SDK
- So we cant be connected to the server 24x7 
- So instead we create a webhook 
- In Webhooks instead of our server fetching info about the events 3rd party server sends payload whenever event is triggered
- For that we provide our URL and events that we want to subscribe from 3rd party server  


