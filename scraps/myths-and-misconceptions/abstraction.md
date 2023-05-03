# Misconception: Abstraction Is About Hiding Details From the User

A good abstraction hides details from the *implementer*. Poor abstractions hide from the user what they really need to know, while
forcing the implementer to know about the all the messy details of the users' needs.

It is precisely the hiding of details from the implementer that makes abstractions reusable. If the implementation knows about the details of a specific use case, that implies it is coupled to that use case and can't easily be repurposed.