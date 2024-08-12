export interface IFile {
  readData(): IFileData;
  writeData(data: IFileData): void;
}

export interface IFileData {
  [key: string]: string;
}
