
// This function resets the form fields, depending on the number of clicks GW 05/09/2020
reset_count = 0

function resetForm() {
if (reset_count == 0 ) {
    reset_count += 1
    document.getElementById("order_form").reset();
} else if (reset_count == 1) {
    reset_count += 1
    document.getElementById("shipping_form").reset();
    reset_count = 0
}
}

/*This function creates a new window to print the customer's shipping information.
This function uses the getShippingValues helper function to pull values from the 
shipping_form. GW 05/09/2020*/

function printOrder(customer_name, customer_email, customer_phone, customer_city, customer_state, customer_zip, 
                delivery_instructions, address, embroidery_text, emb_loc, pocket, size, color)
{
    var new_window;
    new_window=window.open("","","status=0,height=500,width=500")
    new_window.focus();
    new_window.document.write("<h1>Shipping Information</h1>" + "<br>", "Name: "+customer_name + "<br>", 

                "Email: " + customer_email + "<br>", 
                "Phone: " + customer_phone + "<br>",
                "City: "+ customer_city + "<br>",
                "State: "+ customer_state + "<br>",
                "Zip Code: "+ customer_zip + "<br>",
                "Address: "+ address + "<br>",
                "Delivery Instructions: "+ delivery_instructions + "<br>",

                "<h1>Order Information</h1>" + "<br>",
                "Independence Club Jersey" + "<br>",
                "Jersey Color: "+ color + "<br>",
                "Jersey Size: "+ size + "<br>",
                "Pocket(s): "+ pocket + "<br>",
                "Embroidery Location: "+ emb_loc + "<br>",
                "Embroidery Text: "+ embroidery_text + "<br>");

    new_window.close;
}

// This function validates and gets the values for all of the form fields
// The order information is validated first, in sequential order to ensure 
// that the error thrown is based on the first missing field
// GW 05/09/2020

