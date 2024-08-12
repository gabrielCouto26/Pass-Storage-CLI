import { FilePort, FileData } from "../ports/file.js";
import chalk from "chalk";
import clipboardy from "clipboardy";
import { IEncryptor } from "./interfaces/encryptor.interface.js";

export default class Service {
  adapter: FilePort;
  encryptor: IEncryptor;
  log: Function;

  constructor(adapter: FilePort, encryptor: IEncryptor) {
    this.adapter = adapter;
    this.log = console.log;
    this.encryptor = encryptor;
  }

  get(label: string, show: boolean): void {
    try {
      const data: FileData = this.adapter.readData();
      const labelExists = data.hasOwnProperty(label);
      if (!labelExists) {
        this.log(chalk.yellow(`No password found for '${label}'.`));
        return;
      }
      const encPassword = data[label];
      const password = this.encryptor.decrypt(encPassword);
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
      const encPassword = this.encryptor.encrypt(password);
      const data: FileData = this.adapter.readData();
      data[label] = encPassword;
      this.adapter.writeData(data);
      this.log(chalk.green("Password stored!"));
    } catch (error) {
      throw new Error(
        `Error on saving new password for ${label}. Original error: ${error}`
      );
    }
  }
}
