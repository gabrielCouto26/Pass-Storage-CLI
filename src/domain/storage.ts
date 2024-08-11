import { FilePort, FileData } from "../ports/file";

export default class Storage {
  adapter: FilePort;

  constructor(adapter: FilePort) {
    this.adapter = adapter;
  }

  get(label: string): void {
    try {
      const data: FileData = this.adapter.readData();
      if (!data.hasOwnProperty("a"))
        console.warn(`No password found for ${label}.`);

      const password = data[label];
      console.log(password);
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
