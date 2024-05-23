import rsa
import base64
from ports.rsa_keys import RSAKeys


class Encrypter:
    def __init__(self, adapter: RSAKeys) -> None:
        self.adapter = adapter
        self.public_key = None
        self.private_key = None

    def inject_keys(self):
        public_key, private_key = self.adapter.read()
        if public_key and private_key:
            self.public_key = rsa.PublicKey.load_pkcs1(public_key)
            self.private_key = rsa.PrivateKey.load_pkcs1(private_key)

    def create_keys(self) -> None:
        public_key, private_key = rsa.newkeys(512)
        self.adapter.save(
            public_key.save_pkcs1('PEM'),
            private_key.save_pkcs1('PEM'))

    def encrypt(self, value: str):
        encrypted = rsa.encrypt(value.encode(), self.public_key)
        return base64.b64encode(encrypted).decode()

    def decrypt(self, value: str):
        decoded = base64.b64decode(value.encode())
        return rsa.decrypt(decoded, self.private_key).decode()
