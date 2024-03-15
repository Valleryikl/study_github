function menuAdaptiv() {
    let x = document.getElementById("adaptiveHeader");
    if(x.className == "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}