//TODO this is unsafe
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432
});

const getAllQuestions = (request, response) => {
  pool.query('SELECT * FROM questions ORDER BY question_id ASC;', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getQuestions = (request, response) => {
  pool.query('SELECT t2.question_id, t2.question_text, t3.option_id, t3.option_text, t1.is_answer,t4.category_name FROM relationships_questions_options t1 join ( select * from questions order by random() limit 4 ) as t2 on t1.question_key = t2.question_id join options as t3 on t1.option_key = t3.option_id join categories as t4 on t2.category_key = t4.category_id;', (error, results) => {
    if (error) {
      throw error;
    }
    
    var uniqueOptions = [];
    var uniqueQuestions = results.rows.reduce((unique, o) => {
      if(!unique.some(obj => obj.question_id === o.question_id)) {
        unique.push((({ question_id, question_text,category_name }) => ({ question_id, question_text,category_name }))(o));
      }
      return unique;
    },[]);

    for (var i = 0; i < uniqueQuestions.length; i++) {
      uniqueOptions = results.rows.filter(obj => obj.question_id === uniqueQuestions[i].question_id);
      var options = [];
      for(var j = 0; j < uniqueOptions.length; j++){
        const option = {
          "option_id": uniqueOptions[j].option_id, 
          "option_text": uniqueOptions[j].option_text,
          "is_answer": uniqueOptions[j].is_answer
        }
        options.push(option);
      }
      uniqueQuestions[i].options=options;
    }

    response.status(200).json(uniqueQuestions);
  });
};



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
