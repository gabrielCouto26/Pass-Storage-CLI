export interface FilePort {
  readData(): FileData;
  writeData(data: FileData): void;
}

export interface FileData {
  [key: string]: string;
}
