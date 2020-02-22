# Sequelize-CRUD

Learning how to use Sequelize ORM with Nodejs. Own project with few examples.

## Generate Models

```nodejs
node_modules/.bin/sequelize model:generate --name {entity_name} --attributes {attr_name}:{type[string,number,etc..],...}
```

## Migrate Models

Running this will migrate your models to the db

```nodejs
node_modules/.bin/sequelize db:migrate
```

## Generate Seeds

Running this will generate your seeders

```nodejs
node_modules/.bin/sequelize seed:generate --name seed-{entity_name}
```

## Run your custom seeds

This command will execute the querys that are inside the seeders.

```nodejs
node_modules/.bin/sequelize db:seed:all
```

