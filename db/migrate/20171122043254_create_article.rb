class CreateArticle < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
    	t.string :title
      t.text :description
      t.string :author
      t.string :tags

			t.timestamps null: false
	   end
  end
end
