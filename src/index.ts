import { Command } from "commander";
import FileAdapter from "./adapters/file.js";
import Service from "./domain/service.js";

const program = new Command();
const fileAdapter = new FileAdapter("./storage.json");
const service = new Service(fileAdapter);

program
  .name("Pass Encryption")
  .version("1.0.0")
  .description("Simple CLI for encrypted passwords backup");

program
  .command("get")
  .description("Get password from a given key")
  .argument("<key>", "key to search")
  .option("-s, --show", "show password")
  .action(async (key, options) => {
    await service.get(key, options.show);
  });

program
  .command("set")
  .description("Set password to a given key")
  .argument("<key>", "key for storage")
  .argument("<password>", "password for encryption")
  .action((key, pass, options) => {
    service.set(key, pass);
  });

program.parse();
