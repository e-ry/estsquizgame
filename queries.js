//TODO this is unsafe
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'tele',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432
});

const getAllQuestions = (request, response) => {
  pool.query('SELECT * FROM questions ORDER BY questionId ASC;', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getQuestions = (request, response) => {
  pool.query('SELECT t2.questionId, t2.questionText,t3.optionText,t1.isAnswer,t4.categoryName FROM relationshopsquestionoptions t1 join ( select * from questions order by random() limit 1 ) as t2 on t1.questionKey = t2.questionId join options as t3 on t1.optionKey = t3.optionId join categories as t4 on t2.categoryKey = t4.categoryId;', (error, results) => {
    if (error) {
      throw error;
    }
    console.log("res", results.rows);

    //EXAMPLE OBJECT
    // var questionsAndOptions = [
    //   { questionId : 1,
    //     questionText : "Blablabla??",
    //     category: "Frontend",
    //     options: [
    //       {
    //         optionId: 1,
    //         optionText: "Blabla option bla",
    //         isAnswer: true
    //       },
    //       {
    //         optionId: 1,
    //         optionText: "Blabla option bla",
    //         isAnswer: true
    //       },
    //       {
    //         optionId: 1,
    //         optionText: "Blabla option bla",
    //         isAnswer: true
    //       }
    //     ]
    //   },
    //   { questionId : 1,
    //     questionText : "Blablabla??",
    //     category: "Frontend",
    //     options: [
    //       {
    //         optionId: 1,
    //         optionText: "Blabla option bla",
    //         isAnswer: true
    //       },
    //       {
    //         optionId: 1,
    //         optionText: "Blabla option bla",
    //         isAnswer: true
    //       },
    //       {
    //         optionId: 1,
    //         optionText: "Blabla option bla",
    //         isAnswer: true
    //       }
    //     ]
    //   }
    // ]

    var options = [];

    console.log("object");
    for (var i = 0; i < results.rows.length; i++) {
      console.log(results.rows[i]);

      questionsAndOptions.push(results.rows[i].questionId)


    }
  


    

    response.status(200).json(results.rows);

  });
};

//QUESTION
// SELECT t1.questionId, t1.questionText, t2.categoryName FROM questions t1
// join categories as t2 on t1.categoryKey = t2.categoryId
// order by random()
// limit 1;

//OPTIONS
// SELECT t2.questionId,t3.optionText,t1.isAnswer FROM relationshopsquestionoptions t1
// join (
//   select * from questions limit 1
// ) as t2 on t1.questionKey = t2.questionId
// join options as t3 on t1.optionKey = t3.optionId
// ;

/*
const getQuestionById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    'SELECT * FROM questions WHERE id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getOptionsById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    'SELECT * FROM options WHERE question_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2)',
    [name, email],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};
*/
module.exports = {
  getQuestions
};
