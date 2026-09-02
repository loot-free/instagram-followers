function sub()
{
    var a;

    a = document.frm1.txtpass.value;

    if(a.length <= 8)
    {
        alert("Password must be more than 8 digits");
    }
}
