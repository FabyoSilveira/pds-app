# TP de PDS 2023/1

## Sistema 💻

Iremos criar um sistema para avaliação de professores e aulas no DCC, cujo objetivo é ajudar os alunos do DCC a escolherem optativas a cursar. A ideia seria a existência de duas funcionalidades principais:

- uma em que o usuário possa escolher uma disciplina que já cursou (especialmente optativas), avaliar o grau de dificuldade da matéria, quão trabalhosa ela é, apontar com qual professor teve a disciplina, dar uma nota para a didática dele e confirmar;
- outra que mostraria um compilado com as médias das notas inseridas por todas as avaliações.

## Integrantes 👧🏻

- Ailton Vinaud Junior (Backend)
- Ana Flavia de Matos Souza (Frontend)
- Fabyo Silveira Amorim (Frontend)
- Taís Christofani (Backend)

## Tecnologias ⚒️

- Backend: .NET Core.
- Docker
- AWS (EC2)
- Banco de dados: SQL Server.
- Frontend: Next.js.

## BackLog do produto

### 1 - Criar conta para Login

Eu como usuário gostaria de realizar login no sistema para proteger meu perfil de ser editado e conseguir consultar e editar minhas avaliações

### 2 - Criar perfil de usuário

Eu como usuário gostaria de criar um perfil para que as pessoas possam saber minhas características e me conhecerem melhor como estudante.

### 3 - Avaliar uma disciplina cursada

Como usuário eu quero avaliar as disciplinas e professores das matérias que já cursei para que eu possa divulgar para outros estudantes como foi minha experiência.

### 4 - Editar uma avaliação realizada

Eu, como usuário, gostaria de poder alterar uma avaliação realizada anteriormente, caso tenha preenchido algum campo errado ou mudado de opinião.

### 5 - Visualizar avaliação geral dos professores

Eu como usuário gostaria de visualizar as notas dos professores avaliados

### 6 - Visualizar avaliação geral das disciplinas

Eu como usuário gostaria de visualizar as disciplinas avaliadas e suas notas médias

### 7 - Visualizar as avaliações individuais dos professores

Eu como usuário gostaria de selecionar uma avaliação de um professor e visualizar detalhes de cada avaliação feita, incluindo dados do avaliador

### 8 - Visualizar as avaliações individuais das disciplinas

Eu como usuário gostaria de selecionar uma disciplina e visualizar detalhes de cada avaliação feita, incluindo dados do avaliador

### 9 - Ordenar avaliações pela média de algum ou mais critérios

Como usuário, eu gostaria de poder ordenar as avaliações em tela de forma a atender alguma porcentagem de algum critério de avaliação (por exemplo, média da dificuldade da matéria)

### 10 - Filtrar avaliações pela média de algum ou mais critérios

Como usuário, gostaria de poder visualizar apenas as disciplinas que cobram ou não presença

### 11 - Visualizar o perfil dos avaliadores das avaliações

Como usuário, gostaria de poder ver o perfil de quem realizou determinada avaliação, para ver se possuímos coisas em comum ou divergentes que indicam se minha experiência com a disciplina será como a do colega.

### 12 - Dar like ou dislike no comentário de alguma avaliação específica

Como usuário, gostaria de poder mostrar que concordo ou discordo dos comentários deixados pelos donos de cada avaliação, na seção que terá para dar sua opinião de forma aberta.

## BackLog da Sprint 2:

### 1 - Criar cadastro de usuário

Eu como usuário gostaria de me cadastrar no sistema

#### - Tarefas e responsáveis

- Criação de ambiente EC2 AWS [Ailton]
- Criação de Projeto Base C# .Net utilizando arquitetura em camadas [Ailton]
- Criação de PipeLine automatizada para publicação na AWS [Ailton]
- Criação de banco de dados RDS na AWS [Ailton]
- Criação dos componentes da interface de cadastro.[Fabyo] (Done)
- Criação da tela de cadastro.[Fabyo] (Done)
- Integração do front com o serviço de cadastro. [Fabyo] (Done)

- Criação das tabelas de usuário [Tais]
- Criação da rota de insert para cadastro de usuário. [Tais]
- Criação da tela de cadastro.[Tais]

### 2 - Criar conta para Login

Eu como usuário gostaria de realizar login no sistema para proteger meu perfil de ser editado e conseguir consultar e editar minhas avaliações

#### - Tarefas e responsáveis

- Criação de rota para autenticação [Ailton]

- Criação dos componentes da interface de login. [Fabyo](Done)
- Criação da tela de login.[Fabyo] (Done)
- Refatoração da tela de login da interface [Fabyo](Done)
- Integração do front com serviço de login [Fabyo]
- Criar lógica de permissão de acessibilidade das rotas (usuário logado) [Fabyo] (Done)

### 3 - Avaliar uma disciplina cursada

Como usuário eu quero avaliar as disciplinas e professores das matérias que já cursei para que eu possa divulgar para outros estudantes como foi minha experiência.

#### - Tarefas e responsáveis

-- Banco:

- Criar tabela de disciplinas [Tais]
- Criar tabela de professores [Tais]
- Criar tabela com perguntas [Ailton]
- Criar tabela de avaliação [Ailton]
  (id_avaliação id_disciplina id_professor id_questionario id_usuario resposta dataAvaliação)

  --API:

- Criar controller de disciplinas [Tais]
- Criar controller de professores [Tais]
- Criar controller para get de perguntas [Ailton]

--Front:

- Criar componente de select disciplinas e professores [Ana]
- Criar tela de nova avaliação [Ana]

--API:

- Criar controler de Insert avaliação [Ailton]
- Criar controller de Update avaliação [Tais]

--Front:

- Criar tela de avaliação [Ana]
- criar componente radio

### 4 - Excluir uma avaliação realizada

Eu, como usuário, gostaria de poder alterar uma avaliação realizada anteriormente, caso tenha preenchido algum campo errado ou mudado de opinião.

#### - Tarefas e responsáveis

- Criar rota de delete avaliação [Ailton]
- Inserir componente de exclusão de lista.

### 5 - Visualizar avaliação geral dos professores

Eu como usuário gostaria de visualizar as notas dos professores avaliados

#### - Tarefas e responsáveis

- Criar rota que gere a média das avaliações dos professores [Tais]
- Criar tela de visualização de avaliação de professores [Fabyo]

### 6 - Visualizar avaliação geral das disciplinas

Eu como usuário gostaria de visualizar as disciplinas avaliadas e suas notas médias

#### - Tarefas e responsáveis

- Criar rota que gere a média das avaliações das disciplinas [Tais]
- Criar tela de visualização de avaliação das disciplinas:
  Criar componente de professores relacionados [Ana]
  Criar componente de avaliação (barra crescente com percentual avaliativo para cada pergunta) [Fabyo]

## Instruções para rodar 🖱️

- É necessário ter Node.js >= 14.6.0 instalado na máquina
- Instale as dependências com o comando `npm install`
- Inicialize o projeto com o comando `npm run dev`
