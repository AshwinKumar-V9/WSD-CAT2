
var uname = document.getElementById("name")
var email = document.getElementById("email")
var branch = document.getElementById("branch")
var college = document.getElementById("college")
var state = document.getElementById("state")
var address = document.getElementById("address")
var age = document.getElementById("age")
var phone = document.getElementById("phone")
var username = document.getElementById("username")
var pswd = document.getElementById("pswd")



//function to lock digits
function lockDigits(e){
    if(/^[^a-zA-Z ]$/.test(e.key))
    {
        e.preventDefault()
    }
}
//function to lock characters
function lockChar(e){
    if(/^[^0-9]$/.test(e.key))
    {
        e.preventDefault()
    }
}

//event listener to lock numbers for name
uname.addEventListener('keydown', (e)=>{
    lockDigits(e)
})
//event listener to lock characters for phone number
phone.addEventListener('keydown', (e)=>{
    lockChar(e)
})
//event listener to lock numbers for branch
branch.addEventListener('keydown', (e)=>{
    lockDigits(e)
})
//event listener to lock numbers for college
college.addEventListener('keydown', (e)=>{
    lockDigits(e)
})
//event listener to lock numbers for state
state.addEventListener('keydown', (e)=>{
    lockDigits(e)
})
//event listener to lock characters for age
age.addEventListener('keydown', (e)=>{
    lockChar(e)
})

// uname.addEventListener('keyup', (e)=>{
//     if(uname.value.trim().length = 1)
//     {
//         uname.value = uname.value.trim().toUppercase
//         console.log(e.key)
//     }
// })


//event listener to validate user email
email.addEventListener('keyup', ()=>{
    const email_pattern = /^([a-z0-9_\.]+)@(([a-z0-9]+)\.){2}([a-z]{2,3})$/
    var validate_span = document.getElementById("email_validate")
    if(email_pattern.test(email.value.trim()))
    {
        validate_span.style.color = 'green'
        validate_span.innerHTML = 'Valid Email'
    }
    else
    {
        validate_span.style.color = 'red'
        if (email.value.trim() == '')
        {
            validate_span.innerHTML = 'Email Required'
        }
        else
        {
            validate_span.innerHTML = 'Invalid Email'
        }
    }
})

//event listener to validate user phone
phone.addEventListener('keyup', ()=>{
    const phone_pattern = /^[0-9]{10}$/
    var validate_span = document.getElementById("phone_validate")
    if(phone_pattern.test(phone.value.trim()))
    {
        validate_span.style.color = 'green'
        validate_span.innerHTML = 'Valid Phone'
    }
    else
    {
        validate_span.style.color = 'red'
        if (phone.value.trim() == '')
        {
            validate_span.innerHTML = 'Phone Required'
        }
        else
        {
            validate_span.innerHTML = 'Invalid Phone'
        }
    }
})

//event listener to validate user password
pswd.addEventListener('keyup', ()=>{
    var validate_span = document.getElementById("pswd_validate")
    var uppercase_val = document.getElementById("uppercase")
    var lowercase_val = document.getElementById("lowercase")
    var num_val = document.getElementById("number")
    var special_val = document.getElementById("special")
    var charlen_val = document.getElementById("charlen")
    var uppercase = 0
    var lowercase = 0
    var number = 0
    var special = 0

    if (pswd.value.trim() == '')
    {
        validate_span.style.color = 'red'
        validate_span.innerHTML = 'Password Required'
        uppercase_val.style.color = "red"
        lowercase_val.style.color = "red"
        num_val.style.color = "red"
        special_val.style.color = "red"
        charlen_val.style.color = "red"
    }
    else
    {
        if(pswd.value.trim().match(/[A-Z]/))
        {
            uppercase = 1
            uppercase_val.style.color = "green"
        }
        else{
            uppercase = 0
            uppercase_val.style.color = "red"
        }
        if(pswd.value.trim().match(/[a-z]/))
        {
            lowercase = 1
            lowercase_val.style.color = "green"
        }
        else{
            lowercase = 0
            lowercase_val.style.color = "red"
        }
        if(pswd.value.trim().match(/[0-9]/))
        {
            number = 1
            num_val.style.color = "green"
        }
        else{
            number = 0
            num_val.style.color = "red"
        }
        if(pswd.value.trim().match(/[\W]/))
        {
            special = 1
            special_val.style.color = "green"
        }
        else{
            special = 0
            special_val.style.color = "red"
        }
        if(/^(.){8,20}$/.test(pswd.value.trim()))
        {
            validate_span.style.color = 'red'
            charlen_val.style.color = "green"
            validate_span.innerHTML = 'Strength: Weak'
            if(uppercase && lowercase)
            {
                validate_span.style.color = 'yellow'
                validate_span.innerHTML = 'Strength: Medium'
            }
            if(number && special)
            {
                validate_span.style.color = 'green'
                validate_span.innerHTML = 'Strength: Strong'
            }
        }
        else
        {
            charlen_val.style.color = "red"
            validate_span.style.color = 'red'
            validate_span.innerHTML = 'Invalid Password'
        }
    }
})

//event listener to validate entire form
document.getElementById("content_wrapper").addEventListener('keyup', ()=>{
    email = document.getElementById("email_validate").style.color
    phone = document.getElementById("phone_validate").style.color
    pswd = document.getElementById("pswd_validate").style.color
    if((email == 'green') && (phone == 'green') && (pswd == 'green') && (uname.value.trim() != "") && (branch.value.trim() != "") && (college.value.trim() != ""))
    {
        document.getElementById("submit").classList.remove("disabled")
    }
    else
    {
        document.getElementById("submit").classList.add("disabled")
    }
})

//confirm submission
function submitForm()
{
    alert("Submitted Successfully")
}