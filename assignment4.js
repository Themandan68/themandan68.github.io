/*a. Arr1: Ten random integers between 100 and 1000.
b. Arr2: Ten random integers between -200 and 200.
c. Arr3: Five objects, each containing the following properties: fname, lname, title, suffix, age. 
d. Arr4: let years = [-100, 0, 100, 1900, 1904, 2000];
e. Arr5: let r = [1, 4, 5, 7]
f. Arr6: let distances = [2, 4, 6, 8, 10]*/

let rando = (start, max) => (
  (Math.floor(Math.random() * (max-start)) + start)
)

let arr1 =[rando(100,1000),rando(100,1000),rando(100,1000),rando(100,1000),rando(100,1000),rando(100,1000),rando(100,1000),rando(100,1000),rando(100,1000),rando(100,1000)]

let arr2 = [rando(-200,200),rando(-200,200),rando(-200,200),rando(-200,200),rando(-200,200),rando(-200,200),rando(-200,200),rando(-200,200),rando(-200,200),rando(-200,200)]


//let arr3
                          
var years = [-100, 0, 100, 1900, 1904, 2000]

let r = [1, 4, 5, 7]

let distances = [2, 4, 6, 8, 10]

let Pythagorean = (x, y) => (
  (Math.sqrt((x*x)+(y*y)))
)

let quad = (a,b,c) => (
((-b(Math.sqrt(4*(a*c))))/2*a)
)

let sphereVol = (r) => (
  (4/3)*(Math.PI*(Math.pow(r,3)))
)//4/3πr3

let fToK = (f) => (
(((f-32)/1.8) +273.15)
)//(Fahrenheit - 32) / 1.8 + 273.15

let weird = (val) => (
Math.atan(Math.PI + val)
)

let sumNSq = (n) => (n+n*n)

function isLeapYear(year)  {
if((year%4 == 0) && (year%100 != 0) || (year%4 != 0) && (year%100 == 0) && (year%400 == 0) ){
  return true
}else{
  return false
}
}

/*
a. Sum of all leapyears in Arr4, years 
b. Full names of all people in Arr3
c. Dot product of Arr1, Arr2
d. Sum of all even numbers in Arr2
e. Volumes of 4 spheres with 4 radii in Arr5
f. Time it takes or objects to fall the distances in Arr6
g. Sum of the arctans of values in r (Arr5)
*/
function searchYear(){
  let sum
  let years = [-100, 0, 100, 1900, 1904, 2000]
  for(let i = 0; i< 6 ; i++){
   
    if(this.isLeapYear(years[i])){
      sum += years[i]
    }
  }
  return sum
}
let sum1 = searchYear()
//If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
//If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
//If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
//The year is a leap year (it has 366 days).
//The year is not a leap year (it has 365 days).
/*
a. Length of hypotenuse given two sides of a right triangle (Pythagorean Theorem)
b. Roots of quadratic equation (include complex roots) given a, b, c coefficients
c. Volume of a sphere given radius
d. Degrees Kelvin, given degrees Fahrenheit
e. Arctan of “pi” plus another value (in radians) 
f. The sum of a number and its square, i.e. n + n * n 
g. isleapyear(year) returns true if year is a leapyear
h. timeFallen(distance) returns time in seconds that an object takes to fall a given distance (at sea 
level on planet Earth)
*/

let load = document.getElementById("loadjson")
  load.addEventListener("click", loadJson);
let prior = document.getElementById("loadpriorcountry")
  prior.addEventListener("click", loadPriorCountry);
let next =document.getElementById("loadnextcountry")
  next.addEventListener("click", loadNextCountry);

let country = 0
var json
function loadJson() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange 
    = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("coviddata").innerHTML 
            = "JSON data loaded.";
          json = JSON.parse(this.responseText);
        }
      };
  xhttp.open("GET", "https://api.covid19api.com/summary", true);
  xhttp.send();
}

function loadPriorCountry () {
  country--
  if (country < 0) 
    country = 0
  document.getElementById("coviddata").innerHTML 
            = json.Countries[country].Country
            + ", " 
            + json.Countries[country].TotalDeaths
}

function loadNextCountry () {
  country++
  if (country > json.Countries.length - 1) 
    country = json.Countries.length - 1
  document.getElementById("coviddata").innerHTML 
            = json.Countries[country].Country
            + ", " 
            + json.Countries[country].TotalDeaths
}

let people = [
  {fname: "Jane", lname: "Doe", title: "Dr.", suffix: "IV", age: 22}, 
  {fname: "John", lname: "Doe", title: "Mr.", suffix: "Jr.", age: 18}, 
  {fname: "Sally", lname: "Jenkins", title: "Mrs.", suffix: "", age: 20}, 
  {fname: "Gino", lname: "Vitteri", title: "", suffix: "", age: 16}, 
  {fname: "Lisa", lname: "Simpson", title: "", suffix: "", age: 12}, 
]
function q (e) {return e.fname}

people
  .filter(obj => obj.age < 18)
  .map(obj => 18 - obj.age)
  .reduce((acc,cv) => acc + cv)

