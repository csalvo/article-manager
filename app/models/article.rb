class Article < ActiveRecord::Base
  validates_presence_of :title, :description, :author, :tags
  validates_length_of :title, in: 4..500
  validates_length_of :description, maximum: 1000
end