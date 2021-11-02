# ES TS Quiz game

#install psql (requires brew)

Brew install postgresql

#start postgresql

Brew services start postgresql 

#connect to database

psql postgres

#create a user called me

postgres=# CREATE ROLE me WITH LOGIN PASSWORD ‘password’;

#give the new user permission to create a database

ALTER ROLE me CREATEDB;

#quit the admin mode

\q

#log in with me

psql -d postgres -U me

#create new database as me

CREATE DATABASE api;

#quit

\q

#connect to the database (given the commands in database.sql)

psql me -h 127.0.0.1 -d api -f database.sql

#start server

npm install

npm start

#start front end

cd client

npm install

npm start
