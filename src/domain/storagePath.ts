import path from "path";
import fs from "fs";
import os from "os";

const BASE_DIR_NAME = ".pass-encrypted";
const FILE_NAME = "storage.json";

export default class StoragePath {
  private static readonly BASE_DIR = path.join(os.homedir(), BASE_DIR_NAME);
  public static readonly FILE_PATH = path.join(StoragePath.BASE_DIR, FILE_NAME);

  public static ensureDirectoryExists(): void {
    if (!fs.existsSync(StoragePath.BASE_DIR)) {
      fs.mkdirSync(StoragePath.BASE_DIR, { recursive: true });
    }

    if (!fs.existsSync(StoragePath.FILE_PATH)) {
      fs.writeFileSync(StoragePath.FILE_PATH, JSON.stringify({}), "utf-8");
    }
  }
}
