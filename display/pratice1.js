
/**
 * program to return the number of even values in the given array
 * const nums = [1,2,3,4,12,15,18,20];
const rel = (nums)=>nums.filter(i =>(i%2) === 0).length;
console.log(rel(nums));
 */

 /**
  * program to return that the number if even values before the 
  * given values
  *  const c = (n) => n%2 === 0;

 const rel = (g) =>{
     let evenArray = []
     for(i=1;i<=g;i++)
     {
         if(c(i))
         {
            evenArray.push(i);
         }
     }
     return evenArray.length;   
 }

 console.log(rel(10))
  */

  /**
   * write a program  to check whether the given num is true or false
   * const num = (l) => {
       for(i=0;i<l.length;i+=1)
       {
           if(l[i]>l[i+1]) {
               return false
           }
       }
            return true
   }
   console.log(num([1,2,3,4,5,6,7]));
   console.log(num([3.3,5,1,3]))
   * 
   */

 /**
  * 
  * write a program to get the largest even number from an array of integer
  * const lrg = (n) =>Math.max(...n.filter(i=>(i%2) === 0));
 console.log(lrg([2,3,4,5,6,10,12]))
  console.log(lrg([2,3,4,5,6,10,12,50]))
   console.log(lrg([0]))
  */


 /**
  * write a program to replase the first digit in a given string 
  * with $character
  *  const replace = (str,rep) =>str.replace(rep,'000')
 console.log(replace("1mahesh",'M'))
 console.log(replace("subbu2",'S'))
  */


  /**
   * 
   * write a program to check whether the given two objects 
   * consists of same properties or not if the two ojects are 
   * same then return true if not return false.
   * 
   *   let a = {a:1,b:2,c:3}
        let b ={a:1,b:2,c:3}
         let c ={d:1,b:2,c:3}

        const rel=(a,b) =>Object.keys(a).every(key =>b[key])
        console.log(rel(a,b))
        console.log(rel(a,c))
   */



   /**
    * 
    * write a program to convert acomma seperated values string
    * to a 2D array .A new line indicates a new row in the array
    *  str =  `abc,abc,abc
 abc,abc,abc
 abc,abc,abc`
      const display = (str) =>str.split('\n').map(i=>i.split(','));

      console.log(display(str))
    */


    /**
     * wirte a program to gnerate a random hexadecimal color code
     *    // console.log(Math.ceil(Math.random()*16).toString(16))
        let a = [1,2,3,4,5,23,10,11,44]

        const random = () =>Math.floor( Math.random() * 16 ). toString(16)
        const hex = () =>'#'+Array.from({length:6}).map(random).join('')

     */


     /**
      * write a program to retuns true if  the provided predicates functuions return true
      * for all elemnts in a collections,false otherwise.
      *  let a = [1,2,3,4,5]
       const x = (a)=>
       {
           for(i=0;i<a.length;i++)
              {
                  if(a[i]<0) return false
              }
              return true
       }

       console.log(x(a))
      */

      /**
       * write a program to return a alphabetical order string by taking all a string.
       *  const fun = (str)=>str.split('').sort().join('');
        console.log(fun("mahesh"))
         const fun = (str)=>str.split('').sort((a,b) => a > b ? 1 :-1).join('');
        console.log(fun("abcdesfghijklmnopqrstuvwxyz"))
       */


       /**
        * write a javascript program that accepts a function
        * as a parameter and that count the number of vowels with in the string
        * const find = (str) =>
       {
            let vowels = ['a','e','i','o','u']
            const rel =  str.split('').filter(i => vowels.indexOf(i) > -1).length
            return rel
       }
       console.log(find("mahesh"))
        */

        /**
         * write a program to convert an anount to coins 
         * 
         * 
const rel = (n ,c) =>{
    const coins = []
    for(let i=0 ; i<c.length ; i++)
    {
        let cn = Math.floor(n/c[i])
        for(let j = 0 ; j < cn;j++)
        {
            coins.push(c[i]);
        }
        n -= c[i] * cn;
    }
    return coins
}
// console.log(rel(46,[25,10,5,2,1]))
         */


/**
 * 
 * write a program to extract unique character from a string
 * 
 *      const rel  = (str) => str.split('').filter((i,index,arr) =>arr.slice(index+1).indexOf(i) === -1)
       console.log(rel("aabbccdd"))

        const dis = (str) =>{
//     let val = str.split('');
//     let newContainer = [];
//     for(i=0;i<val.length;i++)
//     {
//         if(val[i] === val[i+1])
//         {
//             continue;
//         }
//         else{
//             newContainer.push(val[i])
//         } 
//     }
//     return newContainer
// }

 const r = (str) =>[...new Set(str.split(''))]
        console.log(r("aabbcc"))
 */
 