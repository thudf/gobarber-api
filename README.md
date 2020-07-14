<div align="center">
  <img alt="gobarber" src="./assets/logo.png" width="auto" heigth="auto"/>
</div>

</br>

<div align="center">


  <p align="center" >
    <a href="#-sobre"> Sobre </a> |
    <a href="#-tecnologias"> Tecnologias </a> |
    <a href="#-iniciar"> Iniciar </a> |
    <a href="#-licença"> Licença </a>
  </p>

</div>

## 📚 Sobre

Projeto desenvolvido durante o bootcamp GoStack 11 da [Rocketseat](https://github.com/Rocketseat).

O projeto tem por objetivo criar uma aplicação que facilite o gerenciamento de agenda de barbeiros e o acesso aos agendamentos para os clientes e para isso foram desenvolvidos a API, a aplicação Web  e um aplicativo.

Para acessar a aplicação web, [clique aqui](https://github.com/thudf/gobarber-web). </br>

Para acessar o aplicativo, [clique aqui](https://github.com/thudf/gobarber-app).

## 🚀 Tecnologias

As princiais tecnologias utilizadas na construção da API:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [MondoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Husky](https://github.com/typicode/husky)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Iniciar

Para importar a documentação das rotas no Insomnia, clique no botão abaixo:

<a href="https://insomnia.rest/run/?label=GoBarber-API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fthudf%2Fgobarber-api%2Fmaster%2Fassets%2Finsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- Instância do [PostgreSQL](https://www.postgresql.org/)
- Instância do [MondoDB](https://www.mongodb.com/)
- Instância do [Redis](https://redis.io/)

> Obs.: Recomendável o uso do Docker

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/thudf/gobarber-api.git && cd gobarber-api
```

**Siga os passos abaixo**

```bash
# Instale as dependências
$ yarn

# Faça uma cópia de '.env.example' para '.env'
# e configure com as suas variáveis ambientes.
# As variáveis aws não precisam ser preenchidas para ambiente dev
$ cp .env.example .env

# Crie uma insância do postgreSQL usando docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Crie uma insância do moongoDB usando docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Crie uma insância do redis usando docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Verifique se as variáveis do arquivo 'ormconfig.json' estão conforme definidas no passo anterior

# Após os serviços estarem rodando, rode as migrations
$ yarn typeorm migration:run

# inicie a api
$ yarn dev:server
```

## 🖊 Licença

Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para saber mais detalhes.

---

<div align="center">
  <img src="https://media.giphy.com/media/26n7b7PjSOZJwVCmY/giphy.gif" width="40px">
  <p>por <strong> Arthur D'Afonseca e Silva</strong> </p>
</div>
