- **Title:**
  Open-KYC provides a solution for redudant kyc requests, all you need to do is sign-up once on the platform and get verified by any one of the Banks and
  then save yourself from filling those troublesome forms again, simply apply for KYC with click of a button.Open-Kyc is an Open-Source decentralized application running on r3Corda and a Nodejs server in the Back-end and Reactjs in the front-end, It can be easily integrated with your kyc portals too.

</br>

- **Pre-Requisites**

---

`Node.js`
`Express.js`
`MongoDb`
`JavaScript`

</br>

- **Implemenation of the REST API**

---

`/products`

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
https://github.com/reapedjuggler/AmexHack
```

- Move into the project folder

```sh
cd server
```

- Install necessary node-modules

````
npm i

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
