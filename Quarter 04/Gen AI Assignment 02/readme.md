# What is cloud-native computing? What are the differences between cloud and edge computing in AI? Which is more suitable for AI applications, and why? How can both be effectively utilized together?

**Cloud-native computing** involves running and developing applications on cloud i.e. internet.
**Difference bw cloud and edge computing** 
- In cloud computing data is processed over internet which involves latency, however it is cost effective and easily scalable. This also provide more computational power with as you go model which make it cost effective.
- Whereas in edge computing data is processed neat the data center or end user which remove latency and it can be used for some local computing task efficiently and also handle privacy issues more efficiently. However it has low computational power and not easily scalable.
**more suitable for AI applications**
As we have seen both have their pros and cons so to use a single one may not fulfill the job, instead we can use both of these in our AI model.
As we discussed cloud computing has more computational power and it has "pay as we go" feature also, so we can use cloud computing for training our AI models as it requires more computational power. 
Whereas for inference we can use edge computing service , as it is suitable for simple tasks and it also reduce latency.



# Write a note on any two of the following AI stacks:
        1. Local AI Microservices Development Stack
        2. Serverless with OpenAI APIs
        3. Custom AI Stack with PyTorch, Llama, and Kubernetes
        4. OpenAI GPTs Stack with Conversational Interfaces
        5. The Rise of Agentic AI: A New Era of Intelligent Collaboration
        6. The Next Wave of AI: Humanoids and Physical AI


## Serverless with OpenAI APIs
This stack is useful where we want to use the capabilities of already designed models like Chat GPT.
In this stack we use openai chat completion and assistant api with microservices using fastapi framework, postgresSQL, KAFKA, docker and kubernetes powered serverless Azure container app.
this stack is useful for small business. 


## Custom AI Stack with PyTorch, Llama, and Kubernetes
This stack is useful for organization which require their own trained model.
In this stack open source model like LlaMA is fine tuned using pytorch according to business needs and using kubernetes deployed on cloud with other microservices. This stack also leverage NIM by Nvidia for deployment of AI Model.