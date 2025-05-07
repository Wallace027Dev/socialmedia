
# 🕸️ Rede Social Simples

Uma rede social minimalista construída com **React**, onde usuários podem publicar histórias, acompanhar um feed em tempo real e visualizar os posts mais acessados.

![preview](./public/images/preview.png)

## ✨ Funcionalidades

- 📜 **Publicação de histórias** – Criação de posts diretamente pelo formulário.
- 📰 **Feed dinâmico** – Lista de postagens em tempo real com atualização automática.
- 📈 **Mais visualizados** – Página destacando os posts com mais visualizações.
- 📱 **Layout responsivo** – Interface adaptável para desktop, tablet e mobile.
- 💾 **Persistência local** – Os dados são armazenados no `localStorage`.

## 🛠️ Tecnologias Utilizadas

- **React** – Biblioteca para construção de interfaces reativas.
- **React Router** – Navegação SPA entre páginas.
- **CSS Modules** – Estilização isolada por componente.
- **LocalStorage** – Armazenamento local sem backend.

## 🗂️ Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis do feed e formulário
│   ├── Feed.js
│   ├── FeedStatus.js
│   └── PostForm.js
├── config/             # Configurações e mensagens de erro
│   └── errors.js
├── images/             # Ícones e imagens utilizadas na interface
├── mocks/              # Dados simulados para desenvolvimento
│   └── posts.json
├── pages/              # Páginas principais da aplicação
│   ├── Home.js
│   └── MostViewed.js
├── services/           # Funções de manipulação dos dados/posts
│   └── postsServices.js
├── styles/             # Estilos globais e por componente
│   ├── App.css
│   ├── Feed.css
│   ├── PostForm.css
│   └── global.css
├── App.js              # Componente principal da aplicação
├── Routes.js           # Configuração de rotas
└── index.js            # Ponto de entrada da aplicação
```

## ▶️ Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd socialmedia
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor local:
   ```bash
   npm start
   ```

4. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 📦 Scripts Disponíveis

- `npm start` – Inicia o app em modo desenvolvimento.
- `npm run build` – Compila o projeto para produção.
- `npm test` – Executa testes (caso configurados).
- `npm run eject` – Ejetar configuração do CRA (use com cuidado).

## 🎨 Organização de Estilos

Todos os estilos estão localizados em `src/styles`:
- Arquivos específicos por componente (ex: `PostForm.css`)
- `global.css` para variáveis, resets e estilos globais

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e não possui uma licença específica.

---

Desenvolvido por [Wallace Vieira](https://wallacevieira.vercel.app) – Desenvolvedor Fullstack & entusiasta de jogos.
