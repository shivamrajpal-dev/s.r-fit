function onscroll() {
    var text = document.querySelector(".app-text");
    var img = document.querySelector(".app-logo");
    var screenheight = window.innerHeight;
    var textheight = text.getBoundingClientRect().top;
    var imgheight = img.getBoundingClientRect().top;
    if (textheight < screenheight / 1.5) {
        text.classList.add('text-appear');
    };
    if (imgheight < screenheight / 2.4) {
        img.classList.add("img-appear");
    };
    if (textheight > screenheight / 1.5) {
        text.classList.remove('text-appear');
    };
    if (imgheight > screenheight / 2.4) {
        img.classList.remove("img-appear");
    };

};
function logo(){
    var mainlogo = document.querySelector(".white");
    mainlogo.classList.add("gray");
    console.log("sdfgh")
    
};
 var appsection = document.querySelector(".white");
console.log(appsection);
appsection.addEventListener('onmouseover', logo);


window.addEventListener('scroll', onscroll);
