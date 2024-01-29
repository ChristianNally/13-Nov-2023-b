# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Adding Seeds"

# Breed.new() # this doesn't save

25.times do
	Breed.create(
			breed: Faker::Creature::Dog.breed()	
	)
end

puts "Get the Breeds from the DB"

breeds = Breed.all()

puts "Creating the Dogs"

100.times do
	Dog.create(
		name: Faker::Creature::Dog.name,
		sound: Faker::Creature::Dog.sound,
		age: Faker::Creature::Dog.age,
		size: Faker::Creature::Dog.size,
		breed: breeds.sample 
		)
end

puts "Finished Adding Seeds"