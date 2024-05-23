import os
import sys
from adapters.local_file_io import LocalFileIO
from adapters.terminal_io import TerminalIO
from adapters.docker_io import DockerIO
from adapters.rsa_keys import RSAKeys
from domain.pass_database import PassDatabase
from domain.pass_io import PassIO
from domain.pass_repository import PassRepository
from domain.encrypter import Encrypter


def main():
    # TODO: tratativa de erros
    # TODO: logs

    shell = os.getenv('SHELL')
    if not shell:
        shell = sys.argv[1]

    if shell == 'terminal':
        io_adapter = TerminalIO()
    elif shell == 'docker':
        io_adapter = DockerIO()
    else:
        raise ValueError('Variável SHELL inválida ou não fornecida')

    file_storage = LocalFileIO()
    rsa_storage = RSAKeys()

    encrypter = Encrypter(rsa_storage)
    encrypter.inject_keys()

    io = PassIO(io_adapter)
    database = PassDatabase(file_storage)
    repo = PassRepository(database, encrypter)

    cmd, key, value = io.input()
    result = repo.execute(cmd, key, value)
    io.output(result)


if __name__ == '__main__':
    main()
