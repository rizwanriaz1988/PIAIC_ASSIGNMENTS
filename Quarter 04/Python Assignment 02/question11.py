# ============================ 11. Get a List ===============================================
#  Write a program which continuously asks the user to enter values which are added one by one into a list. When the user presses enter without typing anything, print the list.

# Here's a sample run (user input is in blue):

# Enter a value: 1
# Enter a value: 2
# Enter a value: 3
# Enter a value:
# Here's the list: ['1', '2', '3']


user_infinite_list  = []

while True:
    user_input = input("Enter a value: ")
    if user_input != "":
        user_infinite_list.append(user_input)   
    else:
        print(f"Here's your list: {user_infinite_list}")
        break
