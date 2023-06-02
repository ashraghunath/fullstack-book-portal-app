# fullstack-book-portal-app

A full-stack application built for renting books. 

## Technologies Used

- React (Frontend)
- Spring Boot (Backend)
- Okta for Authentication and Authorization via OpenID
- Stripe for Payment Integration
- HTTPS with a self-signed key for secure communication

## Setup

### Frontend Setup

- Generate a self-signed key and certificate for the frontend. Please refer to the [openssl-setup.md](https://github.com/darbyluv2code/fullstack-react-and-springboot/blob/main/bonus-content/openssl-setup.md#mac-or-linux)

### Backend Setup

- Generate a self-signed key and certificate for the backend. Please refer to the [keytool-steps.md](https://github.com/darbyluv2code/fullstack-react-and-springboot/blob/main/bonus-content/keytool-steps.md)

### Okta Configuration

1. Obtain the Okta Dev ID and Client ID from Okta dashboard.

2. In the React project, locate the `tsconfig.json` file and add the Okta Dev ID and Client ID.

3. In the Spring Boot project, locate the `application.properties` file and add the Okta Dev ID and Client ID.

### Stripe Integration

1. Obtain the Stripe public key.

2. In the React project, add the Stripe public key in the react app within index.tsx

3. In the Spring Boot project, add the Stripe secret key within application.properties

## Usage

1. Start MySQL server

2. Start spring boot app

3. Run front end with npm install and npm start


