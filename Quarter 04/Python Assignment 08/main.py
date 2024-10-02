import questionary # for user input with choices
from blessed import Terminal # for colors


# user_choice = ""
user_choice_dict = {"bucket_3": 0, "bucket_5": 0, "bucket_8": 0}

turns = 0


def bucket_three(liters , size = 3):
    result = []  # Collect output lines into a list
    for i in range(size):
        if size - i <= liters:
            result.append(f"{size-i}|{'W'*8}|")  # Fill with water (W)
        else:
            result.append(f"{size-i}|        |")  # Empty space
    result.append(f" +--------+")
    result.append(f"     {size}L    ")
    return result  # Return the result as a list of strings

def bucket_five(liters , size = 5):
    result = []  # Collect output lines into a list
    for i in range(size):
        if size - i <= liters:
            result.append(f"{size-i}|{'W'*8}|")  # Fill with water (W)
        else:
            result.append(f"{size-i}|        |")  # Empty space
    result.append(f" +--------+")
    result.append(f"     {size}L    ")
    return result  # Return the result as a list of strings

def bucket_eight(liters , size = 8):
    result = []  # Collect output lines into a list
    for i in range(size):
        if size - i <= liters:
            result.append(f"{size-i}|{'W'*8}|")  # Fill with water (W)
        else:
            result.append(f"{size-i}|        |")  # Empty space
    result.append(f" +--------+")
    result.append(f"     {size}L    ")
    return result  # Return the result as a list of strings

def print_buckets_function(bucket_three_filling, bucket_five_filling, bucket_eight_filling):

    global turns
    turns += 1

    bucket_three_output = bucket_three(bucket_three_filling)
    bucket_five_output = bucket_five(bucket_five_filling)
    bucket_eight_output = bucket_eight(bucket_eight_filling)


    max_size = max(len(bucket_three_output), len(bucket_five_output), len(bucket_eight_output))
    while len(bucket_three_output) < max_size:
        bucket_three_output.insert(0, " " )
    while len(bucket_five_output) < max_size:
        bucket_five_output.insert(0, " " )
    while len(bucket_eight_output) < max_size:
        bucket_eight_output.insert(0, " " )

    output_lines = []
    for i in range(max_size):
        output_lines.append(bucket_eight_output[i] + "     " + bucket_five_output[i] + "     " + bucket_three_output[i])

        # Join the lines with newlines and return as a string
    return "\n".join(output_lines)

# get user choices
def get_user_choice():
    choice = questionary.select(
        f"Try to get 4L of water into one of these buckets:\n{print_buckets_function(user_choice_dict["bucket_3"], user_choice_dict["bucket_5"], user_choice_dict["bucket_8"])}",
        choices=[
            "Fill the bucket",
            "Empty the bucket",
            "Pour one bucket into another",
            "Quit"
        ]
    ).ask()
    return choice

def get_sub_user_choice():
    sub_choice = questionary.select("Select a bucket:", choices=["Bucket 3", "Bucket 5", "Bucket 8", "Back"]).ask()
    return sub_choice

def get_destination_bucket_choice():
    sub_dest_choice = questionary.select("Select destination bucket:", choices=["Bucket 3", "Bucket 5", "Bucket 8", "Back"]).ask()
    return sub_dest_choice

