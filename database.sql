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
    option_text VARCHAR(255) NOT NULL,
    is_answer boolean NOT NULL
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
    option_key integer REFERENCES options(option_id)
);

ALTER TABLE relationships_questions_options
ADD CONSTRAINT uq_relationships_questions_options UNIQUE(question_key, option_key);

/* Insert */
INSERT INTO categories(category_id,category_name)
VALUES (1,E'Frontend'), (2,E'Backend'), (3,E'Data');

-- INSERT INTO options(option_id,option_text,is_answer)
-- VALUES  (1,E'R',FALSE), (2,E'Java',FALSE), (3,E'Javascript',TRUE), (4,E'Python',FALSE), 
--         (5,E'Operatives',FALSE), (6,E'Operations',TRUE), (7,E'Options',FALSE),(8,E'Observe',FALSE),
--         (9,E'Java is object oriented',FALSE), (10,E'C has explicit pointers',FALSE), (11,E'Java runs on JVM',FALSE),(12,E'All of the above',TRUE),
--         (13,E'It is where the logic is written',FALSE), (14,E'It is used for styling',TRUE), (15,E'It is how to run the program',FALSE),(16,E'All of the above',FALSE);


-- INSERT INTO questions(question_id,question_text,nr_of_options,nr_of_answers,category_key,content_type,question_type,difficulty_level)
-- VALUES 
-- (1,E'Which one of these options is used for frontend work?',4,1,1,E'buzzword',E'multiple choice',1),
-- (2,E'What does Ops stand for in DevOps?',4,1,2,E'buzzword',E'multiple choice',1),
-- (3,E'What is a main difference between Java and C?',4,1,2,E'longeranswer',E'multiple choice',1),
-- (4,E'What is CSS used for in the frontend?',4,1,1,E'longeranswer',E'multiple choice',1);


-- INSERT INTO relationships_questions_options(question_key,option_key)
-- VALUES 
-- (1,1), (1,2), (1,3), (1,4),
-- (2,5), (2,6), (2,7), (2,8),
-- (3,9), (3,10), (3,11), (3,12),
-- (4,13), (4,14), (4,15), (4,16);
