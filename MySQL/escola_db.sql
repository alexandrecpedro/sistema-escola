DROP DATABASE IF EXISTS escola;
CREATE DATABASE escola;
USE escola;

CREATE TABLE `alunos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `sobrenome` varchar(200) NOT NULL,
  `ano_matricula` int NOT NULL,
  PRIMARY KEY (`id`)
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `professores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `sobrenome` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `areas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo` varchar(100) NOT NULL,
  `ano_matricula` int NOT NULL,
  PRIMARY KEY (`id`)
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `cursos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `area_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY area_foreing (area_id) REFERENCES areas(id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `turmas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `duracao` int(10) NOT NULL,
  `ano_inicio` int(10) NOT NULL,
  `semestre` tinyint(1) NOT NULL,
  `curso_id` int(10) unsigned NOT NULL,
  `professor_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY curso_foreing (curso_id) REFERENCES cursos(id),
  FOREIGN KEY professor_foreing (professor_id) REFERENCES professores(id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `alunos_has_turmas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `aluno_id` int(10) unsigned NOT NULL,
  `turma_id` int(10) unsigned NOT NULL,
  `numero_faltas` int(10),
  PRIMARY KEY (`id`),
  FOREIGN KEY aluno_foreing (aluno_id) REFERENCES alunos(id),
  FOREIGN KEY turma_foreing (turma_id) REFERENCES turmas(id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `alunos` (`nome`, `sobrenome`, `ano_matricula`)
VALUES ('Alex', 'Oliveira', 2019), 
('Marcos', 'Silva', 2015), 
('Assis', 'Pessoa', 2013),
('Iolanda', 'Pessoa', 2013),
('Yara', 'Pessoa', 2013),
('Ana', 'Cabral', 2013),
('Wellington', 'Mano', 2013);

INSERT INTO `professores` (`nome`, `sobrenome`)
VALUES ('João', 'Silva'),
('Martin', 'Embon'),
('Maria', 'Joana');

INSERT INTO `areas` (`tipo`, `ano_matricula`)
VALUES ('programacao', 2013),
('marketing', 2017),
('dados', 2014),
('administracao', 2019),
('design', 2021);

INSERT INTO `cursos` (`nome`, area_id)
VALUES ('Engenharia de Software', 1),
('Front-End', 2),
('Back-End', 5),
('UX Design', 4),
('Full Stack Node', 1),
('Data Science', 3);

INSERT INTO `turmas` (`duracao`, `ano_inicio`, `semestre`, curso_id, professor_id)
VALUES (10, 2020, 3, 3, 2),
(8, 2020, 5, 4, 1),
(4, 2021, 1, 6, 3),
(6, 2020, 4, 5, 1),
(8, 2019, 4, 2, 2),
(12, 2020, 2, 6, 3),
(8, 2018, 7, 5, 2);

INSERT INTO  `alunos_has_turmas` (turma_id, aluno_id)
VALUES (1, 1),
(2, 3),
(3, 4),
(4, 7),
(5, 6),
(6, 5),
(7, 6),
(4, 3),
(5, 1),
(2, 2);

UPDATE `cursos`
SET nome = 'Web Full Stack Node'
WHERE id = 5;

UPDATE `alunos`
SET ano_matricula = 2015
WHERE id = 1;

UPDATE `alunos`
SET ano_matricula = 2019
WHERE id = 2 OR id = 3;

UPDATE `alunos`
SET ano_matricula = 2018
WHERE id = 4;

UPDATE `alunos`
SET ano_matricula = 2020
WHERE id > 4 AND id < 8;

DELETE FROM `alunos_has_turmas` WHERE aluno_id = 3;