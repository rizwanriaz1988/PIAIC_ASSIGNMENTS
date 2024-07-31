# ============================ 08. Pop method =============================================
# You have a list named items with the elements [10, 20, 30, 40]. If you use the pop method without any arguments, what will the list look like and what value will be removed?

items:list[int] = [10, 20, 30, 40]
items_copy:list[int] = items.copy()
list_pop = items.pop()
print(f"After pop list {items_copy} will be: {items} \nAfter pop last value will be removed i.e {list_pop}")
