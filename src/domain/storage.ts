import { FilePort, FileData } from "../ports/file.js";
import chalk from "chalk";

export default class Storage {
  adapter: FilePort;
  log: Function;

  constructor(adapter: FilePort) {
    this.adapter = adapter;
    this.log = console.log;
  }

  get(label: string): void {
    try {
      const data: FileData = this.adapter.readData();
      if (!data.hasOwnProperty("a"))
        this.log(chalk.yellow(`No password found for ${label}.`));

      const password = data[label];
      this.log(chalk.green(password));
    } catch (error) {
      throw new Error(
        `Error on getting password ${label}. Original error: ${error}`
      );
    }
  }

  set(label: string, password: string): void {
    try {
      const data: FileData = this.adapter.readData();
      data[label] = password;
      this.adapter.writeData(data);
    } catch (error) {
      throw new Error(
        `Error on saving new password for ${label}. Original error: ${error}`
      );
    }
  }
}
