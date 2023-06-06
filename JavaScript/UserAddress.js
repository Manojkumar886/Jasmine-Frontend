let Validation=()=>
{
    let a=document.forms['useraddress'].flatno.value
    let b=document.forms['useraddress'].streetname.value
    // let c=document.forms('useraddress').flatno.value
    // let d=document.forms('useraddress').flatno.value
    let e=document.forms['useraddress'].secure.value

    let activeprocess=true;


    if(a.length<=0)
    {
        document.getElementById('flatno1').innerHTML="flat no should't empty"
        activeprocess=false;
    }
    else if(!((/^[a-zA-z0-9]+$/)).test(b))
    {
        document.getElementById('streetname1').innerHTML="flat no something wrong"
         activeprocess=false;  
    }

    
    if(b.length<=0)
    {
        document.getElementById('streetname1').innerHTML="Streeetname should't empty"
         activeprocess=false;
    }
    else if(!((/^[a-zA-z\s]+$/)).test(b))
    {
        document.getElementById('streetname1').innerHTML="Streeetname should be used only letters"
         activeprocess=false;   
    }
     
    if(e.length<=0)
    {
        document.getElementById('secure1').innerHTML="Password should't empty"
         activeprocess=false;
    }
    else if(!((/^[a-zA-z0-9!@#$%^&*(),{6,16}]+$/)).test(b))
    {
        document.getElementById('secure1').innerHTML="Password should be used 6 to 16 limit(include spc,numbers,alph"
         activeprocess=false;   
    }

    return activeprocess;
}