# 24001160-synrgy7-nfrhndn-bcr-ch7

## Installation

Clone the repository

```bash
git clone https://github.com/novendyfarhanudin/24001160-synrgy7-nfrhndn-bcr-ch7.git
```

Fill up the correct value of your PostgreSQL connection and cloudinary secret key!

Install dependencies

```bash
npm install
```

Migrations

```bash
npm run migrate:latest
```

Seed

```bash
npm run seed:run cars
```

Run

```bash
npm run dev
```

## Username and Password Account

### Superadmin

    email: superadmin@mail.com
    password : superadmin1234

### Admin

    email: admin@mail.com
    password : admin1234

### User

    email: user@mail.com
    password : user1234

## API Endpoint

### API `GET`

- Get All Data

  - Request : `GET /cars`
  - CURL

    - Request

      ```bash
      curl --location 'localhost:3000/cars'
      ```

- Get Data by ID

  - Request : `GET /cars/:id`
  - CURL

    - Request

      ```bash
      curl --location 'localhost:3000/cars/1'
      ```

### API `POST`

- Create Data

  - Request : `/create`
  - CURL

    - Request\
      Note : Don't forget to change the `image path` according to the image in your `local path`

      ```bash
      curl --location 'localhost:3000/cars/create' \
      --form 'name="Porsche Carrera 911 Red 1975"' \
      --form 'price="7000000"' \
      --form 'category="small"' \
      --form 'image=@"/path/to/file"' \
      --form 'start_date="2024/06/08"' \
      --form 'end_date="2024/06/08"' \
      --form 'availability="true"'
      ```

### API `PUT`

- Update Data

  - Request : `PUT /cars/:id`
  - CURL

    - Request\
      Note : Don't forget to change the `image path` according to the image in your `local path`

      ```bash
      curl --location --request PUT 'localhost:3000/cars/3' \
      --form 'name="BMW i5"' \
      --form 'price="6000000"' \
      --form 'category="small"' \
      --form 'image=@"/path/to/file"' \
      --form 'start_date="2024/05/11"' \
      --form 'end_date="2024/05/11"' \
      --form 'availability="false"'
      ```

### API `DELETE`

- Delete Data

  - Request : `DELETE /cars/:id`
  - CURL

    - Request

      ```bash
      curl --location --request DELETE 'localhost:3000/cars/2'
      ```

## ERD (Entity Relationship Diagram)

![Image](https://res.cloudinary.com/dnw1qkqei/image/upload/v1717932887/Challenge_6_Binar_Car_Rental_iwwrhx.png)
