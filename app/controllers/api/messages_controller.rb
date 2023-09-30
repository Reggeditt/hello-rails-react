class Api::MessagesController < ApplicationController
    def random
        @message = Message.order("RANDOM()").first
        if @message
            render json: { content: @message.content }
        else
            render json: { content: 'No message available' }
        end
    end
end
