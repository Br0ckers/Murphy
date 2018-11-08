class User
	attr_reader :connection, :email, :pass
	def initialize
		if ENV['ENVIRONMENT'] == 'test'
	      @connection = PG.connect(dbname: 'murphy_test')
	    else
	      @connection = PG.connect(dbname: 'murphy')
	    end
	end

	def self.create(email,password)
		user = User.new
		user.createUser(email,password)
	end

	def createUser(email,password)
	#	p "createUser called #{email}::#{password}"
		prep_str = "INSERT INTO murphy_users(email,password) values('"+email+"','"+password+"') RETURNING user_id;"
		result = @connection.exec(prep_str)
		result.map{|item|
			item['user_id']
		}
	end

  # DB/ZH signin_user method below
	def signin_user(email, password)
		prep_str = "SELECT user_id FROM murphy_users WHERE email = '"+email+"' AND password = '"+password+"';"
		result = @connection.exec(prep_str)
		id = result.map{|item|
			item['user_id']
    }
	end
end
