import math

# take user name as input
user_name:str=input("Please Enter Your Name : ")
print (f"Hello, {user_name}! Let's explore your favorite numbers:")

# declare variables
favorite_numbers:list[int]=[ ]
tuple_list:list[tuple] = [ ]
square_tuple_list:list[tuple] = [ ]
sum:int = 0

# function to check prime number
def prime_check(num_sum:int):
    if num_sum < 2:
        return False
    else:
        for i in range(2, int(math.sqrt(num_sum))+1):
            if num_sum % i == 0:
                return False
            else:
                return True

# take three favorite numbers as input
for i in range(1,4):
    input_number = int(input(f"Enter Favorite Number {i}: ")) 
    even_odd_tuple = ( )
    num_square_tuple = ()    
    favorite_numbers.append(input_number)
    # add tuple in list after checking even or odd
    if (input_number % 2 == 0):
        even_odd_tuple += ("Even",input_number,)
        tuple_list.append(even_odd_tuple)
    else:
        even_odd_tuple += ("Odd",input_number,)
        tuple_list.append(even_odd_tuple)

    # add tuple in list after calculating square
    input_num_square = input_number * input_number
    num_square_tuple += (input_number,input_num_square,)
    square_tuple_list.append(num_square_tuple)

# calculate sum of favorite numbers
    sum += input_number
# print tuple list having even and odd numbers
for i in tuple_list:
    print(f"The number {i[1]} is {i[0]}.")

# print tuple list having number and its square
for i in square_tuple_list:
    print(f"The number {i[0]} and its square: ({i[0]},{i[1]})")


print("Amazing! The sum of your favorite numbers is:",sum)

is_prime:bool = prime_check(sum)
if is_prime:
    print(f"Wow !!! {sum} is a Composite Number.")
else:
    print(f"Wow !!! {sum} is a Prime Number.")
    
