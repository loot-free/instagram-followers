function sub()
{
    var a;

    a = document.frm1.txtps.value;

    if(a.length <= 8)
    {
        alert("Password must be more than 8 digits");
    }
}
