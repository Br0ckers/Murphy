require './lib/spaces'
require './spec/setup_test_database'
require 'pg'

describe Space do
	context 'check for the class' do
		it 'checks for the instance of Space class' do
			expect(Space.new).to be_instance_of(Space)
		end
		it 'checks for the call to initialize' do
			con = Space.new
			expect(con.connection).not_to eq nil
		end
	end

	context 'returns the record from the table' do
		it 'returns the space_id from table' do
			space_id = 0
			user = User.create('email', 'password')
			# space = Space.new
			con = Space.create(user[0], 'space_name', 'space_desc', 99.99)
			p Space.spacesList
			expect(Space.spacesList.length).to eq 1
		end
	end

	context 'returns status from inserting' do
		it 'return the inserted data' do
			space_id = 0
			user = User.create('email', 'password')
			space = Space.new
			 space_id = Space.create(user[0], 'space_name', 'space_desc', 99.99)
			expect(space_id).not_to eq 0
		end
	end

end
