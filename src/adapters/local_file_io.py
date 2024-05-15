import os
import json
from domain.constants import STORAGE_FILE


class LocalFileIO:
    def __init__(self) -> None:
        self.file_path = os.path.join(
            os.path.abspath('.'), STORAGE_FILE)

    def read(self) -> dict:
        content = None
        with open(self.file_path, 'r') as file:
            content = file.read()

        if not content:
            return {}

        return json.loads(content)

    def save(self, content: dict) -> None:
        json_content = json.dumps(content)

        with open(self.file_path, 'w') as file:
            file.write(json_content)
