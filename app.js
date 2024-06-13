console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {

  if (count < 0) {
    console.log("number is negative")
  }

  for (let i = 0; i <= count; i++) {
    if ( i % 2 != 0) {
      console.log(i)
    }
  }
}

  
printOdds(-100);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkAge(userName, age) {
  const aboveSixteen = "Congrats " + userName + ", you can drive!"
  const belowSixteen = "Sorry " + userName + ", but you need to wait until you're 16."

  if (age < 16) {
    return console.log(belowSixteen);
  } else 
    return console.log(aboveSixteen);
}

checkAge("Morri", 15);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function coordsLocation(x,y) {
  if (x == 0 && y != 0) {
    console.log("(" +x +","+ y+ ")" + " is on the y axis")
  } else if (x != 0 && y == 0) {
    console.log("(" +x +","+ y+ ")"+ " is on the x axis")
  } else if (x > 0 && y > 0) {
    console.log("(" +x +","+ y+ ")" + " is on Quadrant 1")
  } else if (x > 0 && y < 0) {
    console.log("(" +x +","+ y+ ")" + " is on Quadrant 2")
  } else if (x < 0 && y < 0) {
    console.log("(" +x +","+ y+ ")" + " is on Quadrant 3")
  } else if (x < 0 && y > 0) {
    console.log("(" +x +","+ y+ ")" + " is on Quadrant 4")
  }
}

coordsLocation(-1,5)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(a,b,c) {
  
  if (a+b <= c || b+c <= a || c+a <= b) {
    console.log("Invalid Triangle")
  } else if ( a == b && b == c){
    console.log("Equilateral Triangle")
  } else if ( a == b || b == c){
    console.log("Isosceles Triangle")
  } else 
    console.log("Scalene")

}
triangleType(15,34,32);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
