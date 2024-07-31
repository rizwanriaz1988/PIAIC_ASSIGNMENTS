# ============================ 07. Creating a list You have two lists:=====================

# list1 with elements [1, 2, 3]
# list2 with elements [4, 5, 6].
# Create a program using list method to add the elements of list2 to list1.


list1:list[int] = [1, 2, 3]
list2:list[int] = [4, 5, 6]
list1_copy:list[int] = list1.copy()
list1_copy.extend(list2)
print(f"Extended list of {list1} and {list2} is:\n {list1_copy}")
