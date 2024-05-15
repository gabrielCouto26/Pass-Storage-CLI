from typing import Protocol


class Database(Protocol):
    def read(self) -> dict:
        pass

    def save(self, value: dict) -> None:
        pass
