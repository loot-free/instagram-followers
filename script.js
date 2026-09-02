function sub()
{
    var value = document.frm1.testValue.value;

    if(value.length <= 8)
    {
        alert("Value must be more than 8 characters");
    }
}
