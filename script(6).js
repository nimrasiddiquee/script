function put(){
    var name=document.getElementById("search").value
    localStorage.setItem("name",name)


    var pass=document.getElementById("pass").value
    localStorage.setItem("email",pass)


    var cont=document.getElementById("cont").value
    localStorage.setItem("password",cont)
    
     var  add=document.getElementById("add").value
     localStorage.setItem("contact",add)
}