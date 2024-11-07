
{
    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }
    
    const person = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    
    // console.log(getProperty(person, "name"));  
    // console.log(getProperty(person, "age")); 
}