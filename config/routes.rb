Rails.application.routes.draw do
  get 'root/index'

  get 'api/messages/random', to: "api/v1/messages#random"

  root "root#index"
end
