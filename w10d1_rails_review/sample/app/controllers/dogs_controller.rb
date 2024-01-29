class DogsController < ApplicationController
	def index
#		@dogs = Dog.all

		breed_id = params[:breed_id]
		@breed = Breed.find(breed_id)
		@dogs = @breed.dogs()
	end
end
