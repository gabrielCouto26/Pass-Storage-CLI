import sys
from adapters.system_io import SystemIO


class TerminalIO(SystemIO):
    def __init__(self) -> None:
        pass

    def input(self) -> list[str]:
        try:
            self.COMMAND: str = sys.argv[2]
            self.KEY: str = sys.argv[3]
            self.VALUE: str = sys.argv[4] if len(sys.argv) == 5 else None
        except IndexError as e:
            print('Erro ao extrair parâmetros')
            raise e

        self.validate_input()

        return self.COMMAND, self.KEY, self.VALUE
