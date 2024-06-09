function collapse() {
    var x = document.getElementById("collapse-bar");  
    var y = document.getElementById("menu-icon");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else{
        x.style.display = "none";
        y.style.display = "block";
    }
}