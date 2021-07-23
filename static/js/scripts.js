window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-848NRXZRM8');

window.onload = (event) => {
    console.log('page is fully loaded');
    myFunction();
    console.log('function called to initialize variable tamil');
};

function myFunction() {
    console.log("function call success");
    var eng_elements = document.getElementsByClassName("english");
    var tamil_elements = document.getElementsByClassName("tamil");
    console.log("tamil initialized");

    for (var i = 0; i < eng_elements.length && i < tamil_elements.length; i++){
        console.log("for loop starts");

        if(tamil_elements[i].style.display === "none"){
            eng_elements[i].style.display = "none";
            tamil_elements[i].style.display = "block";
            console.log("english elements are now hidden");
        }
        else{
            eng_elements[i].style.display = "block";
            tamil_elements[i].style.display = "none";
            console.log("tamil elements are now hidden");
        }
        console.log("the end");
    }
}




console.log("👉 Built using ✨ Nuxt.js & Bootstrap ✨");
console.log("🙂 Thank you for visiting, Have a nice day ✌");