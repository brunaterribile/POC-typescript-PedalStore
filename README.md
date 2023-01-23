# POC-typescript

## PedalStore é uma aplicação que permite o registro de vendas de pedais de efeito para guitarra. Contempla três entidades relacionadas: pedals, stock e sales.

__________________________________________________________

POST:  /pedals - registra um novo pedal
- Body: { "model": "Morning Glory V4", "brand": "JHS Pedals", "value": 200, "quantity": 15 }

GET:  /pedals - lista todos os pedais

GET:  /pedals/id - busca por um pedal pelo seu id

__________________________________________________________

POST:  /sales/id - registra uma nova venda do pedal selecionado
- Body: { "customer": "João Camargo"}

GET:  /sales - lista todas as vendas realizadas

DELETE:  /sales - cancela a venda selecionada
- Headers: {"customer": Bruna Silva,
         "date": 2023-01-23}

GET:  /sales/ranking - lista os pedais mais vendidos

________________________________________________________

### Conceitos aprendidos:

1. Tipos primitivos e inferência de tipos
2. Operador Union (|)
3. Protocols e alias (as)
4. Validação com Joi
5. Generics
6. Utility types (omit e partial) 