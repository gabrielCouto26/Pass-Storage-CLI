import os
from adapters.system_io import SystemIO


class DockerIO(SystemIO):
    def __init__(self) -> None:
        pass

    def input(self) -> list[str]:
        self.COMMAND: str = os.getenv('COMMAND', None)
        self.KEY: str = os.getenv('KEY', None)
        self.VALUE: str = os.getenv('VALUE', None)

        self.validate_input()

        return self.COMMAND, self.KEY, self.VALUE
