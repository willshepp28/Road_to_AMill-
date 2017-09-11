
var container = document.querySelector('.container');
var p;

var total = 1000000; // 1 million



function calculator(){

    // counts the years to one million
    function yearsToAMillion(input){
        p = document.createElement('P'); 
        p.innerHTML = "Saving <strong>$" +  numberWithCommas(input) + "</strong> a year. It would take " + Math.floor(total/input) + " years to get <strong>$1,000,000</strong>";
        addToContainer(p);
    }
    
    // adds a comma to input
    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    
    // adds element to container
    function addToContainer(elem){
        container.appendChild(elem);
    }
    
    
    for (let i = 0; i < 350000;) {
        i += 10000;
        yearsToAMillion(i);
    }
}

calculator();
