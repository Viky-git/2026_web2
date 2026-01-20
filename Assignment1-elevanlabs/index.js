
function showPass(){
    let eicon = document.getElementById("eyeimg");
    let pass = document.getElementById("password");

    if(eicon.getAttribute("src") == "hide.png"){
        eicon.setAttribute("src","show.png");
        pass.setAttribute("type", "text");

    }
    else{
        eicon.setAttribute("src", "hide.png");
        pass.setAttribute("type", "password");
    }
    console.log("pressed")
}