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

## 1

```
npx create-react app .
```
