[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=33&pause=1000&color=F727DE&width=700&height=100&lines=Case+Tray+%7C+Jogo+da+Mem%C3%B3ria)](https://git.io/typing-svg)

## Instruções para rodar o projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/carlasama/case-tray.git
   cd case-tray
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com:
   ```env
   VITE_GOOGLE_CLIENT_ID=954809672415-o6l1us7tpb42qu0jk06dg3ondrt2dgqc.apps.googleusercontent.com
   VITE_GOOGLE_REDIRECT_URI=http://localhost:5173/
   ```
   Para produção (Vercel), defina as variáveis no painel do Vercel:
   - `VITE_GOOGLE_CLIENT_ID`
   - `VITE_GOOGLE_REDIRECT_URI=https://case-tray.vercel.app/`

4. **Execute o projeto em modo desenvolvimento:**
   ```sh
   npm run dev
   ```
   O app estará disponível em [http://localhost:5173](http://localhost:5173)

## Scripts para rodar testes

- **Rodar todos os testes:**
  ```sh
  npm run test
  ```
- **Rodar testes com interface interativa:**
  ```sh
  npm run test:ui
  ```

## Principais decisões técnicas

- **Vue 3 + TypeScript + Vite:**
  Utilizei Vue 3 com TypeScript e Vite para melhor performance, tipagem e experiência de desenvolvimento moderna.

- **Autenticação Google com OAuth 2.0 (Implicit Flow):**
  O login com Google foi implementado usando o fluxo OAuth 2.0 Implicit (response_type=token), que permite autenticação rápida em SPAs. O usuário é redirecionado para o Google, concede permissão e retorna para o app já autenticado. O fluxo funciona tanto em ambiente local quanto em produção.

- **Gerenciamento de estado:**
  Utilizei Pinia para gerenciamento de estado global, por ser a solução oficial e mais moderna para Vue 3.

- **Componentização e Atomic Design:**
  Os componentes seguem o padrão Atomic Design para melhor organização e reuso.

- **Responsividade e UI:**
  TailwindCSS foi utilizado para agilidade e consistência no design responsivo.

- **Segurança:**
  O fluxo OAuth não expõe secrets no frontend e segue as recomendações do Google. Para produção real, a troca do code por access_token deve ser feita em um backend seguro.

## Observações
- O fluxo de autenticação está pronto para produção quanto ao frontend. Para obter dados do usuário Google, é necessário implementar um backend para trocar o code por token (não incluso neste teste, mas documentado no código e README).

---
