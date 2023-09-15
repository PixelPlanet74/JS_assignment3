// Chapter no:11 (Arrays)

// Q no:1
// var student = [];

// Q no:2
// var students = [];

// Q no:3
// var strings = ["string1", "string2", "string3"];

// Q no:4
// var numbers = [123, 999, 111];

// Q no:5
// var boolean = [true, false];

// Q no:6
// var mixed = ["string", 111, true];

// Q no:7
// document.write("Qualification")
// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<br>")
// document.write("<br>")
// document.write("<br>1) " + " " + qualification[0]);
// document.write("<br>2) " + " " + qualification[1]);
// document.write("<br>3) " + " " + qualification[2]);
// document.write("<br>4) " + " " + qualification[3]);
// document.write("<br>5) " + " " + qualification[4]);
// document.write("<br>6) " + " " + qualification[5]);
// document.write("<br>7) " + " " + qualification[6]);
// document.write("<br>8) " + " " + qualification[7]);


// Q no:8
// var stdName = ["Abdullah", "Hadi", "Yahya"];
// var stdScore = [343, 342, 482];
// var totalMarks = 500;
// var percentage1 = stdScore[0] * 100 / totalMarks;
// var percentage2 = stdScore[1] * 100 / totalMarks;
// var percentage3 = stdScore[2] * 100 / totalMarks;
// document.write("<br>Score of " + stdName[0] + " is " + stdScore[0] + ". Percentage: " + percentage1);
// document.write("<br>Score of " + stdName[1] + " is " + stdScore[1] + ". Percentage: " + percentage2);
// document.write("<br>Score of " + stdName[2] + " is " + stdScore[2] + ". Percentage: " + percentage3);

// Q no:9

// var colorName = ["red", "yellow", "green", "blue", "black"];
// a
// var usrPrmpt = prompt("What color do you want to add");
// if (usrPrmpt === "red" || usrPrmpt === "yellow" || usrPrmpt === "green" || usrPrmpt === "blue" || usrPrmpt === "black") {
//     alert("This color already exist \nEnter another color")
// }
// else {
//     colorName.unshift(usrPrmpt);
//     alert(colorName);

// }
// b
// var usrPrmpt = prompt("What color do you want to add");
// if (usrPrmpt === "red" || usrPrmpt === "yellow" || usrPrmpt === "green" || usrPrmpt === "blue" || usrPrmpt === "black") {
//     alert("This color already exist \nEnter another color")
// }
// else {
//     colorName.push(usrPrmpt);
//     alert(colorName);

// }

// c
// colorName.unshift("white", "orange");
// alert(colorName);

// d
// colorName.shift(0,1);
// alert(colorName);

// e
// colorName.pop(1);
// alert(colorName);

// f
// var usrIndex = +prompt("At which index do you want to add Color: (0,1,2,3,4,5)");
// if(usrIndex == 0 ||usrIndex == 1 ||usrIndex == 2 ||usrIndex == 3 ||usrIndex == 4 ||usrIndex == 5){
//     var usrPrmpt = prompt("What color do you want to add");
//     if (usrPrmpt === "red" || usrPrmpt === "yellow" || usrPrmpt === "green" || usrPrmpt === "blue" || usrPrmpt === "black") {
//         alert("This color already exist \nEnter another color")
//     }
//     else{
//         colorName.splice(usrIndex,0,usrPrmpt);
//         alert(colorName);
//     }
// }
// else{
//     alert("Enter Correct Index")
// }

