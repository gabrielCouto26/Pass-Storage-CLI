import { FilePort, FileData } from "../ports/file.js";
import chalk from "chalk";
import clipboardy from "clipboardy";

export default class Storage {
  adapter: FilePort;
  log: Function;

  constructor(adapter: FilePort) {
    this.adapter = adapter;
    this.log = console.log;
  }

  get(label: string, show: boolean): void {
    try {
      const data: FileData = this.adapter.readData();
      const labelExists = data.hasOwnProperty(label);
      if (!labelExists) {
        this.log(chalk.yellow(`No password found for '${label}'.`));
        return;
      }
      const password = data[label];
      if (show) this.log(chalk.blue(password));
      clipboardy.writeSync(password);
      this.log(chalk.green("Password copied to clipboard!"));
    } catch (error) {
      throw new Error(
        `Error on getting password '${label}'. Original error: ${error}`
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
