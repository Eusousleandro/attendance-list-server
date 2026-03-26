# Attendance List Web
API backend para gerenciamento de listas de presença, construída com Node.js, TypeScript, Express e MySQL.

### Tecnologias utilizadas
    Node.js
    TypeScript
    Express
    MySQL2
    TSX (execução em desenvolvimento)
    TSUP (build)

### Instalação

#### Clone o repositório:
    git clone <url-do-repositorio>
    cd attendance-list-web

#### Instale as dependências:
    npm install

#### Configuração
    Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=sua_senha
    DB_DATABASE=nome_do_banco
    PORT=3000

## Scripts disponíveis
### Desenvolvimento
    npm run start:dev

### Executa o servidor usando tsx.

#### Desenvolvimento com Watch
    npm run start:watch

#### Reinicia automaticamente ao alterar arquivos.

### Build do projeto
    - npm run dist

### Compila o projeto com tsup.

#### Rodar versão buildada
    npm run start:dist

### Compila e executa o projeto.

### Estrutura sugerida
    src/
    ├── controllers/
    ├── services/
    ├── repositories/
    ├── database/
    ├── routes/
    └── server.ts

### Funcionalidades
    📋 Criar lista de presença
    📄 Listar presenças
    ✏️ Atualizar registros
    ❌ Remover registros
    🔗 Exemplo de rota
    GET /attendance

### Resposta:
    {
    "error": false,
    "message": "A suas listas de presenças",
    "data": []
    }

# Dependências principais
    Produção
    express → servidor HTTP
    mysql2 → conexão com banco MySQL
    cors → permitir requisições externas
    Desenvolvimento
    typescript
    tsx
    tsup
    @types/*