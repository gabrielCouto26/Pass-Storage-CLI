from ports.database import Database


class PassDatabase:
    def __init__(self, adapter: Database) -> None:
        self.adapter = adapter

    def read(self, key: str) -> str:
        assert self.adapter, 'Adaptador não fornecido.'
        content = self.adapter.read()

        if not content:
            return

        return content[key]

    def save(self, key: str, value: str) -> None:
        assert self.adapter, 'Adaptador não fornecido.'
        content = self.adapter.read()
        content[key] = value

        self.adapter.save(content)
