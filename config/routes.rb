Rails.application.routes.draw do
root to: 'site#index'

 namespace :api, defaults: { format: :json } do
   scope module: :v1 do
     resources :articles, only: [:show, :index, :create, :update, :destroy]
   end
 end
end