with question AS (
    INSERT INTO questions(question_text,nr_of_options,nr_of_answers,
    category_key,content_type,question_type,difficulty_level)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
    RETURNING question_id AS id
  ),
  opt AS (
    INSERT INTO options(option_text,is_answer)
    VALUES ($8,$9),($10,$11),($12,$13),($14,$15)
    RETURNING option_id AS id
  )
  INSERT INTO relationships_questions_options(question_key,option_key,is_answer)
  SELECT question.id,opt.id from question, opt