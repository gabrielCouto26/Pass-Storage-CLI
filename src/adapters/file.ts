import { readFileSync, writeFileSync } from "fs";
import { FilePort, FileData } from "../ports/file";

export default class FileAdapter implements FilePort {
  storagePath: string;

  constructor(storagePath: string) {
    this.storagePath = storagePath;
  }

  readData(): FileData {
    try {
      return JSON.parse(readFileSync(this.storagePath, "utf8"));
    } catch (error) {
      throw new Error(`Error on reading file. Original error: ${error}.`);
    }
  }

  writeData(data: FileData): void {
    try {
      writeFileSync(this.storagePath, JSON.stringify(data, null, 2));
    } catch (error) {
      throw new Error(`Error on writing file. Original error: ${error}.`);
    }
  }
}
