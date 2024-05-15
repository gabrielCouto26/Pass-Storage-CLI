from typing import Protocol


class IO(Protocol):
    def input(self, cmd: str, key: str, value: str) -> list[str]:
        pass

    def output(self, result: str) -> None:
        pass
