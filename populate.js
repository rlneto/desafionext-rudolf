const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./blog.db');

const posts = [
  {
    title: "O impacto dos jogos retrô na indústria de desenvolvimento de jogos",
    author: "Guilherme Santos",
    publishedAt: "2023-04-23",
    body: "Os jogos retrô têm tido um impacto significativo na indústria de desenvolvimento de jogos, tanto do ponto de vista comercial quanto cultural. Com o ressurgimento do interesse em jogos retrô, impulsionado pela nostalgia e a busca por experiências de jogo mais simples, muitas..."
  },
  {
    title: "Como desenvolver jogos retrô com um toque moderno",
    author: "João Silva",
    publishedAt: "2023-04-24",
    body: "Desenvolver jogos retrô com um toque moderno é uma tarefa que exige criatividade e conhecimento técnico. Neste post, exploraremos algumas técnicas e ferramentas que podem ser úteis nesse processo."
  },
  {
    title: "Criação de arte pixelada",
    author: "Maria Oliveira",
    publishedAt: "2023-04-25",
    body: "A arte pixelada é uma forma de arte digital onde as imagens são criadas e editadas ao nível do pixel. É uma técnica comumente usada em jogos retrô e tem experimentado um ressurgimento na popularidade."
  },
  {
    title: "Trilha sonora em jogos retrô",
    author: "Carlos Costa",
    publishedAt: "2023-04-26",
    body: "A trilha sonora é um elemento crucial em jogos retrô, muitas vezes definindo a atmosfera e o humor do jogo. Neste post, discutiremos como criar trilhas sonoras eficazes para jogos retrô."
  },
  {
    title: "As influências históricas dos jogos retrô na cultura pop",
    author: "Ana Santos",
    publishedAt: "2023-04-27",
    body: "Os jogos retrô tiveram uma influência significativa na cultura pop, inspirando tudo, desde a música e a moda até filmes e programas de televisão. Neste post, exploraremos algumas dessas influências em detalhes."
  }
];

db.serialize(() => {
  const stmt = db.prepare("INSERT INTO posts (title, author, publishedAt, body) VALUES (?, ?, ?, ?)");
  posts.forEach(post => {
    stmt.run(post.title, post.author, post.publishedAt, post.body);
  });
  stmt.finalize();
});

db.close();
