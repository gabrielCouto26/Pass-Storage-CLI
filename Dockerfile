FROM python:3.12-slim
WORKDIR /usr/src/app
COPY ./src .
COPY ./storage.json ./storage.json
CMD ["python", "-u", "main.py"]