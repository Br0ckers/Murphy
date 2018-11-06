require 'sinatra/base'

class MurphyManager < Sinatra::Base
  get '/' do
    erb :index
  end

  run! if app_file == $0
end
