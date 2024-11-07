
function validateKeys<T extends object>(obj:T,keys:(keyof T)[]):boolean {
    let isValid =true;
    keys.forEach(key=>{
        if (!(key in obj)) {
            isValid=false
        }
    })
    return isValid
}

const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
};

// console.log(validateKeys(user, ["name", "age"])); 