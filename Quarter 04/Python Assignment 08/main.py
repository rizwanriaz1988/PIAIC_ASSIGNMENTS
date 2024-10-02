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


bucket_three_output = bucket_three(2)
bucket_five_output = bucket_five(4)
bucket_eight_output = bucket_eight(2)

max_size = max(len(bucket_three_output), len(bucket_five_output), len(bucket_eight_output))

# print(bucket_three_output)
# print(bucket_five_output)
# print(len(bucket_eight_output))

while len(bucket_three_output) < max_size:
    bucket_three_output.insert(0, " " )
while len(bucket_five_output) < max_size:
    bucket_five_output.insert(0, " " )
while len(bucket_eight_output) < max_size:
    bucket_eight_output.insert(0, " " )
for i in range(max_size):
    print(bucket_eight_output[i] + "     "+ bucket_five_output[i] + "     "+ bucket_three_output[i])