# TMSandbox

Test automation in JavaScript using Jest and Supertest.

Tests are in `./server.test.js` and written using async/await syntax.

## Setup

```shell
git clone https://github.com/brendan-jarvis/TMSandbox.git # clone this repo
cd TMSandbox/ # change to the new directory
npm i           # install dependencies
npm run test    # run tests in Jest
```

## Test criteria

Response body from API (https://api.tmsandbox.co.nz/v1/Categories/6328/Details.json?catalogue=false) passes the following:

1. Name = "Badges"
2. CanRelist = true
3. The Promotions element with Name = "Feature" has a Description that contains the text "Better position in category"
