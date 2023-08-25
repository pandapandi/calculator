const btns = document.querySelectorAll(".key");

const disp = document.querySelector(".disp");

btns.forEach( (btn)=>{
  btn.addEventListener ("click" , (e) => {
    let pressed = e.target.innerHTML;

    if (pressed === " RESET "){
        disp.innerHTML = "";
    }

    else if (pressed === " = "){
        disp.innerHTML = eval(disp.innerHTML);
    }

    else {
        disp.innerHTML += pressed;
    }
  })
} )