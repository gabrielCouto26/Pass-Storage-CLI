from ports.database import Database
from domain.constants import GET, SET, CREATE_KEYS
from domain.encrypter import Encrypter


class PassRepository:
    def __init__(self, repo: Database, encrypter: Encrypter) -> None:
        self.repo = repo
        self.encrypter = encrypter

    def execute(self, cmd: str, key: str, value: str | None) -> str | None:
        assert self.repo, 'Repositório não fornecido.'
        result = None

        if cmd == GET:
            enc_result = self.repo.read(key)
            result = self.encrypter.decrypt(enc_result)
        elif cmd == SET:
            enc_value = self.encrypter.encrypt(value)
            result = self.repo.save(key, enc_value)
        elif cmd == CREATE_KEYS:
            result = self.encrypter.create_keys()

        return result
