# frozen_string_literal: true

Rails.application.routes.draw do
  get 'root/index'

  get 'api/messages/random', to: 'api/messages#random'

  root 'root#index'
end
