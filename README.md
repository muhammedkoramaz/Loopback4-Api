# Loopback-Api

This application has been developed using a [JSON Data](https://raw.githubusercontent.com/millbj92/US-Zip-Codes-JSON/master/USCities.json) with the zip codes of the cities. The API returns the city and state information when the zip code is request.
This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html).

## Endpoint

| Method | Endpoint               | Desc             |
| ------ | ---------------------- | ---------------- |
| GET    | /api/cities/{zip_code} | GET {city,state} |

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```
