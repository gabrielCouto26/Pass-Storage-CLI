from ports.io import IO


class PassIO:
    def __init__(self, adapter: IO) -> None:
        self.adapter = adapter

    def input(self) -> str:
        assert self.adapter, 'Adaptador não fornecido.'
        return self.adapter.input()

    def output(self, result: str) -> str:
        assert self.adapter, 'Adaptador não fornecido.'
        self.adapter.output(result)
