
let employee1 = {

    name: "Greg",
    lastName: "Mossa",
    age: 45,
    companies_worked: ["Amazon", "Walmart", "Shoppers", "Telus"]

}

let employee2 = {

    name: "Kevin",
    lastName: "Rezza",
    age: 47,
    companies_worked: ["Mobile", "Telus", "Samsung"]

}



for (let x in employee1.companies_worked)
{console.log(employee1.name   + " " + employee1.lastName + " "   +   
     employee1.companies_worked[x])};


     for (let x in employee2.companies_worked)
     {console.log(employee2.name + " " + employee2.lastName + " "  + 
          employee2.companies_worked[x])};  
          
      



        function compareEmployees (employee1, employee2) {
            if(employee1.companies_worked.length > employee2.companies_worked.length)
                return employee1.name
            else
                return employee2.name
            }

            console.log(compareEmployees(employee1, employee2))