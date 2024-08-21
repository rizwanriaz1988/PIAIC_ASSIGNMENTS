import questionary # for user input with choices
from blessed import Terminal # for colors

std_id:int = 1
std_tuple:tuple = ( )
std_tuple_list:list[tuple[str,int]] = [ ] 
chr_length:int = 0
long_name_length:int = 0
short_name_length:int = float('inf')  # Set to a large initial value
long_name:str = ""
short_name:str = ""


def get_user_choice():
        choice:str = questionary.select(
            "Please choose an option:",
            choices=[
                "Add New Student",
                "Stop",
            ]
        ).ask()
        return choice

user_choice = get_user_choice()

while user_choice != "Stop":
    std_name = input("Enter student name: ")

    # Flag to check if the student already exists
    student_exists = False

    for i in std_tuple_list:
        if i[0] == std_name:
            student_exists = True
            break

    if student_exists:
        print("Student already exists")
    else:
        std_tuple = (std_name, std_id)
        std_tuple_list.append(std_tuple)
        std_id += 1

        print(std_tuple)
        print(std_tuple_list)

    user_choice = get_user_choice()

else:
    print("Complete List of Students (Tuples):",std_tuple_list)
    print("Complete List of Students with IDs:")
    for student in std_tuple_list:
        print(f"ID: {student[1]}, Name: {student[0]}")

        chr_length += len(student[0])

        if len(student[0]) > long_name_length:
            long_name_length = len(student[0])
            long_name = student[0]

        if len(student[0]) < short_name_length:
            short_name_length = len(student[0])
            short_name = student[0]
        

print("Total length of all student names combined:",chr_length)
print("The student with the longest name is",long_name)
print("The student with the shortest name is",short_name)
        


