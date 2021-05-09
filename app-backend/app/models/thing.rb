class Thing < ApplicationRecord
  belongs_to :list
  include ActiveModel::Serializers::JSON

  
end
