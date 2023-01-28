## JWT Project
This is an Express.js backend API that was built to familiarize oneself with how JSON Web Tokens (JWT) work and how authentication works in Express.js.

## Endpoints

#### POST /api/auth/login 
with a request body of {email, password} to login and receive an access token that is valid for 1 minute.
#### POST /api/auth/signup 
with a request body of {name, email, password} to sign up for an account.
#### GET /resources 
with a Bearer token in the headers to receive your resources.
