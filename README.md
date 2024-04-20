# Mock Harbor API

This is a mock backend server built with Express.js to provide data related to countries, harbors, stuff, and tariff rates.

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

Clone the project

```bash
  git clone https://github.com/irfans18/mock-harbor-api.git
```

Go to the project directory

```bash
  cd mock-harbor-api
```

Install dependencies using `bun`

```bash
  bun install
```
Start the server

```bash
  npm run start
```

alternatively you can use `npm`

```bash
  npm install
```

Start the server

```bash
  npm run start
```



## Usage

- Run `npm start` or `bun server.ts` to start the server.
- Access the following endpoints to retrieve data:

### Countries Data

- **Endpoint:** `/negara`
- **Query Parameters:**
  - `ur_negara`: Filter countries by name (optional)
- **Example Request:** `GET /negara?ur_negara=Indonesia`
- **Example Response:**
  ```json
  [
      {
          "name": "Indonesia",
          "kd_negara": "ID"
      }
  ]
  ```

### Harbors Data

- **Endpoint:** `/pelabuhan`
- **Query Parameters:**
  - `kd_negara`: Filter harbors by country code (required)
  - `ur_pelabuhan`: Filter harbors by name (optional)
- **Example Request:** `GET /pelabuhan?kd_negara=ID&ur_pelabuhan=Jakarta`
- **Example Response:**
  ```json
  [
      {
          "ur_pelabuhan": "Jakarta Harbor",
          "kd_negara": "ID"
      }
  ]
  ```

### Stuff Data

- **Endpoint:** `/barang`
- **Query Parameters:**
  - `hs_code`: Search stuff by HS code (required)
- **Example Request:** `GET /barang?hs_code=12345678`
- **Example Response:**
  ```json
  [
      {
          "hs_code": "12345678",
          "details": [
              "detail 1",
              "detail 2",
              "detail 3"
          ]
      }
  ]
  ```

### Tariff Data

- **Endpoint:** `/tarif`
- **Query Parameters:**
  - `hs_code`: Filter tariff by HS code (optional)
- **Example Request:** `GET /tarif?hs_code=12345678`
- **Example Response:**
  ```json
  [
      {
          "hs_code": "12345678",
          "rate_bea_masuk": 10
      }
  ]
  ```

## Mock Data

- Countries Data
- Harbors Data
- Stuff Data
- Tariff Data

## Dependencies

- Express.js
- Cors

## License

This project is licensed under the MIT License.
```

This README includes both the endpoints with their query parameters, example requests, example responses, mock data, dependencies, and license information.