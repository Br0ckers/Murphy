require 'sinatra/base'

# adding comment to test merge
class MurphyManager < Sinatra::Base
  get '/' do
    erb :index
  end

  get '/spaces/new' do
    erb :add_space
  end
  # comment for testing

  run! if app_file == $0
end
