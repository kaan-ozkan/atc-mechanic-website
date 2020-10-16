function flipView(category_name, button){
  var works_list = document.getElementById("works-"+category_name);
  if (works_list != null && button != null) {
    if(works_list.style.display == 'block'){
      works_list.style.display = 'none';
      button.style.backgroundImage = "url('assets/img/plus.png')"
    }
    else{
      works_list.style.display = 'block';
      button.style.backgroundImage = "url('assets/img/minus.png')"
    }
  }
}
