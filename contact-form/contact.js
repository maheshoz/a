let submit = document.querySelector("#submit").addEventListener("click", function (event) {
    event.preventDefault();
    var fn = document.querySelector("#fn").value;
    var ln = document.querySelector("#ln").value;
    var phone = document.querySelector("#pn").value;
    var email = document.querySelector("#email").value;
    var addr = document.querySelector("#add").value;
    var city = document.querySelector("#city").value;
    var state = document.querySelector("#state").value;
    var zip = document.querySelector("#zip").value;
    var full = document.querySelector("#full").value;
   
    // console.log(fn, ln, phone, email, addr, city, state, zip);
   if(fn == null || fn == "" || ln== null || email == null || zip== null){
       alert("Please Add all the Details");
   }
   else{
    function myFunction() {
        var element = document.getElementById("full");
        element.classList.remove("none");
        element.classList.add("show");
    }
    
    
            myFunction();

            document.getElementById("data").innerHTML += `
        <div class="card">
                        <p class="card-title"> ${fn} ${ln} </p>
                        <p> Phone: ${phone} </p>
                        <p> email: ${email} </p>
                        <p> Address: ${addr} </p>
                        <p> City: ${city} </p>
                        <p> State: ${state} </p>
                        <p> Zip: ${zip} </p>
                    
            </div>
        `;
    }
}, false);

