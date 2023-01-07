# Brainiac
- Brainiac is an AI Based chatbot for analyzing and reducing the mental stress of a person, which could drastically bring down the number of suicides per year
- The existing solutions like phone based helpline systems are completely limited by the number of human resources available at hand and sometimes may not be reachable to everyone, 
  also other solutions like consulting a psychiatrist can be affected by the financial situation of a person.
-  The solution which we propose is the usage of smartphones to analyze the mental status of the person and alert the concerned parties if necessary .
-  Nowadays everyone has a smartphone at their hand and delves into them for the most part of the day, so we can get better at reaching a person’s feelings if we can get through to him with their smartphone. 
-  The solution includes a chatbot hybrid application that the person uses to convey his mood and the application analyzes the degree of mental health of a person by taking into account the sentiment of the words entered and 
   intelligently maps the context of the words to predict if they are really out of control. 
-  It would try to restore the mental health of the person by recommending various articles, music, videos or whatever type of media the person would like to interact with. 
-  However if the situation goes out of control, the concerned parties would automatically be alerted.

---
# Architecture
- We would prefer going with microservices based architecture for scalability concerns. 
- The microservice architecture includes spring boot based backend service for user management of the application and Django web server for dealing with the AI part (ie. VADER Algorithm for sentiment analysis)
-  As for the front end of the application we plan to use react native as we could support multiple mobile platforms (IOS and Android) as well as web interface, giving us the opportunity to get maximal coverage. 
- For deployment we plan to use Kubernetes as it is the most reliable deployment options which supports phased rollouts
---
Key Words: Brainiac, AI Based ChatBot System, Real Time Text Stream Analysis, Valence Aware Dictionary and sEntiment Reasoner (VADER Algorithm), Natural Language Processing.
