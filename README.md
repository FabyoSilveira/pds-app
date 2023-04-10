# TP de PDS 2023/1

## Sistema 💻
Iremos criar um sistema para avaliação de professores e aulas no DCC, cujo objetivo é ajudar os alunos do DCC a escolherem optativas a cursar. A ideia seria a existência de duas funcionalidades principais:
- uma em que o usuário possa escolher uma disciplina que já cursou (especialmente optativas), avaliar o grau de dificuldade da matéria, quão trabalhosa ela é, apontar com qual professor teve a disciplina, dar uma nota para a didática dele e confirmar;
- outra que mostraria um compilado com as médias das notas inseridas por todas as avaliações.

## Integrantes 👧🏻
- Ailton Vinaud Junior (Backend, Devops)
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
Eu como usuário gostaria de selecionar uma disciplina e visualizar detalhes de cada avaliação feita, incluindo dados do avaliador
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
### 1 - Criar conta para Login
Eu como usuário gostaria de realizar login no sistema para proteger meu perfil de ser editado e conseguir consultar e editar minhas avaliações
#### - Tarefas e responsáveis
- Criação de ambiente EC2 AWS [Ailton]
- Criação de Projeto Base C# .Net utilizando arquitetura em camadas [Ailton]
- Criação de PipeLine automatizada para publicação na AWS [Ailton]
- Criação de banco de dados RDS na AWS [Ailton]
- Criação das tabelas de usuário [Ailton]
- Criação da controller de autenticação [Tais]
- Criação dos componentes da tela de login [Fabyo]

### 2 - Criar perfil de usuário
Eu como usuário gostaria de criar um perfil para que as pessoas possam saber minhas características e me conhecerem melhor como estudante.
#### - Tarefas e responsáveis
- Criação dos componentes de perfil e dados pessoais do usuário [Fabyo]
- Criação da controller de retorno de dados de usuário [Ailton]
- Criação da tebela de Perfil [Tais]

### 3 - Avaliar uma disciplina cursada
Como usuário eu quero avaliar as disciplinas e professores das matérias que já cursei para que eu possa divulgar para outros estudantes como foi minha experiência.
#### - Tarefas e responsáveis
- Criar tabela de disciplinas [Tais]
- Criar tabela de professores [Tais]
- Criar tabela com questionario[Ailton]
- Criar controller de disciplinas [Tais]
- Criar controller de professores [Tais]
- Criar controller para get de questionário [Ailton]
- Criar tabela de avaliação [Ailton]
- Criar controler de Insert avaliação [Ailton]
- Criar controller de Update avaliação [Tais]
- Criar componente de select disciplinas e professores [Ana]
- Criar componente de data [Ana]
- Criar componente do botão avaliar [Ana]
- Criar componente de avaliação [Ana]

### 4 - Editar uma avaliação realizada
Eu, como usuário, gostaria de poder alterar uma avaliação realizada anteriormente, caso tenha preenchido algum campo errado ou mudado de opinião.
#### - Tarefas e responsáveis
- Criar rota de delete avaliação [Ailton]
- Criar rota de update avaliação [Ailton]
- Criar tela de edição de avaliação [Fabyo]

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
    Criar componente de avaliação (barra crescente com percentual avaliativo para cada pergunta)  [Fabio]

## Instruções para rodar 🖱️
- É necessário ter Node.js >= 14.6.0 instalado na máquina
- Instale as dependências com o comando `npm install`
- Inicialize o projeto com o comando `npm run dev`
