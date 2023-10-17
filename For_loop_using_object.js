const obj = {
    name : "Santhoshkumar Elumalai",
    Date_of_birth : "22-09-1994",
    Age : 29,
    _10th_graduation_year : 2010,
    _10th_graduation_grade_percentage : "89%",
    _12th_graduation_year : 2012,
    _12th_graduation_grade_percentage : "91.5%",
    Degree : "B.Tech"
}


for (let i = 0; i < Object.keys(obj).length; i++){
    console.log(Object.keys(obj)[i], " : ",Object.values(obj)[i]);
}
