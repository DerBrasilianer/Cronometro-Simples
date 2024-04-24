# Exercicio de Cronometro

## Objetivo

Criar um cronometro que inicie, pare e zere ao clicas nos botões com essas funçãos

## setInerval

O `setInterval` é uma função que executa uma função a cada intervalo de tempo especificado. A função é executada indefinidamente até que seja chamado o `clearInterval` passando o id do intervalo.

```javascript
let intervalId = setInterval(() => {
  console.log('Executando a cada 1 segundo')
}, 1000)

clearInterval(intervalId)
```

> ver mais em [MDN setInterval](https://developer.mozilla.org/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

## Extras

- Ao pressionar a tecla Espaço o cronometro deve iniciar ou parar
- Ao pressionar a tecla Z o cronometro deve zerar
