# My Pass Storage #
Projeto com finalidade de armazenar valores em um banco de dados de chave-valor local,
de forma criptografada, acessível através de uma CLI.

## Forma de uso ##
A CLI deve ser executada com o comando ```$ bash docker-run.sh```.

Recomendo criar um alias para esse comando, como ```passdb```.

A CLI pode receber os comandos ```set```, ```get``` ou ```new_keys```.

## Exemplos ##
```$ passdb <comando> <chave> <valor>```

- Este comando deve armazenar a senha para o valor "gmail": ```$ passdb set gmail <senha>```

- Este comando deve retornar a senha armazenada para o valor "gmail": ```$ passdb get gmail```

- Este comando deve gerar novas chaves de criptografia: ```$ passdb new_keys```

__ATENÇÃO__: Ao executar o comando ```new_keys```, você corre o risco de perder
os valores armazenados com criptografia anteriormente,
pois as novas chaves geradas irão substituir as antigas.

## Implementação ##
Esse projeto foi implementado em Python e Docker, principalmente.

Ainda assim, é possível rodar em container Docker ou localmente (```$ bash terminal-run.sh```),
porém o uso do container Docker é mais garantido.