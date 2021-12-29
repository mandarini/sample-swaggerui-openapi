# Sample OpenApi + Swagger UI Project

Used `webpack-getting-started` sample from the [swagger-ui](https://github.com/swagger-api/swagger-ui) repo as a starting point.

It includes CSS and OAuth configuration.

## General usage

```
    npm install
    npm start
    npm build
```

## General how-to for development

At the moment, Swagger UI does not support `ref$` to other files. For that reason, before we serve/build, we combine the files using the [`openapi-combine`](https://www.npmjs.com/package/openapi-combine) package (not 100% sure how safe it is but _shrug_).

So, the file `swagger-config.yaml` is used as the main entry point, where we reference all the other files that we are using.

The other files/specs are placed inside the `files` folder.

Once we run `npm run combine` to combine all the files into a single one, that single file will be placed inside the `output` directory, as `output/swagger-config-merged.yaml`. Do not edit that file.

## Separate tasks

### Start the local server

```
npm start
```

and go to [localhost:8080](http://localhost:8080).

Before this runs, it will combine the files.

### Build

```
npm run build
```
Before the build runs, it will combine the files.

### Combine

```
npm run combine
```

It will combine the files into one.

### Exprot

```
npm run export
```

It will export the files to TypeScript. Needs more configuration for better results.




