- **Title:**
  A basic CRUD application for Shopify back-end intern task
  </br>

- **Description**
  For more reference checkout [Project](https://docs.google.com/document/d/1vVlAvNAGrfrN8h9Rg4tJuRz8QErnd1FV9z27zyYjaf8/edit?usp=sharing) report

- **Pre-Requisites**

---

`Node.js`
`Express.js`
`MongoDb`
`JavaScript`

</br>

- **Implemenation of the REST API**

---

```sh
/products
```
  <p>
  Deals with the CRUD operation of the data of the inventory items
  </p> 
 
----- 
* **Sample URL**

/products/addproduct:

- **Method:**

  `POST`

- **Data Params**

  **Required:**

  `Item Name=[String]`
  `Item Category=[Email]`
  `Item Stock=[integer]`
  `Item Id=[integer]`
  `Item Price=[integer]`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{sucess: "true", message: "Your Requested has been accepted" }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{success: "false", message : "Could not process the request, Try again" }`

</br>

- **Sample Call**

  ```javascript</br>
  route.post("/", (req, res, next) => {

      try {
        res.send({sucess: true, message: resp.message})
      } catch (err) {
        res.send({success: false, message: "Error in sample route"
      }

  })
  ```

  </br>

- **Setting Up**

---

## Setup

- Install and setup [`Nodejs`](https://nodejs.org/en/)
- Install and setup [`Mongodb`](https://www.mongodb.com/)
- Fork and Clone the repository

```sh
https://github.com/reapedjuggler/ShopifyBackendTask
```

- Move into the project folder

```sh
cd server
```

- Install necessary node-modules

```sh
npm i
```

- Setup `.env` file

- Start the server

```sh
npm start server.js
````

The output should be

```sh
DB connected
Server started on Port 8000
```
