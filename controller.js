
const sname=document.querySelector("#name");
const email=document.querySelector("#email");
const age=document.querySelector("#age");
const gn=document.querySelector("#gender");
const address=document.querySelector("#add");

const btneventHandler=document.querySelector("#btn");

function creatStudent(event){
    event.preventDefault();
    
    const student=new Student(sname.value,email.value,age.value,gn.value,address.value);
    student.save();
    console.log(student);
    
}
btneventHandler.addEventListener("click",creatStudent);






