require 'pg'

def setup_test_database
 p "setting up test murphy_test database..."
 connection = PG.connect(dbname: 'murphy_test')
 connection.exec('TRUNCATE murphy_users, murphy_spaces CASCADE;')

 #connection.exec("INSERT INTO murphy_users(user_id,first_name,last_name,
 #	email,password) values(1,'Joe','Bloggs','jbloggs@murphys.com','dummy');")
 #connection.exec("INSERT INTO murphy_users(user_id,first_name,last_name,
 #	email,password) values(2,'John','Doe','jdoe@murphys.com','dummy');")
end
