lang='en';

function showMenu() {
    document.getElementById("menu").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("menu");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

function check_semester(){
    //window.alert(document.getElementById('fall_2018').checked);
    if (document.getElementById('fall_2018').checked || document.getElementById('winter_2019').checked) {
        
    }else{
        window.alert("Please select a Term!");
        return false;
    }
}
function check_index(){
    var username = document.forms["user_login"]["user_id"].value;
    if(username == ''/*|| username!=NAMENAME*/){
        window.alert("Please enter your User ID!");
        document.user_login.user_id.focus();
        return false;
    }
    var username = document.forms["user_login"]["password"].value;
    if(username == ''){
        window.alert("Please enter your password!");
        document.user_login.password.focus();
        return false;
    }
    return true;
}
function set_semester() {
    var link;
    if (document.getElementById('fall_2018').checked){
        link = document.getElementById('fall_2018').value;
    } 
    if (document.getElementById('winter_2019').checked){
        link = document.getElementById('winter_2019').value;
    } 
    location.href=link;
    //return 'home.html';
}

function check_schedule(){
    if (document.getElementById('class_schedule').checked || document.getElementById('exam_schedule').checked) {
        
    }else{
        window.alert("Please select a Schedule!");
        return false;
    }
}

function set_schedule() {
    var link;
    if (document.getElementById('class_schedule').checked){
        link = document.getElementById('class_schedule').value;
    } 
    if (document.getElementById('exam_schedule').checked){
        link = document.getElementById('exam_schedule').value;
    } 
    location.href=link;
}