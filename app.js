//1
var array1 = [,,,]

//3
var stringArray = ["java Script", "HTML", "CSS"]

//4
var numberArray = [100, 200, 300]

//5
var booleanArray = [true, false]

//6
var mixedArray = ["Java Script", 100, true]

//7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write ("QUALIFICATIONS:" + "<br>")
document.write ("1) " + qualifications[0] + "<br>")
document.write ("2) " + qualifications[1] + "<br>")
document.write ("3) " + qualifications[2] + "<br>")
document.write ("4) " + qualifications[3] + "<br>")
document.write ("5) " + qualifications[4] + "<br>")
document.write ("6) " + qualifications[5] + "<br>")
document.write ("7) " + qualifications[6] + "<br>")
document.write ("8) " + qualifications[7] + "<br>" + "<br>")

//8 USING MANUAL METHOD
document.write ("STUDENTS RESULT" + "<br>")
var studentNames = ["Ashfaq", "Ali", "Usman"]
var studentscores = [320, 230, 480]
var totalMarks = (500)
document.write ("Score of " + studentNames[0] + " is " + studentscores[0] + ". Percentage:" + studentscores[0]/totalMarks*100 + "%" + "<br>")
document.write ("Score of " + studentNames[1] + " is " + studentscores[1] + ". Percentage:" + studentscores[1]/totalMarks*100 + "%" + "<br>")
document.write ("Score of " + studentNames[2] + " is " + studentscores[2] + ". Percentage:" + studentscores[2]/totalMarks*100 + "%" + "<br>" + "<br>")
//8 USING LOOP
for (var i = 0; i < studentNames.length; i++) {
    document.write ("Score of " + studentNames[i] + " is " + studentscores[i] + ". Percentage:" + studentscores[i]/totalMarks*100 + "%" + "<br>")
}

//9
var colors = ["White", "Black", "Green", "Yellow", "Blue", "Red"] 
document.write ("<br>" + "COLORS" + "<br>" + colors)
var userColor = prompt("Add your own color at the start.") //a
colors.unshift(userColor)
document.write ("<br>" + colors)
var userColor2 = prompt("Add your own color at the end.") //b
colors.push(userColor2)
colors.shift(userColor)
document.write ("<br>" + colors)
var userColor3 = prompt("Add 2 more colors at the start.") //c
colors.splice(0,1,userColor3)
document.write ("<br>" + colors)
colors.pop() //e
document.write ("<br>" + colors)
var userIndexNo = +prompt("At which index number you want to add a color?")
var userIndexColor = prompt("Type your color name.")
colors.shift()
colors.splice(userIndexNo,0,userIndexColor)
document.write ("<br>" + colors)

//10
var ScoreOfStudents = [320, 230, 480, 120]
document.write (`<br>`)
document.write (`<br>`)
document.write (`Score of Students : ${ScoreOfStudents}`)
document.write (`<br>`)
document.write (`Orderd Score of Students : ${ScoreOfStudents.sort()}`)

//11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
var selectedCities = cities.slice(2,4)
document.write (`<br>`)
document.write (`<br>`)
document.write (`Citites List : ${cities}`)
document.write (`<br>`)
document.write (`Selected Citites List : ${selectedCities}`)

//12
var arr = ["This" , " is ", " my ", " cat"];
var arr2 = arr.join("")
document.write (`<br>`)
document.write (`<br>`)
document.write (`Array : <br>${arr}`)
document.write (`<br>`)
document.write (`String : <br>${arr2}`)

//13
var devices = [`Keyboard` , `Mouse` , `Printer` , `Monitor`]
document.write (`<br>`)
document.write (`<br>`)
document.write (`Devices: <br>${devices}`)
document.write (`<br>`)
document.write (`<br>`)
document.write (`Out: <br>${devices[0]}`)
document.write (`<br>`)
document.write (`Out: <br>${devices[1]}`)
document.write (`<br>`)
document.write (`Out: <br>${devices[2]}`)
document.write (`<br>`)
document.write (`Out: <br>${devices[3]}`)