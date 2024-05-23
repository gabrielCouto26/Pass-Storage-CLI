import os
from domain.constants import PRIV_KEY_PATH, PUB_KEY_PATH


class RSAKeys:
    def __init__(self) -> None:
        pass

    def read(self) -> tuple[str]:
        public_key, private_key = None, None

        if os.path.isfile(PRIV_KEY_PATH):
            with open(PRIV_KEY_PATH, 'r') as f:
                private_key = f.read()

        if os.path.isfile(PUB_KEY_PATH):
            with open(PUB_KEY_PATH, 'r') as f:
                public_key = f.read()

        return public_key, private_key

    def save(self, public_key: bytes, private_key: bytes) -> None:
        with open(PRIV_KEY_PATH, 'wb') as f:
            f.write(private_key)

        with open(PUB_KEY_PATH, 'wb') as f:
            f.write(public_key)
