var f1=0;
var f2=0;
var pp=0;
pp=pp.toFixed(2);
function press(input1,input2)
{
    func_add(input2);
    var val=xx(input1);
    conv_text('disc1',pp);
    if(!f1)
    {
        dis('btn-purchase');
        f1=1;
    }

    var a=xx('totini');
    a+=val;
    if(a>=200 && !f2)
    {
        dis('btn-apply');
        f2=1;
    }
    a=a.toFixed(2);
    conv_text('totini',a);
    var b=xx('totfin');
    b+=val;
    b=b.toFixed(2);
    conv_text('totfin',b);

}

document.getElementById('btn-apply').addEventListener('click',function()
{
    var aa=document.getElementById('inp1').value;
    if(aa=="SELL200")
    {
        var a=xx('totini');
        var b=a*0.20;
        b=b.toFixed(2);
        conv_text('disc1',b);
        a-=b;
        a=a.toFixed(2);
        conv_text('totfin',a);
        
    }
    else{
        alert('Invalid Coupon');
    }
    document.getElementById('inp1').value="";
});

document.getElementById('btn-home').addEventListener('click',function()
{
    conv_text('totini',pp);
    conv_text('disc1',pp);
    conv_text('totfin',pp);
    f1=0;
    f2=0;
    add('btn-purchase');
    add('btn-apply');
    deletechild('add-item');
});