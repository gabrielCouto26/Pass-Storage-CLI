import sys
from adapters.local_file_io import LocalFileIO
from adapters.terminal_io import TerminalIO
from adapters.docker_io import DockerIO
from domain.pass_database import PassDatabase
from domain.pass_io import PassIO
from domain.pass_repository import PassRepository


def main():
    # TODO: CRUD
    # TODO: logs
    # TODO: criptografia

    shell = sys.argv[1]

    if shell == 'terminal':
        io_adapter = TerminalIO()
    elif shell == 'docker':
        io_adapter = DockerIO()

    storage_adapter = LocalFileIO()

    io = PassIO(io_adapter)
    database = PassDatabase(storage_adapter)
    repo = PassRepository(database)

    cmd, key, value = io.input()
    result = repo.execute(cmd, key, value)
    io.output(result)


if __name__ == '__main__':
    main()
