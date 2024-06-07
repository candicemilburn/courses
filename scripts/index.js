"use strict"

window.onload = () => {
    console.log("howdy partner");

    populateTable();
   
}

async function populateTable(){

    //get the courses from the API url
    let courses = await getCourses();

    console.log(courses);
}

async function getCourses(){
    //make the API call all the courses
    // the try says try and if the fetch await
    // doesnt work it will fall into catch and deal the error
    try{
    let response = await fetch("http://localhost:8081/api/courses");
    let courses = await response.json();

    return courses;
    }catch(error){
        console.log(error)
        throw new Error(error)
    }
}

