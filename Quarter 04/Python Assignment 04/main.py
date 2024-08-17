user_name=input("Please Enter Your Name : ")
print (f"Hello, {user_name}! Let's explore your favorite numbers:")


favorite_numbers=[ ]
tuple_list = [ ]
square_tuple_list = [ ]
sum = 0


for i in range(1,4):
    input_number = int(input(f"Enter Favorite Number {i}: ")) 
    even_odd_tuple = ( )
    num_square_tuple = ()    
    favorite_numbers.append(input_number)
    if (input_number % 2 == 0):
        even_odd_tuple += ("Even",input_number,)
        tuple_list.append(even_odd_tuple)
        #print(even_odd_tuple)
        print(tuple_list)
    else:
        even_odd_tuple += ("Odd",input_number,)
        tuple_list.append(even_odd_tuple)
        #print(even_odd_tuple)
        print(tuple_list)

    input_num_square = input_number * input_number
    num_square_tuple += (input_number,input_num_square,)
    square_tuple_list.append(num_square_tuple)
    print(square_tuple_list)


    sum += input_number

print("Sum",sum)

if (sum % 2 == 0):
    print("Sum is Even")
else:
    print("Sum is Odd")


    


print (f"Hello, {user_name}! Let's explore your favorite numbers:")

# print (even_odd_tuple)
print(favorite_numbers)