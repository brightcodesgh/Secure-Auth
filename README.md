Stack: Node.js, Express, React (Vite), JWT, HTTP-only Cookies, Bcrypt, Crypto, MongoDB

Key Features & Implementation Details:
Backend (Node.js + Express):

Password hashing using bcrypt to securely store user credentials.

JWT-based authentication for secure stateless login sessions.

HTTP-only cookies to store access and refresh tokens, reducing XSS attack risk.

Refresh token mechanism for seamless token renewal and long-lived sessions.

Used crypto for secure token generation and sensitive data handling

Middleware to protect private routes and verify tokens.


Frontend (React + Vite):

Modern SPA built with Vite for lightning-fast development and builds.

Integrated protected routes using React Router and authentication guards.

Secure login flow with token management via HTTP-only cookies (no token exposure in JS).

Clean UI for registration, login

Security Highlights:

CSRF-protected requests through cookie design and backend validation.

Prevented duplicate account creation with checks based on email.

Used environment variables and .env configuration for secret management.

