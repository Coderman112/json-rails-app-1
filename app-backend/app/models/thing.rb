class Thing < ApplicationRecord
  belongs_to :list
  include ActiveModel::Serializers::JSON

  def attributes
    {"content" => nil, "id" => nil, "list_id" => nil}
end
