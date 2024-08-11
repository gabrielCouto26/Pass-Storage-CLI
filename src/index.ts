import { Command } from "commander";
import FileAdapter from "./adapters/file";
import Storage from "./domain/storage";

const program = new Command();
const fileAdapter = new FileAdapter("./storage.json");
const storage = new Storage(fileAdapter);

program
  .name("Pass Encryption")
  .version("1.0.0")
  .description("Simple CLI for encrypted passwords backup");

program
  .command("get")
  .description("Get password from a given key")
  .argument("<key>", "key to search")
  .option("-s, --show <password>", "show password")
  .action((key, options) => {
    storage.get(key);
  });

program
  .command("set")
  .description("Set password to a given key")
  .argument("<key>", "key for storage")
  .argument("<password>", "password for encryption")
  .action((key, pass, options) => {
    storage.set(key, pass);
  });

program.parse();
