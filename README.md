# Murphy

Instructions for creating Database (refer to instructions from /db/migrations/01_create_DB_table.sql:

terminal> psql postgres

postgres=# CREATE DATABASE murphy;
postgres=# \c murphy;

postgres=# issue the create table command here <refer to the sql file for instructions>


Similarly create the test instance..

postgres=# CREATE DATABASE murphy-test;
postgres=# \c murphy-test;

postgres=# issue the create table command here <refer to the sql file for instructions>

list the tables creted
postgres=# \dt 
postgres=# \d+ <tablename>