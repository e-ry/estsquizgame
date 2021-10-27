/*Follow this https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/ */
/*CREATE TABLES*/

CREATE TABLE categories(
    categoryId SERIAL PRIMARY KEY,
    categoryName VARCHAR(255) NOT NULL
);



CREATE TABLE options(
    optionId SERIAL PRIMARY KEY,
    optionText VARCHAR(255) NOT NULL
);

CREATE TABLE questions(
    questionId SERIAL PRIMARY KEY,
    questionText VARCHAR(255) NOT NULL,
    nrOfOptions integer NOT NULL,
    nrOfAnswers integer NOT NULL,
    categoryKey integer REFERENCES categories(categoryId),
    contentType VARCHAR(255) NOT NULL,
    questionType VARCHAR(255) NOT NULL,
    difficultyLevel VARCHAR(255) NOT NULL
);

CREATE TABLE relationshopsQuestionOptions(
    questionKey integer REFERENCES questions(questionId),
    optionKey integer REFERENCES options(optionId),
    isAnswer boolean NOT NULL
);


/* Insert */
INSERT INTO categories(categoryId,categoryName)
VALUES (1,E'Frontend'), (2,E'Backend'), (3,E'Data');

INSERT INTO options(optionId,optionText)
VALUES  (1,E'R'), (2,E'Java'), (3,E'Javascript'), (4,E'Python'), 
        (5,E'Operatives'), (6,E'Operations'), (7,E'Options'),(8,E'Observe');

INSERT INTO questions(questionId,questionText,nrOfOptions,nrOfAnswers,categoryKey,contentType,questionType,difficultyLevel)
VALUES 
(1,E'Which one of these options is used for frontend work?',4,1,1,E'buzzword',E'multiple choice',1),
(2,E'What does Ops stand for in DevOps?',4,1,2,E'buzzword',E'multiple choice',1);

INSERT INTO relationshopsQuestionOptions(questionKey,optionKey,isAnswer)
VALUES 
(1,1,FALSE), (1,2,FALSE), (1,3,TRUE), (1,4,FALSE),
(2,5,FALSE), (2,6,TRUE), (2,7,FALSE), (2,8,FALSE);
