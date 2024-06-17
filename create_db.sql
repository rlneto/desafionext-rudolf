-- create_blog_db.sql

CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  publishedAt TEXT NOT NULL,
  body TEXT NOT NULL
);

-- Insert some sample data
INSERT INTO posts (title, author, publishedAt, body)
VALUES ('O impacto dos jogos retrô na indústria de desenvolvimento de jogos', 'Guilherme Santos', '2023-04-23', 'Os jogos retrô têm tido um impacto significativo na indústria de desenvolvimento de jogos, tanto do ponto de vista comercial quanto cultural. Com o ressurgimento do interesse em jogos retrô, impulsionado pela nostalgia e a busca por experiências de jogo mais simples, muitas...');
INSERT INTO posts (title, author, publishedAt, body)
VALUES ('Como desenvolver jogos retrô com um toque moderno', 'João Silva', '2023-04-24', 'Desenvolver jogos retrô com um toque moderno é uma tarefa que exige criatividade e conhecimento técnico. Neste post, exploraremos algumas técnicas e ferramentas que podem ser úteis nesse processo.');
INSERT INTO posts (title, author, publishedAt, body)
VALUES ('Criação de arte pixelada', 'Maria Oliveira', '2023-04-25', 'A arte pixelada é uma forma de arte digital onde as imagens são criadas e editadas ao nível do pixel. É uma técnica comumente usada em jogos retrô e tem experimentado um ressurgimento na popularidade.');
INSERT INTO posts (title, author, publishedAt, body)
VALUES ('Trilha sonora em jogos retrô', 'Carlos Costa', '2023-04-26', 'A trilha sonora é um elemento crucial em jogos retrô, muitas vezes definindo a atmosfera e o humor do jogo. Neste post, discutiremos como criar trilhas sonoras eficazes para jogos retrô.');
INSERT INTO posts (title, author, publishedAt, body)
VALUES ('As influências históricas dos jogos retrô na cultura pop', 'Ana Santos', '2023-04-27', 'Os jogos retrô tiveram uma influência significativa na cultura pop, inspirando tudo, desde a música e a moda até filmes e programas de televisão. Neste post, exploraremos algumas dessas influências em detalhes.');
