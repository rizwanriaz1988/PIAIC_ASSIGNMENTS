# ============================ 07. Creating a list You have two lists:=====================

# list1 with elements [1, 2, 3]
# list2 with elements [4, 5, 6].
# Create a program using list method to add the elements of list2 to list1.


list1 = [1, 2, 3]
list2 = [4, 5, 6]
extended_list = list1.extend(list2)
print(f"Extended list of {list1} and {list2} is: {extended_list}")
