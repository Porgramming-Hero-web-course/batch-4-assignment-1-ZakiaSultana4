
#  How to Handle Asynchronous Operations Using async/await over Callback/Promise in TypeScript-->

- We can Handle Asynchronous Operations by Using Callback or Promise and async/await.Those 2 approch async await is better than Callback or Promise.





## The Problem with Callbacks

- The Callback can easily solve the Callback hell.But if our code become leager then we have to write so many Callback function to load the callback hell which is very bad practice.Because we cannot understand the code in future.so it is better to avoid the callback in leage application.

## The Promise Solution

- In large code base we can chaining up our code by using .then() to handle asychronous operations .But if our application become leager it will also very messy and complex to use .then() for every asychronous operations.
## Async/Await – A Better Way

- Async/Await is the better Solution to handle asychronous operations insted of using callback and Problem.It gives us better code readability and handling error.



## Example of async/await

```bash
function fetchPost(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post fetched successfully!");
    }, 2000);
  });
 }

async function getPost(): Promise<void> {
  try {
    const result = await fetchData("https://localhost:5000/posts");
    console.log(result); 
  } catch (error) {
    console.error("Error fetching post data:", error);
  }
}

getPost();

```


## Why async/await is Superior

- Code Readability: The code looks synchronous, which makes it easier to debug.
- Error Handling: With try/catch blocks, handling errors becomes much cleaner than handling errors with .catch() in Promises
- Control Flow: You can await multiple async calls in sequence or run them in parallel without nesting callbacks.


