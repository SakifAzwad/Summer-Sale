function xx(input)
{
    var zz=document.getElementById(input);
    var yy=zz.innerText;
    yy=parseFloat(yy);
    return yy;
}

function dis(input)
{
    document.getElementById(input).classList.remove("cursor-not-allowed");
    document.getElementById(input).classList.remove("opacity-50");
    document.getElementById(input).removeAttribute("disabled");
}
function add(input)
{
    document.getElementById(input).classList.add("cursor-not-allowed");
    document.getElementById(input).classList.add("opacity-50");
    document.getElementById(input).setAttribute('disabled', '');
}

function conv_text(input,value)
{
    document.getElementById(input).innerText=value;
}

function func_add(input)
{
    var zz=document.getElementById('add-item');
    var cnt=zz.childElementCount;
    var rr=document.createElement('p');
    rr.classList.add('ml-4');
    var nm=document.getElementById(input).innerText;
    rr.innerHTML=`${cnt+1}.${ nm}`;
    zz.appendChild(rr);
}

function deletechild(input)
{
    var e = document.getElementById(input);
    e.innerHTML="";
}