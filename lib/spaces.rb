class Space
#test comment
	attr_reader :connection, :property_name, :property_description, :price_per_night

	def initialize
		if ENV['ENVIRONMENT'] == 'test'
	      @connection = PG.connect(dbname: 'murphy_test')
	    else
	      @connection = PG.connect(dbname: 'murphy')
	    end
	end

	def self.create(owner_id, property_name, property_description, price_per_night)
		space = Space.new
	space.createSpace(owner_id, property_name, property_description, price_per_night)
	end

	def createSpace(owner_id, property_name, property_description, price_per_night)
	#	p "createSpace called #{email}::#{password}"
		p owner_id
		prep_str = %{INSERT INTO murphy_spaces(owner_id, space_name, space_desc, price_per_night) values('#{owner_id.to_i}','#{property_name}','#{property_description}','#{price_per_night.to_f}') RETURNING space_id;}
		result = @connection.exec(prep_str)
		result.map{|item|
			item['space_id']
		}
	end

	def self.spacesList()
		space = Space.new
		# p "test2"
		space.getSpaces()
	end

	def getSpaces()
	#	p "getSpace called #{email}"
	p "test3"
		prep_str = "SELECT * from murphy_spaces order by space_id desc;"
		result = @connection.exec(prep_str)
	result.map{|item| {id: item['space_id'], owner_id: item['owner_id'], space_name: item['space_name'], space_desc: item['space_desc'], price_per_night: item['price_per_night']}
		}
		# p "test4"
		# p results_returned[1]
		# result.map{|item| item['space_name']}
		# return result[1]
	end
end
