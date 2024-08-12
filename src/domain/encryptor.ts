import crypto from "crypto";
import { IEncryptor } from "./interfaces/encryptor.interface";

export default class Encryptor implements IEncryptor {
  private algorithm: string;
  private key: Buffer;
  private iv: Buffer;

  constructor(secretKey: string) {
    this.algorithm = "aes-256-cbc";
    this.key = crypto.createHash("sha256").update(secretKey).digest();
    this.iv = crypto.randomBytes(16);
  }

  encrypt(value: string): string {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let encrypted = cipher.update(value, "utf-8", "hex");
    encrypted += cipher.final("hex");

    return `${this.iv.toString("hex")}:${encrypted}`;
  }

  decrypt(value: string): string {
    const [ivHex, encryptedValue] = value.split(":");
    const iv = Buffer.from(ivHex, "hex");
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
    let decrypted = decipher.update(encryptedValue, "hex", "utf-8");
    decrypted += decipher.final("utf-8");

    return decrypted;
  }
}
