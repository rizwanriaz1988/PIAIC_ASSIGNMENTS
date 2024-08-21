import random
import questionary
from blessed import Terminal


# Welcome message
print(Terminal().blue("\nWelcome to Higher or Lower!"))
print(Terminal().blue("---------------------------"))

points: int = 0
start_num: int = 1
end_num: int = 100
rounds: int = 10

def get_user_num(start: int, end: int,comp_num: int):
        user_num: int = random.randint(start, end)
        while user_num == comp_num:
            user_num = random.randint(start, end)
        return user_num

# As rounds are 5
for i in range(1, rounds + 1):
    print(Terminal().yellow("==========="))
    print(Terminal().yellow(f"Round: {i}"))
    print(Terminal().yellow("==========="))

    # get random number
    comp_num: int = random.randint(start_num, end_num)
    # function call to check that both are not equal
    user_num = get_user_num(start_num, end_num,comp_num)

    print(f"Your number is {user_num}")

    # get user choices
    def get_user_choice():
        choice = questionary.select(
            "Do you think your number is higher or lower than the computer's?:",
            choices=[
                "higher",
                "lower",
            ]
        ).ask()
        return choice
    user_choice = get_user_choice()

    # check if user is right or wrong
    if user_choice == "higher" and user_num > comp_num:
        points += 1
        print(Terminal().green(f"You were right! The computer's number was {comp_num}."))
        print(Terminal().green(f"Your score is: {points}"))

    elif user_choice == "lower" and user_num < comp_num:
        points += 1
        print(Terminal().green(f"You were right! The computer's number was {comp_num}."))
        print(Terminal().green(f"Your score is: {points}"))

    else:
        print(Terminal().red(f"Aww, that's incorrect. The computer's number was {comp_num}."))
        print(Terminal().red(f"Your score is: {points}"))


print("Thanks for playing!")