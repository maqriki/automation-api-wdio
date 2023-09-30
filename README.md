
# Automation test API

automation test API using WDIO

This is repository for automation API testing WDIO, using API from https://petstore.swagger.io/v2/
1. Add pet valid response
2. Add pet invalid response
2. Find pet
3. Update pet

**Notes:** The 'find pet' and 'update pet' endpoint can't use the ID from the 'add pet' response, so I have decided to use a static ID.



## Installation

Clone the project

```bash
  git clone https://github.com/maqriki/automation-api-wdio
```

Go to the project directory

```bash
  cd automation-api-wdio
```

Install dependencies

```bash
  npm install
```


## Running Tests

### To run tests

```bash
  npm run test:api
```

### To view report allure by pipeline, visit this url

https://maqriki.github.io/automation-api-wdio/