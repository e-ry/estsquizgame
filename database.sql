/*Follow this https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/ */
/*CREATE TABLES*/

DROP TABLE relationships_questions_options cascade;
DROP TABLE options cascade;
DROP TABLE questions cascade;
DROP TABLE categories cascade;

CREATE TABLE categories(
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE options(
    option_id SERIAL PRIMARY KEY,
    option_text VARCHAR(255) NOT NULL
);

CREATE TABLE questions(
    question_id SERIAL PRIMARY KEY,
    question_text VARCHAR(255) NOT NULL,
    nr_of_options integer NOT NULL,
    nr_of_answers integer NOT NULL,
    category_key integer REFERENCES categories(category_id),
    content_type VARCHAR(255) NOT NULL,
    question_type VARCHAR(255) NOT NULL,
    difficulty_level VARCHAR(255) NOT NULL
);

CREATE TABLE relationships_questions_options(
    question_key integer REFERENCES questions(question_id),
    option_key integer REFERENCES options(option_id),
    is_answer boolean NOT NULL
);

ALTER TABLE relationships_questions_options
ADD CONSTRAINT uq_relationships_questions_options UNIQUE(question_key, option_key);

/* Insert */
INSERT INTO categories(category_id,category_name)
VALUES (1,E'Frontend'), (2,E'Backend'), (3,E'Data');

INSERT INTO options(option_id,option_text)
VALUES  (1,E'R'), (2,E'Java'), (3,E'Javascript'), (4,E'Python'), 
        (5,E'Operatives'), (6,E'Operations'), (7,E'Options'),(8,E'Observe'),
        (9,E'Java is object oriented'), (10,E'C has explicit pointers'), (11,E'Java runs on JVM'),(12,E'All of the above'),
        (13,E'It is where the logic is written'), (14,E'It is used for styling'), (15,E'It is how to run the program'),(16,E'All of the above');


INSERT INTO questions(question_id,question_text,nr_of_options,nr_of_answers,category_key,content_type,question_type,difficulty_level)
VALUES 
(1,E'Which one of these options is used for frontend work?',4,1,1,E'buzzword',E'multiple choice',1),
(2,E'What does Ops stand for in DevOps?',4,1,2,E'buzzword',E'multiple choice',1),
(3,E'What is a main difference between Java and C?',4,1,2,E'longeranswer',E'multiple choice',1),
(4,E'What is CSS used for in the frontend?',4,1,1,E'longeranswer',E'multiple choice',1);


INSERT INTO relationships_questions_options(question_key,option_key,is_answer)
VALUES 
(1,1,FALSE), (1,2,FALSE), (1,3,TRUE), (1,4,FALSE),
(2,5,FALSE), (2,6,TRUE), (2,7,FALSE), (2,8,FALSE),
(3,9,FALSE), (3,10,FALSE), (3,11,FALSE), (3,12,TRUE),
(4,13,FALSE), (4,14,TRUE), (4,15,FALSE), (4,16,FALSE);
