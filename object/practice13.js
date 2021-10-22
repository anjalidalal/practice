//for chiye sbse phle data array ke objects ko access krne k liye
//an function outside of for loop that calculate the total marks 
//nested for loop for students array
//call the function
//if statement to calculate maximum marks


let data = [
    {
        grade: "V",
        students: [
            {name: "Nrupul", marks: [10, 20, 30]},
            {name: "Prateek", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VI",
        students: [
            {name: "Aman", marks: [10, 20, 30]},
            {name: "Albert", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VII",
        students: [
            {name: "Yogesh", marks: [10, 20, 30]},
            {name: "Sandhya", marks: [20, 30, 40]}
        ]
    }
  ]
    function total (arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
          sum += arr[i];    
      }
      return sum;
  }

  for (let i = 0; i < data.length; i++) {
      let student = data[i].students;
      //console.log(data[i].grade);

      let max = 0;
      let nm = "";

    for (let j = 0; j < student.length; j++) {

        let marksArr = student[j].marks;
        //console.log(total(marksArr));

        if (total(marksArr) > max) {
            max = total(marksArr);
            nm = student[j].name;
        }
      }

      //console.log({max, nm})
      console.log(`${data[i].grade}-${nm}-${max}`)
  }