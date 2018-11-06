require 'sinatra/base'
require 'pg'
require './lib/user'
require './lib/space'

# adding comment to test merge
class MurphyManager < Sinatra::Base

enable :sessions

  get '/' do
    erb :index
  end

  get '/sign_in' do
   erb :sign_in
  end

  get '/spaces/new' do
    erb :add_space
  end
  # comment for testing

  post '/createuser' do
    email = params[:email]
    password = params[:password]
    user_id = User.create(email, password)
      if user_id != nil
        session[:user_id] = user_id
      end
  	# get the user email and password using params
  end

  post '/spaces/add' do
    property_name = params[:property_name]
    property_description = params[:property_description]
    price_per_night = params[:price_per_night]

    Space.create(property_name, property_description, price_per_night)
    # get the space parameters
  end

  run! if app_file == $0
end
