# create controller to handle selecting random message
# create route to handle selecting random message

class Api::V1::MessagesController < ApplicationController
    def random
        @message = Message.order("RANDOM()").first
        render json: @message
    end
end
