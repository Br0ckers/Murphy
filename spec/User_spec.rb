require './lib/user'
require './spec/setup_test_database'
require 'pg'

describe User do
	context 'check for the class' do
		it 'checks for the instance of User class' do
			expect(User.new).to be_instance_of(User)
		end
		it 'checks for the call to initialize' do
			con = User.new
			expect(con.connection).not_to eq nil
		end
	end

	context 'returns the record from the table' do
		it 'returns the user_id from table' do
			user_id = 0
			con = User.new
			user_id = con.getUser('jbloggs@murphys.com')
			expect(user_id).not_to eq 0
		end
	end

	context 'returns status from inserting' do
		it 'return the inserted data' do
			user_id = 0
			User.create('pjohn@pob.com','dummy')
			con = User.new
			user_id = con.getUser('pjohn@pob.com')
			expect(user_id).not_to eq 0
		end
	end

end