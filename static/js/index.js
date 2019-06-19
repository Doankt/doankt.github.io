function update_skills(){
  const skill_ids = ["c_years",
                    "cplusplus_years",
                    "git_years",
                    "html5_years",
                    "java_years",
                    "javascript_years",
                    "python_years"];
  var date = new Date();
  var working_element;
  skill_ids.forEach(function(element){
    working_element = document.getElementById(element);
    working_element.innerHTML = (date.getFullYear() - 2019) + Number(working_element.innerHTML);
  })

}

function update_age(){
  var date = new Date();
  const birthdate = new Date(1999, 05, 15, 0, 0, 0, 0);
  var working_element = document.getElementById("age");

  working_element.innerHTML = date.getFullYear() - birthdate.getFullYear() - 1;

  if(date.getMonth() >= birthdate.getMonth() && date.getDate() >= birthdate.getDate()){
    working_element.innerHTML = Number(working_element.innerHTML) + 1;
  }
}

function update_all(){
  update_skills();
  update_age();
}

update_all();
