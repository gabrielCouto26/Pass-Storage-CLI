from ports.database import Database
from domain.constants import GET, SET


class PassRepository:
    def __init__(self, repo: Database) -> None:
        self.repo = repo

    def execute(self, cmd: str, key: str, value: str | None) -> str | None:
        assert self.repo, 'Repositório não fornecido.'
        result = None

        if cmd == GET:
            result = self.repo.read(key)
        elif cmd == SET:
            result = self.repo.save(key, value)

        return result
