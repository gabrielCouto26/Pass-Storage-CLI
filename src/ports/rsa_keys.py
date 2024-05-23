from typing import Protocol


class RSAKeys(Protocol):
    def read(self) -> tuple[str]:
        pass

    def save(self, public_key: bytes, private_key: bytes) -> None:
        pass
