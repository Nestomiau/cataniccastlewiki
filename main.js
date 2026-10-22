let shit=document.createElement("div")
document.getElementById("main_content").appendChild(shit)
shit.setAttribute("id", "site-sidebar")
fetch("./header.html").then(Response=>Response.text()).then(data=>{document.getElementById('site-header').outerHTML=data})
fetch("./sidebar.html").then(Response=>Response.text()).then(data=>{document.getElementById('site-sidebar').outerHTML=data})
console.log(document.lastModified)
function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search-generic");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}