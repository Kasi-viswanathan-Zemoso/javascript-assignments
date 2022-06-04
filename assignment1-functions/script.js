function printInitials(firstName, lastName, func)
{
    console.log("Caller Function")
    document.getElementById("initials").innerHTML = func(firstName, lastName);
}

function getInitials(firstName,lastName)
{ 
    console.log("Called Function")
    console.log(firstName.charAt(0) + lastName.charAt(0));
    return firstName.charAt(0) + lastName.charAt(0); 
}