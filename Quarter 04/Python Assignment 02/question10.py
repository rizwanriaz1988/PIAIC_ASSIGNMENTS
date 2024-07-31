# ============================ 10. Challenge Questions ======================================
# Get last element Fill out the function get_last_element(lst) which takes in a list lst as a parameter and prints the last element in the list. The list is guaranteed to be non-empty, but there are no guarantees on its length.



user_list = []
num = int(input("Enter number of elements in list: "))
for i in range(0, num):
    ele = int(input("Enter elements: "))
    user_list.append(ele)
print("User List is: ", user_list)

def get_last_element(lst):
    return lst[-1]
print("Last Element of list is: ",get_last_element(user_list))

