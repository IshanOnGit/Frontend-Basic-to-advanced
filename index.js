const decreasebtn = document.getElementById("decrease");
const increasebtn = document.getElementById("increase");
const resetbtn = document.getElementById("reset");
const countLabel = document.getElementById("Number");
let count=0;

increasebtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreasebtn.onclick = function() {
    if(count>0)
        {
            count--;
        }
    else
        {
            count=0;
            window.alert("Count can not be less than zero");
        }

        
    countLabel.textContent = count;
}

resetbtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}