# # like so, single line comment

# num = 11

# if ( num > 3 )     # &&    ||   
#   p "num is greater than 3"
# elsif ( num == 3 )
# 	p "num is exactly 3"
# else
#   p "num is less than 3"
# end


# unless (num == 3)
#   p "MonkeyFuzz: num does NOT equal three"
# end


# p "MonkeyFuzz2: num does NOT equal three" unless (num == 3)


# # //
# # // javascript example of a single line conditional. ALWAYS USE { }
# # //

# # if (false) { console.log('hello'); }
# # 		      	console.log('world');

# # const num 5;
# # const num = (value5 > 4) ? value1 : value2;

# puts (num < 10) ? "single digits" : "multiple digits"

#
# LOOPS
#

# i = 0
# loop do
# 	i = i + 1
# 	break if i > 5
#   p "my iterator is #{i}"
# end

# j = 0
# while j < 5
# 	j += 1
# 	p "new iterator is #{j}"
# end

# names = ['Alice', 'Bob', 'Carol', 'David']
# for name in names
# 	p "Hello #{name}"
# end

# names.each do |name|
#   p "Goodbye #{name}"
# end


# 10.times do |number|
#   p "Sweet #{number}"
# end

# # p "hereisastring".methods
# p "monkeyfuzz".start_with? "m"


# # METHODS

# def say_hello name 
#   p "Hello, #{name}"
# end

# say_hello 'Monkey'


# // javascript this is an 'object'
# in Ruby this is a 'hash'
# in PHP this called an associative array

# names = { 
# 	username: 'monkey',
# 	password: 'fuzz'
# }

# names2 = {
# 	:username => 'monkey',
# 	:password => 'fuzz'
# }

# names3 = {
# 	"one" => 'monkey',
# 	"two" => 'fuzz'
# }

# p names
# p names2
# p names3

dogs = ["Odie", "Lassie", "Dioji"]

do_thing = lambda { |dog| puts dog }

dogs.each &do_thing

