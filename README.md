# Passo a Passo

## Qual a combinação de tecnologias que o React usa?

O react não possui preferência de tecnologias. Você pode usar o backend, banco de dados, css, testes, tudo é 100% do jeito que você quiser.

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

## 3 - Instalar CSS (Styled-Components) + Instalar Rotas (react-router-dom)

```bash
yarn add styled-components
yarn add react-router-dom
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
styles

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
    /styles
        index.css
        index.styles.js
App.js
index.js

```

### assets

Imagens, ícones e mídias.

### components

Button.js
Este é o seu componente react DE FATO.
O react não é MVC, nem MVVM, ele tem um design pattern próprio.

Dentro do componente, antes do return, temos o código que ficaria no controller.
Depois do return, fica o código JSX, que é o HTML+JS.
Requisições para APIs podem ser chamadas aqui.
Obs: Ele também aceita CSS inline
Podemos usar tailwind, bootstrap, css comum, o que achar melhor.

Button.styles.js
Aqui fica seu CSS. Este padrão .styles.js é usado pela lib styled-components e css modules. Tem gente que escreve index.js. Vai de gosto.
Eu gosto de organização, então ele recebe o nome do componente.

Button.test.js
Aqui fica seus testes unitários.

Button.stories.js
O stories é um arquivo da lib storybook. O storybook é tipo um figma do react.
Você tem um catálogo de componentes, onde você vê a aparência dele e a lógica que ele possui.

No caso de um botão podemos ver como é aparencia dele ao passar o mouse por cima, ao clicar, ao aguardar carregamento.
Podemos também ver as propriedades que ele recebe. No react essas propriedades recebem o nome de props.

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

### styles

Essa pasta é opcão pessoal minha. Muitos devs react usam.

## Arquivo index.css

Aqui eu coloco o CSS Reset + CSS Normalize + CSS Fixes para navegadores diferentes + CSS fixes para navegadores antigos como internet explorer

## Arquivo index.styles.js

Coloco styled-components que eu uso em vários lugares. Isso é preferência pessoal minha.

### Arquivo index.js

Este arquivo é a raiz da renderização. Ele é usado para ativar configurações.
Vamos ver isso na prática mais pra frente.

Por exemplo: Você tem um arquivo CONTEXT que possui os produtos salvos no carrinho do seu usuário.
Uma das etapas para disponibilizar os dados do estado para toda sua aplicação, é passar o contexto por aqui.
Mesma coisa acontece com as rotas do seu aplicativo. Elas são "ativadas" por aqui.
Tema claro e tema escuro também é ativado por aqui (caso você esteja usando styled-components)

# Início do código

Muito do que eu vou mostrar hoje são preferencias pessoas minhas.
Como o tempo é curto, eu não vou ficar separando o que é preferencia pessoal do que é boas práticas.

## Copiar os arquivos iniciais do projeto

Essa parte é igual copiar da lousa na escola. Então pra evitar perder tempo, se quiserem, vocês podem copiar o código do repositório e ir acompanhando o código.

O único detalhe é o seguinte:
Tenho um arquivo css que eu uso como padrão para resetar estilos e corrigir problemas com navegadores antigos.
Copia o conteúdo deste arquivo e cola no seu styles/index.css

# Projeto: Clone Netflix

A melhor forma de aprender é fazendo. Então vamos montar uma cópia da netflix. A fireflix.

A ideia aqui é aprender os seguintes conceitos:

## Como consumir uma api (React Hook: useEffect + Context API)

    -capa do filme
    -sinopse
    -nome

    tags: Consumir API, Consumir API Clique, Consumir API - Renderizar

## Renderização + Estilização condicional

    -Se você já tiver assistido o filme, o botão de assistir vai mudar de "assistir" para "assistir novamente"
    -A cor do botão muda de vermelho para cinza

    tags: estilizacao condicional

## Renderizar elementos de forma dinâmica (usando loops)

    -Renderizar lista de filmes de acordo com o retorno da api

    tags: Consumir API - Renderizar

## Criar API KEY para fazer requisição

```bash
https://www.omdbapi.com/apikey.aspx
```

# Dúvidas frequentes

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

# Dica Avançada:

## a - Usando javascript dentro do return (IIFE)

Antes do bloco de return, é area livre pra escrever código em javascript.
Depois do return, usamos HTML COM JS (JSX)

Pode acontecer da lógica ser muito difícil de escrever, nestes casos, a gente escreve em JAVASCRIPT ao invés de JSX.

```javascript
// exemplo de componente com código Javascrit PURO no return
export const Paragraph = styled.p`
  color: white;
`;

export const TesteJavascript = () => {
  return (
    <>
      <div>elemento 1</div>

      {(() => {
        const nome = "victor";

        if (typeof nome === "string") {
          return <Paragraph>É uma string!</Paragraph>;
        } else {
          return <Paragraph>Não é string!</Paragraph>;
        }
      })()}
    </>
  );
};
```
