#======================== 01. Age Assignments Based on the Riddle ==================================

# Problem Statement: Write a program to solve this age-related riddle! Anton, Beth, Chen, Drew, and Ethan are all friends. Their ages are as follows:
# Anton is 21 years old.
# Beth is 6 years older than Anton.
# Chen is 20 years older than Beth.
# Drew is as old as Chen's age plus Anton's age.
# Ethan is the same age as Chen.

Anton = 21
Beth = Anton + 6
Chen = Beth + 20
Drew = Chen + Anton
Ethan = Chen

print(f"Anton Age = {Anton} \nBeth Age = {Beth} \nChen Age = {Chen} \nDrew Age = {Drew} \nEthan Age = {Ethan}")



# ========================= 02. Formatted String Interpolation ================================

# Task: Given the variables name, age, and city, use f-strings to construct a sentence that describes a person using these variables.
# name:str = "Alice"
# age:int = 30
# city:str = "New York"
# Instructions: Use an f-string to create a sentence in the format: "Alice is 30 years old and lives in New York."

name = "Alice"
age = 30
city = "New York"

print(f"{name} is {age} years old and lives in {city}.")


# ========================= 03. String Manipulation ==========================================

# Task: Given the string s, use string methods to:
# Capitalize the first letter: make the first character uppercase and the rest of the string lowercase.
# Convert to uppercase: change all characters in the string to uppercase.
# Convert to lowercase: change all characters in the string to lowercase.
# s:str = "hElLo WoRlD"

s = "hElLo WoRlD"

print(s.capitalize())
print(s.upper())
print(s.lower())


# ========================= 04. Substring Search ==============================================

# Task: Given the string s, use string methods to:
# Find the index of "fox": get the starting index of the substring "fox". If "fox" is not found, it should return -1.
# Count occurrences of "the": Use the string's built-in method to count how many times the substring "the" appears in the string.
# s:str ="the quick brown fox jumps over the lazy dog"

s = "the quick brown fox jumps over the lazy dog"

print(f"Index of 'fox' = {s.find('fox')}")
print(f"Count of 'the' = {s.count("the")}")	


# ========================= 05. String Replacement =============================================

# Task: Given the string s, use string methods to:
# Replace "Python" with "Java": substitute "Python" with "Java".
# s:str ="I love programming in Python"

s = "I love programming in Python"

print(s.replace("Python", "Java"))



# ========================= 06. String Splitting and Joining ===================================

# Task: Given the string s, use string methods to:
# Split into a list: break the string into a list of substrings based on the delimiter ,.
# Join with spaces: combine the list of substrings back into a single string, with each element separated by a space.
# s:str ="apple,banana,cherry,dates"

s = "apple,banana,cherry,dates"

print(s.split(","))
print(" ".join(s.split(",")))



# ========================= 07. String Stripping and Justifying ================================

# Task: Given the string s, use string methods to:
# Remove leading/trailing spaces: remove all leading and trailing whitespace characters from the string.
# Left justify with '*': left justify the string within a field of width 20, using * as the fill character.
# Right justify with '*': right justify the string within a field of width 20, using * as the fill character.
# s:str ="   Python is fun!   "

s = "   Python is fun!   "
stripped = s.strip()
print(stripped)
print(stripped.ljust(20, "*"))
print(stripped.rjust(20, "*"))


# ========================= 08. Convert an integer to its binary representation ================

# Task: Given an integer num
# Obtain the binary representation of num
# num:int = 45

num = 45
print(bin(num))



# ========================= 09. Calculate Powers of Numbers.====================================

# Task: Given two integers base and exponent
# Compute base raised to the power of exponent.
# base:int = 3
# exponent:int = 4

base = 3
exponent = 4
print(pow(base, exponent))



# ========================= 10. Round floating-point numbers to the nearest integer. ============

# Task: Given a floating-point number value
# Round value to the nearest integer.
# Round value to two decimal places.
# value:float = 12.34567

value = 12.34567
print(round(value))
print(round(value, 2))