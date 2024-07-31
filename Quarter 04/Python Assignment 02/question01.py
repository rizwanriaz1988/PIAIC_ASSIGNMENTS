# =========================Python Programming Assignment 02 ========================
# ==================================================================================

# ============================ 01. Add two numbers ======================================

# Write a Python program that takes two integer inputs from the user and calculates their sum. The program should perform the following tasks:

# Prompt the user to enter the first number.
# Read the input and convert it to an integer.
# Prompt the user to enter the second number.
# Read the input and convert it to an integer.
# Calculate the sum of the two numbers.
# Print the total sum with an appropriate message.

first_number:int = int(input("Enter first number: "))
second_number:int = int(input("Enter second number: "))
sum = first_number + second_number
print("The sum of {0} and {1} is {2}".format(first_number, second_number, sum))
