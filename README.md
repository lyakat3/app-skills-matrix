# app-skills-matrix

This application is meant to be an automated approach to the skills matrix system that we use here at TES. See the existing template [here](https://docs.google.com/spreadsheets/d/1OUO5s45mD-ReRPtJp2V65mclMHpUb7iMIuF6tA9f1xI/edit).  An application will allow for better scaling and flexibility across the team as it grows.  Ideally this system will be open-source and be accompanied with some blog posts/documentation to explain how it works.  To this end we should try to avoid any internal closed source technologies.  The data here is confidential for each user so some thought has to be put into how to store things in mongo without allowing the curious to check out another users' skills matrix.

See [REQUIREMENTS.md](https://github.com/tes/app-skills-matrix/blob/master/REQUIREMENTS.md) for the original requirements.

# How to run the app
```
λ yarn
λ cat .env
MONGO_URL=mongodb://localhost:27017/skillz
GITHUB_ID=MyGithubAppId
GITHUB_SECRET=MySecret
JWT_SECRET=MyJWTSecret
DEBUG=skillz:http                               # Add logs for all request
λ eval $(cat .env) yarn start
```
All configuration is handled via environment variables (12 factor style), which means deployment on heroku or dokku is easy-peasy.

The default `start` command will start a self reloading nodemon instance. 
 
# How to run tests
```
λ yarn
λ cat .env.test
MONGO_URL=mongodb://localhost:27017/skillz-test
GITHUB_ID=MyGithubAppId
GITHUB_SECRET=MySecret
JWT_SECRET=MyJWTSecret
λ eval $(cat .env.test) node test/auth.js       #To run a single test with TAP output
λ eval $(cat .env.test) yarn test               #To run all the test with fancy coloured output
```
Make sure to use a different database for testing, as tests will clean the database.

# Backend

POST /users
```json
{ // Input
  "action": "create",
  "body": 
  {
    "email": "...",
    "firstname": "...",
    "lastname": "..."
  }
}
```

```json
{ // Output
  "id": 123,
  "email": "...",
  "firstname": "...",
  "lastname": "..."
}
```

# Frontend
Still WIP

# Security considerations
 - A private/public key is going to be generated on the frontend for each new user and stored on the server
 - A secret is going to be generated on the frontend for each new user and encrypted with the user public key and all the admins' public keys
 - Each user will have his own password which will never be sent to the server (used to decrypt the private key)
 - The user/admin will retrieve an encrypted skill matrix and will provide his password (frontend only) to decrypt his private key. The private key is going to be used to decrypt the secret
 - The skills matrix is going to be encrypted/decrypted with the secret

Here a basic [implementation](https://github.com/tes/app-skills-matrix/blob/master/frontend/dist/openpgp.html)
