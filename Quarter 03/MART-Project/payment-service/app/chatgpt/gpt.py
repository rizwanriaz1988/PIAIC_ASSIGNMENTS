# from openai import OpenAI
# from dotenv import load_dotenv, find_dotenv

# import os
# import json

# from app.api.crud import add_product_rating_func
# from app.db import settings

# from openai.types.chat.chat_completion import ChatCompletionMessage, ChatCompletion
# # from openai.types.chat.chat_completion import ChatCompletionMessageParam, ChatCompletionMessageParam


# client : OpenAI = OpenAI(api_key=str(settings.OPENAI_API_KEY))


# def run_conversation(main_request: str)->str:
#     # Step 1: send the conversation and available functions to the model
#     messages = [{"role": "user", "content": main_request}]
#     tools = [
#         {
#             "type": "function",
#             "function": {
#                 "name": "add_product_rating_func",
#                 "description": "Add the given product rating to the product database",
#                 "parameters": {
#                     "type": "object",
#                     "properties": {
#                         "rating": {
#                             "type": "string",
#                             "description": "The rating of the product like 2 , 15 , 68 etc",
#                         },
#                         "comment": {"type": "string", "description": "The comment about the product like good , bad , ok etc"},
#                     },
#                     "required": ["rating"],
#                 },
#             },
#         }
#     ]

#     # First Request
#     response: ChatCompletion = client.chat.completions.create(
#         model="gpt-3.5-turbo-1106",
#         messages=messages,
#         tools=tools,
#         tool_choice="auto",  # auto is default, but we'll be explicit
#     )
#     response_message: ChatCompletionMessage = response.choices[0].message
#     print("* First Response: ", dict(response_message))

#     tool_calls = response_message.tool_calls
#     print("* First Reponse Tool Calls: ", list(tool_calls))

#     # Step 2: check if the model wanted to call a function
#     if tool_calls:
#         # Step 3: call the function
#         # Note: the JSON response may not always be valid; be sure to handle errors
#         available_functions = {
#             "add_product_rating_func": add_product_rating_func,
#         }  # only one function in this example, but you can have multiple
        
#         messages.append(response_message)  # extend conversation with assistant's reply
        
#         # Step 4: send the info for each function call and function response to the model
#         for tool_call in tool_calls:
#             function_name = tool_call.function.name
#             function_to_call = available_functions[function_name]
#             function_args = json.loads(tool_call.function.arguments)
#             function_response = function_to_call(
#                 product_rating=function_args.get("rating")

#             )
#             messages.append(
#                 {
#                     "tool_call_id": tool_call.id,
#                     "role": "tool",
#                     "name": function_name,
#                     "content": function_response,
#                 }
#             )  # extend conversation with function response
#         print("* Second Request Messages: ", list(messages))
#         second_response: ChatCompletion = client.chat.completions.create(
#             model="gpt-3.5-turbo-1106",
#             messages=messages,
#         )  # get a new response from the model where it can see the function response
#         print("* Second Response: ", dict(second_response))
#         return second_response.choices[0].message.content