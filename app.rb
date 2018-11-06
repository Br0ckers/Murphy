require 'sinatra/base'

class MurphyManager < Sinatra::Base
  get '/' do
    'Hello World'
  end

  get '/spaces/new' do
    erb :add_space
  end

  run! if app_file == $0
end
