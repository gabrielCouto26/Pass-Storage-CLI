export interface IEncryptor {
  encrypt(value: string): string;
  decrypt(value: string): string;
}
