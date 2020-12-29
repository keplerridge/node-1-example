let person = {
    name: 'ben',
    job: 'mentor',
    age: 28
}

person.name = 'Ben'

// console.log(person)

// console.log(person.name)

function greeting(){
    return person.age
}

console.log(greeting())