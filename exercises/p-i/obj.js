const Tester = {

    Name: "tester",
    
    Age: 54,
    
    Id: 125468
    
    };

// console.log(Object.keys(Tester));

TesterArr = [

    {
    
    Name: 'tester one',
    
    Age: 20,
    
    Id: 6548
    
    },
    
    {
    
    Name: 'tester two',
    
    Age: 20,
    
    Id: 456488
    
    },
    
    {
    
    Name: 'tester three',
    
    Age: 20,
    
    Id: 73453
    
    },
    
    ]

    // how would you retrieve the object by id?

for (i = 0; i < TesterArr.length; i ++) {
console.log(`array object names: ${TesterArr[i].Name}`)

if (TesterArr[i].Id = 73453)
    console.log(`your object by Id is: ${TesterArr[i]}`)
}