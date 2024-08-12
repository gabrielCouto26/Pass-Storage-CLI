import { readFileSync, writeFileSync } from "fs";
import { IFile, IFileData } from "../ports/file.interface.js";

export default class FileAdapter implements IFile {
  storagePath: string;

  constructor(storagePath: string) {
    this.storagePath = storagePath;
  }

  readData(): IFileData {
    try {
      return JSON.parse(readFileSync(this.storagePath, "utf8"));
    } catch (error) {
      throw new Error(`Error on reading file. Original error: ${error}.`);
    }
  }

  writeData(data: IFileData): void {
    try {
      writeFileSync(this.storagePath, JSON.stringify(data, null, 2));
    } catch (error) {
      throw new Error(`Error on writing file. Original error: ${error}.`);
    }
  }
}
