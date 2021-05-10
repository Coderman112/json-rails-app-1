class ThingsController < ApplicationController
    def index
        render json: Thing.all
    end

    def destroy
        thing = Thing.find_by(id: params[:id])
    end

end
