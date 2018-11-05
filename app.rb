require 'sinatra/base'

class MurphyManager < Sinatra::Base
  get '/' do
    'Hello World'
  end

  run! if app_file == $0
end
