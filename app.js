var count = 0; // create variable for keep value

const value = document.getElementById("value");
const btn_decrease = document.getElementById("btn-decrease");
const btn_increase = document.getElementById("btn-increase");
const btn_reset = document.getElementById("btn-reset");

check_value_color(count);



// click decrease button
btn_decrease.addEventListener('click', function(){
    // decrease value by 1
    count = count - 1;
    // check value color
    check_value_color(count);
    // change text to new value
    document.getElementById("value").innerText = count;
})


// click increase button
btn_increase.addEventListener('click', function(){
    // increase value by 1
    count = count + 1;
    // check value color
    check_value_color(count);
    // change text to new value
    document.getElementById("value").innerText = count;
})

// click reset button
btn_reset.addEventListener('click', function(){
    // reset value to 0
    count = 0;
    // check value color
    check_value_color(count);
    // change text to 0
    document.getElementById("value").innerText = count;
})




function check_value_color(count){
    if (count == 0 ){
        value.style.color = "black";
    }
    else if (count < 0 ){
        value.style.color = "red";
    }
    else value.style.color = "green";
}