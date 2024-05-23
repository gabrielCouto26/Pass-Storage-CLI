import os
import sys
from adapters.system_io import SystemIO
from domain.constants import GET, SET


class TerminalIO(SystemIO):
    def __init__(self) -> None:
        pass

    def input(self) -> list[str]:
        try:
            self.COMMAND: str = sys.argv[2]
            self.KEY: str = sys.argv[3] if len(sys.argv) >= 4 else None
            self.VALUE: str = sys.argv[4] if len(sys.argv) == 5 else None
        except IndexError as e:
            print('Erro ao extrair parâmetros')
            raise e

        self.validate_input()

        return self.COMMAND, self.KEY, self.VALUE

    def output(self, result: str) -> None:
        if self.COMMAND == GET:
            os.system(f'echo {result} | xclip -selection clipboard')
            print(f"Valor de {self.KEY} copiado para área de transferẽncia!")
        elif self.COMMAND == SET:
            print(f"{self.KEY} salvo com sucesso!")
