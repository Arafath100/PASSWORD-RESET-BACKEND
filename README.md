# PASSWORD-RESET-FLOW

This is a password reset flow backend built with Node.js, Express, and MongoDB. It provides functionalities for user authentication, password reset, and token verification via email.

## Features

- **User Signup:** Allows users to register by providing email, password, username, and mobile number.
- **User Login:** Authenticates users based on email and password, generating a JWT token for authorization.
- **Forgot Password:** Enables users to request a password reset via email, sending a unique reset link.
- **Token Verification:** Validates the reset token sent to the user's email for password reset.
- **Reset Password:** Allows users to set a new password using a valid reset token.

## Technologies Used

- Node.js
- Express.js
- Body-Parser
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt (for password hashing)
- Nodemailer (for sending emails)
- Crytpo (for Cryptographic functions)
- Url (for URL parsing and formatting).

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables:
   - `MONGO_URL`: MongoDB connection URL
   - `SECRET_KEY`: Secret key for JWT signing
   - `EMAIL`: Email address for sending password reset emails
   - `PASS`: Password for the email address used
4. Run the application using `npm start`.

## Usage

1. Register a new user using `/signup` endpoint.
2. Login with registered credentials using `/login` endpoint.
3. Forgot password: Use `/forgot-password` endpoint to request a password reset link.
4. Verify token: Access `/verify-token/:token` endpoint to validate the reset token.
5. Reset password: Use `/reset-password` endpoint with a valid token to set a new password.

## Project Structure

- `Controllers`: Contains logic for handling routes.
- `Middleware`: Holds middleware functions like token verification.
- `Models`: Defines MongoDB schemas.
- `Routes`: Specifies API routes.
- `Server.js`: Entry point.

## Contributors

- [Ajil Arafath H](https://github.com/Arafath100)

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

Mention any libraries, tutorials, or resources you used and want to credit.

