/*CREATE TABLES*/
CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    answer_id integer REFERENCES options(id),
    creator_id integer REFERENCES users(id),
    question text
);

CREATE UNIQUE INDEX questions_pkey ON questions(id int4_ops);

CREATE TABLE options (
    id SERIAL PRIMARY KEY,
    option text,
    question_id integer REFERENCES questions(id)
);

CREATE UNIQUE INDEX options_pkey ON options(id int4_ops);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name character varying(30),
    email character varying(30)
);

CREATE UNIQUE INDEX users_pkey ON users(id int4_ops);

/*INSERT VALUES - questions - fixed ids*/
INSERT INTO "public"."questions"("answer_id","user_id","question")
VALUES
(3,5,E'Which one of these options is used for frontend work?');

INSERT INTO "public"."questions"("answer_id","user_id","question")
VALUES
(6,5,E'What does Ops stand for in DevOps?');

/*INSERT VALUES - user(s)*/
INSERT INTO "public"."users"("name","email")
VALUES
(E'Elisabeth',E'erya@netlight.com');

/*INSERT VALUES - Options*/
INSERT INTO "public"."options"("option","question_id")
VALUES
(E'R',2);

INSERT INTO "public"."options"("option","question_id")
VALUES
(E'Java',2);

INSERT INTO "public"."options"("option","question_id")
VALUES
(E'Javascript',2);

INSERT INTO "public"."options"("option","question_id")
VALUES
(E'Python',2);

INSERT INTO "public"."options"("option","question_id")
VALUES
(E'Operatives',3);

INSERT INTO "public"."options"("option","question_id")
VALUES
(E'Operations',3);

INSERT INTO "public"."options"("option","question_id")
VALUES
(E'Options',3);

INSERT INTO "public"."options"("option","question_id")
VALUES
(E'Observe',3);