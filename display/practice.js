// const display = () =>
// {
//    var line = "hey hai how are you?";
//    const rel = line.split(' ')
//   const upper =  rel.map(i =>i[0].toUpperCase() + i.substring(1) ).join(' ')
//   console.log(upper) 
// }


// let  line ="hi macha how are you"
// // const display = (line) =>line.split(' ').map(i=>i.substring(0,2).toUpperCase()+i.substring(2)).join(' ');
// const display = (line) =>line.split(' ').map(i=>i[0].toUpperCase()+i.substr(1)).join(' ');
// console.log(display(line))

// const display = (str) => str.split(' ').map(i=>i.slice(0,1).toUpperCase()+i.slice(1)).join(' ')
/*here substring,substr,slice will do the same work

in slice if the the start index is grater then end index it return empty string
where as the subctring will retrun a sub string


*/

////////////////////////////////

// let file = "name.jpg"
// const check = (f) =>f.indexOf('.jpg')
// console.log(check(file))

////////////////////////


/*
write a javascript program to chech whether the given two numbers 
sum is equal to 100 if not return false

*/

// const check = (a,b) => a === 100 || b === 100 || (a+b)===100;
// console.log(check(10,9))

////////////////////////////////

/*
write a program to return the file extension

const display = (str) => str.slice(str.lastIndexOf('.'));

console.log(display("hello.html.js"))

const show = (str) =>str.substr(-4)
console.log(show("hello.html"))
*/

/////////////////////////////////////

/*
checking the performance of substr,substring,slice

here in the slice method if the start index is grater 
then end index or equal to 
it return empty index;
i forget to write that silce can return an entire array,
where as the substr and sunstring can not return the entire the 
entire the array it reads only string

as same as slice the substring will not return any string 
if the start index and end index is same 
and if the start index is grater the end index the sub string will 
return the value

and finally comming to substr function in this function 
it will return exactly what we provide i.e if the start index and
end index is grater then or equal to end index it will return 
a strign
overcomming drabacks of slice and substring...substr comes into picture...

*/

// const show = (str) => str.substr(str.lastIndexOf('.'));


/*
okey now we will discuss about chatAt(),charCodeAt()and fromCharCode() methods

here the method chatAt() will return the character present in the index of a string;

and comming to chatCodeAt() method it will return the ascii value of the character

finally fromCharCode() method  it will return the chat basing on the asci value
*/

//////////////////////////////////////
/*
wirte a program to reverse the given string
 const display=(str) => str.split('').map(i=>String.fromCharCode(i.charCodeAt(i.charAt(0))+1)).join('')
 console.log(display("abcdef")) 
*/

// date = () =>
// {
//    let date = new Date();
//    let day = date.getDate();
//    let mon = date.getMonth()+1;
//    let year = date.getFullYear()
//    let time = date.getMinutes()
//    console.log(`dd/mm/yyy:${day}/${mon}/${year}/${time}`)
// }

// date()

/**
 write a program to creare a new string from a given string 
 taking first three char and last three charactes and join together
 if the stringlength is lessthan 3 or more the original string sould be
 returned

 const pro = (str) =>
{
   
   if(str.length >= 7)
   {
      const newstr = str.substr(0,3)+str.substr(-3);
    
      return newstr;
   }
   else{
       
      return str;
   }

}

const pro = (ste) => ste.length <3 ?ste : ste.substr(0,3)+ste.substr(-3)

console.log(pro("mahdssesh"))
console.log(pro("mahd"))
console.log(pro("mahdssesh123"))
console.log(pro("ma"))

 */

 /**
  * 
  * write a program to extract the first half of the given string
  * 
  * const s = (str) => str.substr(0,(str.length/2))

  console.log(s("mahesh2"))
  console.log(s("mahi"))
  console.log(s("12345432"))
  */



  /**
   * write a program to concatnate two strings except their first character
   *  const s = (str1,str2) =>str1.substr(1)+str2.substr(1);
  console.log(s("mahesh","suresh")) 
   */

   /**
    * write a program to find out which number is nearst to 100 by giving two values
    *    const d = (a,b) =>(100-a)<(100-b)?a:b
    */

    /**
     * write a program to check a given strign constains 2 or 4 occ
     * occurences if a specified if a specified character
     *     const countChar = (str,char)=>str.split('').filter(i=>i===char).length;
    const rel = (str,char) => countChar(str,char) >=2 && countChar(str,char) <= 4;
    console.log(rel("hooooooo",'o'));
    console.log(rel("hooo","o"));
    console.log(rel("hoo",'o'));
     */


     /**
      * 
      * program to write the given year is a leap year or not
      * const check = (r) =>{
            if((r%4)===0) return console.log("yes the given year is a leap year")
            return  console.log("the given number is not a leap year");
        }

        check(2001)
      * 
      */





 

  





