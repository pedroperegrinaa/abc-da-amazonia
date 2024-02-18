#!/usr/bin/env node

import { program } from "commander";
program
  .name("string-util")
  .description(
    "O ABC da Amazonia é um projeto que tem como objetivo ensinar as crianças sobre a cultura e a fauna da região amazônica.",
  )
  .version("0.8.0");

program
  .command("pato-no-tucupi")
  .description("Fale sobre o prato pato no tucupi típico do Amazonas")
  .action(() => {
    console.log(
      "ABC da Amazônia: Pato no tucupi. Comer pato é coisa comum no pará, e o pato no tucupi está sempre na mesa em dias de festa. É considerado o prato que não pode faltar no círio de Nazaré, uma das maiores festas religiosas do país. Existem muitos criadores de pato no Pará, alguns apuram a raça a partir de vários cruzamentos, inclusive com patos selvagens, a carne é escura e firme preparado com vários temperos, o pato é assado cortado em pedaços e mergulhado no tucupi, um caldo amarelo extraído da mandioca, o último toque vem do jambu, planta picante que provoca ligeira dormência na boca e que faz parte de muitas receitas da cozinha paraense.",
    );
  });

program
  .command("tucuma")
  .description("Fale sobre o fruto tucumã típico do Amazonas")
  .action(() => {
    console.log(
      "ABC da Amazônia: Tucumã. A palmeira cheia de espinhos chega a mais de 20 metros de altura. Para tirar o fruto do Tucumã lá do alto, é preciso usar uma vara com uma espécie de foice na ponta. Cada cacho chega a ter 150 frutos. A parte comestível é constituída por apenas 20% de polpa. O Tucumã pode ser consumido ao natural ou em várias receitas, a maioria vendida em barraquinhas em Manaus. O caroço é grande e serve para fazer sabonetes, substituindo a lenha e o carvão no fogão, e até virar combustível: o biodiesel de tucumã. A parte dura da semente também é aproveitada na confecção de anéis e outras peças de artesanato.",
    );
  });

program
  .command("night-monkey")
  .description("Faça uma descrição do macaco da noite típico do Amazonas")
  .action(() => {
    console.log(
      "ABC da Amazônia: Macaco da noite. O macaco da noite é um dos mais raros animais que vive na Amazônia, uma das áreas de ocorrência é o Parque Nacional de Jaú no estado do Amazonas. Localizar um bando exige paciência é preciso escolher uma árvore alta e ficar de butuca na espreita até escurecer, aqui a tentativa deu certo o primeiro macaco surge de repente ,só a carinha de fora os olhos grandes se destacam, e logo aparece outro, essa espécie de macaco é a única com hábitos noturnos. Os macacos da noite vivem em oco de árvores , passam o dia entocados e só saem pra procurar alimento , nesta cena incomum vemos três macacos diante da câmera. ABC da Amazônia oferecimento Tv brasileira e outras Anomalias, presença na conservação da Amazônia e Natura Ekos siga a sua sabedoria.",
    );
  });

program.parse();
