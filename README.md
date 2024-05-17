# My Pass Database
Projeto com finalidade de armazenar senhas em um banco de dados de chave-valor local, de forma criptografada,
acessível através de uma CLI.

## Forma de uso
A CLI deve ser executada com o comando ```pass-storage```,
pode receber os comandos ```set``` ou ```get```
e deve receber no mínimo 1 parâmetro e no máximo 2, no caso do ```set```.
Os parâmetros são (1) a chave para acesso do recurso e (2) o valor a ser armazenado.

## Exemplos
Uso: ```$ pass-storage <comando> <chave> <valor>```

Este comando deve armazenar a senha para o valor 'gmail'.
```$ pass-storage set <gmail> <senha>```

Este comando deve retornar a senha armazenada para o valor 'gmail'.
```$ pass-storage get <gmail>```