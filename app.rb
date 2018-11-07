require 'sinatra/base'
require 'pg'
require './lib/user'
#require './lib/space'

# adding comment to test merge
class MurphyManager < Sinatra::Base

enable :sessions

  before do
    headers 'Access-Control-Allow-Origin' => '*',
    'Access-Control-Allow-Methods' => ['OPTIONS','GET','POST']
  end

  post '/createuser' do
    # This code needs to be changed such that it does not return or redirect - SVR 061118 1751
    email = params[:email]
    password = params[:password]
    User.create(email, password)

  end

  post '/createspaces' do
    property_name = params[:property_name]
    property_description = params[:property_description]
    price_per_night = params[:price_per_night]
    Space.create(property_name, property_description, price_per_night)
    # get the space parameters_
  end

  run! if app_file == $0
end
