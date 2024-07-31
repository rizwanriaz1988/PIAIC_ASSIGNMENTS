# ============================ 06. Delete a number =======================================
# Consider a list named numbers with the elements [1, 2, 3, 4, 5]. Use list method to delete the number 3?

numbers_list:list[int] = [1, 2, 3, 4, 5]
numbers_list_copy:list[int] = numbers_list.copy()
numbers_list_copy.remove(3)
print(f"{numbers_list} after removing 3 is {numbers_list_copy}")

