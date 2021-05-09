class List < ApplicationRecord
    include ActiveModel::Serializers::JSON
    has_many :things


    def attributes
        {"name" => nil, "id" => nil, "things"}
    end
end
