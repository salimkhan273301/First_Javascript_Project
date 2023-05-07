//const arr=[];
const student_collection = new browserDatabase('students', show);


class Student{
constructor(name,email,age,gender,address){
    this.name=name;
    this.gender=gender;
    this.email=email;
    this.age=age;
    this.address=address;

}

 save(){
//arr.push(this);
student_collection.save(this)
//show(student_collection);

}

}

function show(arr){
const table_body=document.querySelector("#tb");
table_body.innerHTML='';

for(var data of arr ){

    const row_tem=`
<tr>
<td>${data.name}</td>
<td>${data.email}</td>
<td>${data.age}</td>
<td>${data.gender}</td>
<td>${data.address}</td>
 </tr>`;
 table_body.innerHTML+=row_tem;

}






}