function getValues()
{ 
    // Validate Jersey Color GW 05/09/2020
    if (((document.getElementById("color0").checked) == false) && ((document.getElementById("color1").checked) == false) && 
            ((document.getElementById("color2").checked) == false)){
                alert("Please Choose a Color");
                return;
    } else {
            // Get the Value of the Jersey Color GW 05/09/2020
            if ((document.getElementById("color2").checked) == true) {
                var color = "Grey";
            }
            else if ((document.getElementById("color1").checked) == true) {
                var color = "Black";
            }
            else if ((document.getElementById("color0").checked) == true) {
                var color = "White";
        }
    }

    // Validate Jersey Size Selection GW 05/09/2020
    if (((document.getElementById("size0").checked) == false) && ((document.getElementById("size1").checked) == false) && 
            ((document.getElementById("size2").checked) == false) && 
            ((document.getElementById("size3").checked) == false) && 
            ((document.getElementById("size4").checked) == false)){
                alert("Please Choose a Size");
                return;

    } else { // Get the Value of the Jersey Size GW 05/09/2020
            if ((document.getElementById("size4").checked)  == true) {
                var size = "Extra Large";
            }
            else if ((document.getElementById("size3").checked)  == true) {
                var size = "Large";
            }
            else if ((document.getElementById("size2").checked)  == true) {
                var size = "Medium";
            }
            else  if ((document.getElementById("size1").checked)  == true) {
                var size = "Small";
            }
            else if ((document.getElementById("size0").checked)  == true) {
                var size = "Extra Small";
        }
    }

    // Validate Jersey Pocket Selection GW 05/09/2020
    if (((document.getElementById("pocket0").checked) == false) && ((document.getElementById("pocket1").checked) == false) && 
            ((document.getElementById("pocket2").checked) == false) && 
            ((document.getElementById("pocket3").checked) == false) && 
            ((document.getElementById("pocket4").checked) == false)){
                alert("Please Choose Number of Pocket(s)");
                return;

    } else { // Get the Value of the Pockets GW 05/09/2020
            if ((document.getElementById("pocket4").checked)  == true) {
                var pocket = "No Pockets";
            }
            else if ((document.getElementById("pocket3").checked)  == true) {
                var pocket = "1 Pocket";
            }
            else if ((document.getElementById("pocket2").checked)  == true) {
                var pocket = "2 Pockets";
            }
            else if ((document.getElementById("pocket1").checked)  == true) {
                var pocket = "3 Pockets";
            }
            else if ((document.getElementById("pocket0").checked)  == true) {
                var pocket = "4 Pockets";
        }
    }

    // Validate Jersey Embroidery GW 05/09/2020
    if (((document.getElementById("emb_loc_0").checked) == false) && ((document.getElementById("emb_loc_1").checked) == false) && 
            ((document.getElementById("emb_loc_2").checked) == false) && 
            ((document.getElementById("emb_loc_3").checked) == false) && 
            ((document.getElementById("emb_loc_4").checked) == false)){
                alert("Please Choose Location of Embroidery");
                return;

    } else { // Get the Value of the Emboidery Location GW 05/09/2020

        // Get the Value of the Embroidery Location GW 05/09/2020
        if ((document.getElementById("emb_loc_4").checked)  == true) {
            var emb_loc = "No Embroidery";
        }
        else if ((document.getElementById("emb_loc_3").checked)  == true) {
            var emb_loc = "Lower Back";
        }
        else if ((document.getElementById("emb_loc_2").checked)  == true) {
            var emb_loc = "Upper Back";
        }
        else if ((document.getElementById("emb_loc_1").checked)  == true) {
            var emb_loc = "Left Chest";
        }
        else if ((document.getElementById("emb_loc_0").checked)  == true) {
            var emb_loc = "Right Chest";
        }
    }

    // Validate Embroidery Text GW 05/09/2020
    emb_text = document.getElementById("emb_text").value
    
    if (((document.getElementById("emb_loc_0").checked) == true) || 
            ((document.getElementById("emb_loc_1").checked) == true) || 
            ((document.getElementById("emb_loc_2").checked) == true) || 
            ((document.getElementById("emb_loc_3").checked) == true))

            { if (emb_text == ""){ 
                alert("Please Enter Your Embroidery Text");
                return;

            }  else {
                var embroidery_text = order_form.embroidery_text.value;
            }
        } else {
        var embroidery_text = "N/A"
    }

    // Validate Customer Address GW 05/09/2020
    address_one = document.getElementById("addressOne").value
    address_two = document.getElementById("addressTwo").value

    if (address_one == ""){ 
        if (address_two == "") {
            alert("Please Enter address");
            return;
        } else {
            var address = (shipping_form.customer_address_two.value);
        }

    } else {
        var address = (shipping_form.customer_address_one.value) + " " + (shipping_form.customer_address_two.value);
    }

    // Validate Customer Name GW 05/09/2020
    cust_name = document.getElementById("name").value
    if (cust_name == ""){ 
        alert("Please Enter Name");
        return;
    } else {
        var customer_name = shipping_form.customer_name.value;
    }

    // Validate Customer Email GW 05/28/2020
    //https://www.w3schools.com/jsref/jsref_includes.asp
    // https://www.javascripttutorial.net/es6/javascript-string-includes/
    cust_email = document.getElementById("email").value

    if (cust_email == "") {
        alert("Please Enter Email");
        return;

    } else {

        // Variable declarations to be used below
        var string_customer_email = cust_email.toString();
        var first_char = string_customer_email.charAt(0)
        var at_sign_included = string_customer_email.includes('@');
        var period_included = string_customer_email.includes('.');
        var last_index = (string_customer_email.length-1)
        var last_index_char = string_customer_email.charAt(last_index)
        var fourth_last_index_char = string_customer_email.charAt(string_customer_email.length-4)
        var third_last_index_char = string_customer_email.charAt(string_customer_email.length-3)

        // Check if @ sign and . are included in email
        if ((at_sign_included == true) && (period_included == true)) {

            // Check if @ sign is first or last character
            if (((first_char, last_index_char) != '@')) {

                // Check if period is the third or fourth to last character
                if (((fourth_last_index_char) == '.') ||
                    ((third_last_index_char) == '.')) {

                        // Email is valid; pass to window function
                        var customer_email = shipping_form.customer_email.value;

                    } else {
                        alert("Please Enter a Valid Email; period is not in fourth or third  to last positions");
                        return;
                    }

            } else {
                alert("Please Enter a Valid Email; @ character is incorrectly first or last ");
                return;
            }
        } else {

            alert("Please Enter a Valid Email; missing period and at symbol");
            return;
        } 
    }

    // Validate Customer Phone GW 05/09/2020

    var customer_phone = document.getElementById("phone").value
    var integers = ["0","1","2","3","4","5","6","7","8","9"];
    if (customer_phone == "") { 
        alert("Please Enter Phone Number");
        return;
    } else {

        var string_customer_phone = customer_phone.toString()
        var char_one = string_customer_phone.charAt(0)
        var char_two = string_customer_phone.charAt(1)
        var char_three = string_customer_phone.charAt(2)
        var char_four = string_customer_phone.charAt(3)
        var char_five = string_customer_phone.charAt(4)
        var char_six = string_customer_phone.charAt(5)
        var char_seven = string_customer_phone.charAt(6)
        var char_eight = string_customer_phone.charAt(7)
        var char_nine = string_customer_phone.charAt(8)
        var char_ten = string_customer_phone.charAt(9)
        var char_eleven = string_customer_phone.charAt(10)
        var char_twelve = string_customer_phone.charAt(11)
        var char_thirteen = string_customer_phone.charAt(12)

        // Check if phone number is in format: (###)###-####

        if (customer_phone.length == 13) {
            if (((char_one) == "(") &&
            ((char_two, char_three, char_four, char_six, 
                char_seven, char_eight, char_ten, char_eleven, 
                char_twelve, char_thirteen) in integers) &&
            ((char_five) == ")") && ((char_nine) == "-")){

                var customer_phone = shipping_form.customer_phone.value;

        } else {
            alert("Incorrect phone number format; please try again.");
            return;
        }

        //  Check if phone number is in format: ###-###-####

        } else if (customer_phone.length == 12) {
            if (((char_one, char_two, char_three, char_five, char_six, char_seven, 
                    char_nine, char_ten, char_eleven, char_twelve) in integers) &&
                ((char_four, char_eight) == "-")) {

                var customer_phone = shipping_form.customer_phone.value;

            //  Check if phone number is in format: (###)#######

        }  else if (((char_one) == "(") &&
            ((char_five) == ")") && ((char_two,char_three,char_four, 
                char_six,char_seven,char_eight, char_nine,char_ten,
                char_eleven,char_twelve) in integers)) {

                var customer_phone = shipping_form.customer_phone.value;

        }  else {
                alert("Incorrect phone number format; please try again.")
                return;
        }

        //  Check if phone number is in format: ##########

        } else  if (customer_phone.length == 10) {
            if (((char_one, char_two,char_three,
                char_four, char_five, char_six, char_seven,char_eight,
                char_nine,char_ten,char_eleven, char_twelve) in integers)) {

                var customer_phone = shipping_form.customer_phone.value;

            }
        } else {
            alert("Incorrect phone number format; please try again.")
            return;
        }
    }

    // Validate Customer City GW 05/09/2020

    customer_city = document.getElementById("city").value
    if (customer_city == "") { 
        alert("Please Enter City");
        return;
    } else {
        var customer_city = shipping_form.customer_city.value;
    }

    // Validate the customer state GW 05/10/2020
    var selectedState = document.getElementById ("state");
    var state = selectedState.options[selectedState.selectedIndex].text;
    if (state == "Select") {
        alert("Please choose a state.");
        return;
    } else {
        state = state
    }
    
    // Validate Customer Zip Code GW 05/09/2020
    customer_zip = document.getElementById("zip").value
    if (customer_zip == "") { 
        alert("Please Enter Zip Code");
        return;
    } else {
        var customer_zip = shipping_form.customer_zip.value;
    }
    
    // Validate Delivery Instructions GW 05/09/2020
    if ((document.getElementById("instructions").checked) = false){ 
        var delivery_instructions = "N/A";
        return;
    } else {
        var delivery_instructions = shipping_form.delivery_instructions.value;
        
    }

    // Print the order confirmation form GW 05/09/2020
    printOrder(customer_name, customer_email, customer_phone, 
                customer_city, state, customer_zip, 
                delivery_instructions, address, embroidery_text, 
                emb_loc, pocket, size, color);
}