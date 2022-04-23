# Passo a Passo

## Qual a combinação de tecnologias que o React usa?

O react não possui preferência de tecnologias. Você pode usar o backend, banco de dados, css, testes, tudo é 100% do jeito que você quiser.

## Como é feito o suporte as libraries do react?

Se você usar o create-react-app, ele vai atualizar sozinho os pacotes para você.
Você não vai precisar ficar olhando se um pacote tem atualização e alterar manualmente no package.json, ou algo similar.

## Por que fazer manutenção manualmente?

Em alguns casos, vale a pena fazer o "eject" do react. Este eject é um processo onde você diz para o react que quem vai tomar conta das atualizações das libraries que o projeto usa, é você.
O motivo é que isso gera um ganho de performance. Mas cria também um custo de desenvolvimento, onde o desenvolvedor fica responsável por atualizar manualmente as libraries que o projeto usa.

## Qual diferença de usar react puro, react com next e react com gatsby?

O usuário precisa fazer LOGIN pra ter acesso ao conteúdo? Exemplo: Netflix. Neste caso, você pode usar o react puro.
O react puro, atualmente, gera um código final que não é possível aparecer nas primeiras posições do google.

O usuário pode encontrar seu conteúdo no google? Você quer trabalhar com o marketing pra aparecer nas primeiras posições com várias paginas diferentes ? Neste caso é bom usar o next.
O next.js é bom em gerar SEO em páginas dinamicas.
O next é bom quando seus dados são atualizados com frequência.
Ele é ótimo pra ganhar uma performance monstruosa, usando CDN para distribuir seu frontend.

Suas páginas NÃO SÃO dinâmicas? Exemplo: Blog, portfolio, portal de notícias. Então você pode usar o gatsby.
O gatsby suporta SEO para páginas estáticas. Mas perde muito em páginas dinâmicas.

## Como começar?

O react te dá uma estrutura de projeto padrão.
Se você quiser usar typescript ao invés de javascript, use o seguinte comando (npx create-react-app . --template typescript)

Existem vários templates para você começar seu projeto rapidamente, sem perder tempo com setup.
Existe um ecossistema monstruoso por trás do react. Aproveite tudo isso para se tornar mais produtivo.

## Qual a diferença de usar react e fazer tudo no javascript na mão?

O react realiza mudanças em um dom virtual, ao invés de realizar mudanças diretas no html verdadeiro do site. Por conta disso, as aplicações ficam muito mais rápidas.
Fora isso, o react vem com várias funcionalidades que aceleram o desenvolvimento. Isso você vai descobrindo com o tempo.

## 1 - Criar projeto

```bash
npx create-react app .
```

## 2 - Rodar projeto

```bash
yarn start
```

## 3 - Instalar CSS (Styled-Components)

```bash
yarn add styled-components
```

## 4 - Limpar arquivos

Pasta public:
Deixar apenas os arquivos: index.html, manifest.json, robots.txt

Pasta src:
Deixar apenas: App.js e Index.js

## 5 - Criar estrutura padrão

Criar dentro de src, as seguintes pastas:

```
assets
components
context
hooks
pages
services
utils

```

## 6 - Apagar referência aos arquivos excluídos

Com o projeto rodando no seu navegador, você verá os erros.
Vá linha por linha apagando as importações e referências a eles.

## 7 - Conhecendo a arquitetura do react

O projeto react tem a seguinte estrutura:

```
/src
    /assets
    /components
        /Button
            Button.js
            Button.styles.js
            Button.test.js
            Button.stories.js

    /context
    /hooks
    /pages
    /services
    /utils
App.js
index.js

```

### assets

Imagens, ícones e mídias.

### components

Button.js file that contains the actual React component
Button.styles.js file, let’s assume you are using styled components, contains corresponding styles
Button.test.js file that contains tests
Button.stories.js the Storybook file

### context

Vamos supor que você está criando um carrinho para um ecommerce.
Todas as páginas do seu site precisam ter acesso a lista de produtos que tem dentro do carrinho.
Para compartilhar essa variável com as outras páginas usamos a context API.
A context API é uma API do react para gerenciamento de estado.

### hooks

Vamos supor a funcionalidade de adicionar um produto no carrinho.
Toda vez que clicamos em adicionar ao carrinho, é ativada essa função que adiciona ou remove um produto do carrinho.
Ela poderia ser uma função comum em javascript. Se fosse o caso, ela ficaria na pasta UTILS.
Mas dentro do react temos algo chamado REACT HOOKS. Os react hooks são funções poderosas que vem junto com o react.
Toda vez que a nossa função utiliza um hook do react, automaticamente ela deixa de ser uma função comum, e passa a ser um CUSTOM HOOK.

Atenção: Se você usar um hook do react dentro de uma função sua, e ela não for configurada pra ser um custom hook, você terá muitos bugs na sua aplicação.

Os custom hooks ficam salvos dentro da pasta hooks.

### pages

Uma página é uma combinação de componentes.

Imagina no seu ecommerce que você tem uma area de BLOG. Um post no blog tem 3 sessões.
O menu, o conteúdo do artigo, e o footer.

Usando a componentização, sua página em react ficaria assim:

```javascript
<>
  <Header />
  <Content />
  <Footer />
</>
```

Sua pasta components ficaria assim:

```bash
/components
    /Header
        Header.js
        Button.styles.js
    /Content
        Content.js
        Button.styles.js
    /Footer
        Footer.js
        Footer.styles.js
```

Dentro de cada arquivo .js: estaria o HTML + JS do componente.
Dentro de .styles.js: estaria a estilização usando styled-components.

### services

Essa pasta pode ser chamada de "api" também. É onde fazemos as requisições com as apis. O react opera com front separado do backend.
Exemplo de requisição feita com axios.

```javascript
import axios from "axios";
import { resolve } from "./resolve.js";

export async function login(user, pass) {
  return await resolve(
    axios
      .post("http://some-api.com/auth", { user, pass })
      .then((res) => res.data)
  );
}
```

### utils

Imagine a função que valida o tamanho das fotos do seu ecommerce. Essa função seria reutilizada em várias partes do seu projeto.
Neste caso, ela ficaria na pasta utils.

Se essa função de validar tamanho das fotos usasse um hook do react, então ela passaria a ficar dentro da pasta CUSTOM HOOKS.

### Arquivo App.js

Aqui é onde fica o código inicial html + javascript da nossa aplicação. No exemplo do post do blog, esse arquivo ficaria assim:

```javascript
<>
  <Header />
  <Content />
  <Footer />
</>
```

### Arquivo index.js

Este arquivo é a raiz da renderização. Ele é usado para ativar configurações.
Neste tutorial vamos ver isso na prática mais pra frente.

Por exemplo: Você tem um arquivo CONTEXT que possui os produtos salvos no carrinho do seu usuário.
Uma das etapas para disponibilizar os dados do estado para toda sua aplicação, é passar o contexto por aqui.
Mesma coisa acontece com as rotas do seu aplicativo. Elas são "ativadas" por aqui.
Tema claro e tema escuro também é ativado por aqui (caso você esteja usando styled-components)
