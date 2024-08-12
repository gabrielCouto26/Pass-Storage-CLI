import { Command } from "commander";
import FileAdapter from "./adapters/file.js";
import Service from "./domain/service.js";
import Encryptor from "./domain/encryptor.js";

const key = process.env.PASS_STORAGE_KEY || "";

const program = new Command();
const fileAdapter = new FileAdapter("./storage.json");
const encryptor = new Encryptor(key);
const service = new Service(fileAdapter, encryptor);

if (!key) throw new Error("Cannot find PASS_STORAGE_KEY environment variable.");

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
    service.get(key, options.show);
  });

program
  .command("set")
  .description("Set password to a given key")
  .argument("<key>", "key for storage")
  .argument("<password>", "password for encryption")
  .action((key, pass) => {
    service.set(key, pass);
  });

program
  .command("rm")
  .description("Remove password from a given key")
  .argument("<key>", "key to remove")
  .action((key) => {
    service.remove(key);
  });

program.parse();
