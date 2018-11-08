# Murphy

# Instructions for creating the Murphy B'n'B Databases and Tables
1. Instructions for creating Database (refer to instructions from /db/migrations/01_create_DB_table.sql:
> terminal> psql postgres
> postgres=# CREATE DATABASE murphy;
> postgres=# \c murphy;
> postgres=# issue the create table command here <refer to the sql file for instructions>

2. Similarly create the test instance..
> postgres=# CREATE DATABASE murphy-test;
> postgres=# \c murphy-test;
3. Create the tables using the SQL file.
> postgres=# issue the create table command here <refer to the sql file for instructions>
4. List the tables created
> postgres=# \dt 
> postgres=# \d+ <tablename>
------------------------------------------------------------------------------------------------------------------------------
  
1. From your terminal
> git clone git@github.com:Br0ckers/Murphy.git
> "change the current directory to Murphy"
> cd Murphy
> git pull
> bundle install

2. If there is a conflict with the ruby version used open the gemfile to check the ruby version
> rvm use 'version from the gemfile'

3. Run
> rackup
> "Starts the web server for the Ruby API"

4. From another terminal
>cd Murphy
>open index.html
------------------------------------------------------------------------------------------------------------------------------

Scope of our MVP:

TBD
