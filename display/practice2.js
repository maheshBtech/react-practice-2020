/**
 * write a program to find the first not repeted character..
 * const repeat = (str) => str.split('').filter((i,index,arr)=>arr.filter(flt =>flt === i).length === 1)
console.log(repeat("absab"))
 */

 /**
  * write a program which return a character by taking the 
  * ascii value
  * const ch = (n) =>String.fromCharCode(n)
  */


 /**
  * 
  * write a program to retun the total count by taking the 
  * array of values
  * 
  * const getChar = (n) => n.reduce((total,game) =>
{
    const [x,y] = game.split(":");
    const rel = x > y ? 3 : x === y ? 1 : 0
    total +=rel;
    return total
},0)

console.log(getChar(["3:4","1:1","3:1"])) 
  */

  /**
   * array exercies...
   * 
   * write a program that return an income average of all the people
   * 
   * const rel = (people) =>people.reduce((total,person) =>
{
    total +=parseInt(person.salary);
    return  (total/people.length)

},0)

console.log(rel(people))
   * 
   */

   /**
    * who are the people that older than 30?
    * 
    * const person = [ { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' }]
const rel = (people) =>people.filter(person =>((new Date().getFullYear())-(new Date(person.DOB).getFullYear()) ) > 30)

// const rell = (person) =>person.map(i=>console.log(new Date(i.DOB).getFullYear()))


console.log(rel(people))
    * 
    */

    /**
     * write a program to get the people full name
     * const rel = (people) =>people.map(i =>({... i, FullName: `${i.firstName} ${i.lastName}` }))
console.log(rel(people))
     */

     /**
      * order the people by their age
      * const rel = (people) =>people.sort((a,b) =>(new Date(a.DOB).getFullYear()) > (new Date(b.DOB).getFullYear())?-1:1 )
console.log(rel(people))
      */

     /**
      * how many people are there in each department
      * const rel = (people) =>people.reduce((total,person) =>({...total, [person.department]:total[person.department] +1 ||1 }),{} )
console.log(rel(people))


 const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];
      */

      /**
       * const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];
       * 
       * get the request of order for the customer with the id 234 not been declared
       * orders.filter(i => i.customerId === '234' && !i.delivered)
       * 
       */

       /**
        * have any product with an id = 123 been sold
        * orderes.some(i =>i.id === 123)
        * how many products are there with the peoduct id=123
        * orders.reduce((acc,order)=>acc+order.items.reduce((acc,i)=> acc+(i.productId === "123"),0),0)
        */