def pour_bucket(source_bucket, destination_bucket):

    source_bucket_number  = int(source_bucket.split()[-1])
    destination_bucket_number  = int(destination_bucket.split()[-1])

    # Create a mapping from bucket number to user_choice_dict key
    bucket_map = {
        3: "bucket_3",
        5: "bucket_5",
        8: "bucket_8"
    }


    # Get the current liters in the source and destination buckets
    source_liters = user_choice_dict[bucket_map[source_bucket_number]]
    destination_liters = user_choice_dict[bucket_map[destination_bucket_number]]

    # Prevent pouring into the same bucket
    if source_bucket_number == destination_bucket_number:
        print("You can't pour into the same bucket!")
        print(print_buckets_function(user_choice_dict["bucket_3"], user_choice_dict["bucket_5"], user_choice_dict["bucket_8"]))
        return  # Exit the function early

    # Perform the pouring logic
    available_space = destination_bucket_number - destination_liters  # How much water can the destination hold

    # If the source has more water than the destination can hold
    if source_liters > available_space:
        # Pour as much as the destination can hold and update the source
        user_choice_dict[bucket_map[source_bucket_number]] -= available_space
        user_choice_dict[bucket_map[destination_bucket_number]] = destination_bucket_number
    else:
        # Pour everything from the source into the destination
        user_choice_dict[bucket_map[destination_bucket_number]] += source_liters
        user_choice_dict[bucket_map[source_bucket_number]] = 0  # Source is now empty

    # Print the updated bucket states
    print(print_buckets_function(user_choice_dict["bucket_3"], user_choice_dict["bucket_5"], user_choice_dict["bucket_8"]))


# Welcome message
print(Terminal().blue("\n Welcome to Bucket Puzzle!"))
print(Terminal().blue("---------------------------"))



while True:
    # Get the main user choice
    user_choice = get_user_choice()

    if user_choice == "Quit":
        print("Thanks for playing!")
        break

    elif user_choice_dict["bucket_5"] == 4 or user_choice_dict["bucket_8"] == 4:
        print(Terminal().green(f"\nCongratulations! You solved the puzzle in {turns} turns!\n"))
        break

    elif user_choice == "Fill the bucket":
        while True:
            # Get sub-choice for filling specific bucket
            sub_choice = get_sub_user_choice()

            if sub_choice == "Bucket 3":
                user_choice_dict["bucket_3"] = 3
                print(print_buckets_function(user_choice_dict["bucket_3"], user_choice_dict["bucket_5"], user_choice_dict["bucket_8"]))

            elif sub_choice == "Bucket 5":
                user_choice_dict["bucket_5"] = 5
                print(print_buckets_function(user_choice_dict["bucket_3"], user_choice_dict["bucket_5"], user_choice_dict["bucket_8"]))

            elif sub_choice == "Bucket 8":
                user_choice_dict["bucket_8"] = 8
                print(print_buckets_function(user_choice_dict["bucket_3"], user_choice_dict["bucket_5"], user_choice_dict["bucket_8"]))

            elif sub_choice == "Back":
                # Break out of the sub-choice loop and go back to the main menu
                break

    elif user_choice == "Empty the bucket":
        while True:
            # Get sub-choice for emptying specific bucket
            sub_choice = get_sub_user_choice()

            if sub_choice == "Bucket 3":
                user_choice_dict["bucket_3"] = 0
                print(print_buckets_function(user_choice_dict["bucket_3"], user_choice_dict["bucket_5"], user_choice_dict["bucket_8"]))

            elif sub_choice == "Bucket 5":
                user_choice_dict["bucket_5"] = 0
                print(print_buckets_function(user_choice_dict["bucket_3"], user_choice_dict["bucket_5"], user_choice_dict["bucket_8"]))

            elif sub_choice == "Bucket 8":
                user_choice_dict["bucket_8"] = 0
                print(print_buckets_function(user_choice_dict["bucket_3"], user_choice_dict["bucket_5"], user_choice_dict["bucket_8"]))

            elif sub_choice == "Back":
                # Break out of the sub-choice loop and go back to the main menu
                break

    elif user_choice == "Pour one bucket into another":
        # while True:
            # Get sub-choice for pouring specific bucket
        sub_choice = get_sub_user_choice()

        while True:
            if sub_choice == "Bucket 3":
                sub_dest_choice = get_destination_bucket_choice()
                pour_bucket(sub_choice,sub_dest_choice)
                break
                

            elif sub_choice == "Bucket 5":
                sub_dest_choice = get_destination_bucket_choice()
                pour_bucket(sub_choice,sub_dest_choice)
                break

            elif sub_choice == "Bucket 8":
                sub_dest_choice = get_destination_bucket_choice()
                pour_bucket(sub_choice,sub_dest_choice)
                break

            elif sub_choice == "Back":
                break

