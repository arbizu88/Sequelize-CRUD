const { CRUD } = require("./helpers");
const db = require("./models");

const params = process.argv;

if (params.length <= 2) {
  process.exit(0);
}

const args = params.slice(2);

const command = args[0].split(":")[0].substring(2);
const entity = args[0].split(":")[1];

switch (command) {
  case CRUD.CREATE:
    console.log("Created!!");
    args(1).map(arg => {
      const tmp = arg.split("=");
      data[tmp[0].substring(2)] = tmp[1];
    });
    console.log(data);
    break;
  case CRUD.READ:
    console.log("Read!!");
  default:
    console.log("Operation not found");
}
// --create:Contact --firstname=Carlos