// g
// var und = "hi";
// if(und = "hi"){    
//     var usrIndex = +prompt("At which index do you want to remove Color: (0,1,2,3,4)");
//     if(usrIndex == 0 ||usrIndex == 1 ||usrIndex == 2 ||usrIndex == 3 ||usrIndex == 4){
//         var usrPrmpt = +prompt("How many colors you want to remove: (1,2,3,4,5)");
//         if(usrPrmpt == 1){
//             colorName.splice(usrIndex,1);
//             alert(colorName);
//         }
//         else if(usrPrmpt == 2 && (usrIndex == 0 ||usrIndex == 1 ||usrIndex == 2 ||usrIndex == 3)){
//             colorName.splice(usrIndex,2);
//             alert(colorName);
//         }
//         else if(usrPrmpt == 3 && (usrIndex == 0 ||usrIndex == 1 ||usrIndex == 2)){
//             colorName.splice(usrIndex,3);
//             alert(colorName);
//         }
//         else if(usrPrmpt == 4 && (usrIndex == 0 ||usrIndex == 1)){
//             colorName.splice(usrIndex,4);
//             alert(colorName);
//         }
//         else if(usrPrmpt == 5 && (usrIndex == 0)){
//             colorName.splice(usrIndex,usrPrmp5);
//             alert(colorName);
//         }
//         else{
//             alert("Sorry")
//         }
//     }
//     else{
//         alert("Enter Correct Index")
//     }
// }

// Q no:10
// var studentScore = [];
// studentScore[0] = +prompt("Enter Student Score:");
// studentScore[1] = +prompt("Enter Student Score:");
// studentScore[2] = +prompt("Enter Student Score:");
// studentScore[3] = +prompt("Enter Student Score:");
// document.write("Scores of Students: " + studentScore);
// document.write("<br>");
// studentScore.sort((a, b) => a - b);
// document.write("Ordered Scores of Students: " + studentScore);

// Q no:11
// var cities = [];
// cities[0] = "Karachi";
// cities[1] = "Lahore";
// cities[2] = "Islamabad";
// cities[3] = "Quetta";
// cities[4] = "Peshawar";
// document.write("Cities List: ");
// document.write("<br>");
// document.write(cities);
// document.write("<br>");
// document.write("<br>");
// var selectedCities = cities.slice(0,3);
// document.write("Selected Cities List: ");
// document.write("<br>");
// document.write(selectedCities);

// Q no:12
// var arrJoin = ["This "," is "," my "," cat."];
// document.write("Array:<br>")
// document.write(arrJoin + "<br>")
// document.write("<br>")
// var arrayJoin = arrJoin.join("");
// document.write("String:<br>")
// document.write(arrayJoin + "<br>")

// Q no:13
// var Devices = ["keyboard","mouse","printer","monitor"];
// document.write("Devices<br>")
// document.write(Devices + "<br>")
// document.write("<br>")
// document.write("Out:<br>")
// document.write(Devices[0] + "<br>")
// document.write("Out:<br>")
// document.write(Devices[1] + "<br>")
// document.write("Out:<br>")
// document.write(Devices[2] + "<br>")
// document.write("Out:<br>")
// document.write(Devices[3] + "<br>")

// Q no:14
// var Devices = ["keyboard","mouse","printer","monitor"];
// document.write("Devices<br>")
// document.write(Devices + "<br>")
// document.write("<br>")
// document.write("Out:<br>")
// document.write(Devices[3] + "<br>")
// document.write("Out:<br>")
// document.write(Devices[2] + "<br>")
// document.write("Out:<br>")
// document.write(Devices[1] + "<br>")
// document.write("Out:<br>")
// document.write(Devices[0] + "<br>")

// Q no:15
// var phManufactures = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("Devices<br>")
// document.write(phManufactures + "<br>")
// document.write("<br>")
// document.write("Out:<br>")
// document.write(phManufactures[0] + "<br>")
// document.write("Out:<br>")
// document.write(phManufactures[1] + "<br>")
// document.write("Out:<br>")
// document.write(phManufactures[2] + "<br>")
// document.write("Out:<br>")
// document.write(phManufactures[3] + "<br>")
// document.write("Out:<br>")
// document.write(phManufactures[4] + "<br>")
// document.write("Out:<br>")
// document.write(phManufactures[5] + "<br>")
