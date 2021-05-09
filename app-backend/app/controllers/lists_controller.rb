class ListsController < ApplicationController

    def index
        render json: List.all, key_transform: :camel_lower
        # render json: ListSerializer.new(List.all) 
        # render json: List.all, only: [:name, :id], include: [things: {only: [:content, :list_id]}]
    end

    def show
        list = List.find_by(id: params[:id])
        render json: list
    end

end
