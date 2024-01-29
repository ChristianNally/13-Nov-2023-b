class CreateDogs < ActiveRecord::Migration[7.1]
  def change
    create_table :dogs do |t|
			t.string :name
			t.string :sound
			t.string :age
			t.string :size

			t.references :breed, foreign_key: true, index: true

      t.timestamps
    end
  end
end
