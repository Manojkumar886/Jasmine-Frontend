let ChocolateNames=new Array("Nestle","Mars","Amul","Milky","Diary","KitKat","Munch")

let Adding=()=>
{
    let newchoconame=document.getElementById('uservalue').value
    ChocolateNames.unshift(newchoconame)
    alert(newchoconame+"your chocolate name is added successfully")
    Listing()
}

var Listing=()=>
{
    let choco1="";
    ChocolateNames.map((data)=>
    {
        choco1+="<tr><td><hr>"+data+"</td></tr>"
    })
    document.getElementById('live').innerHTML="<table align='center' style='box-shadow:5px 7px 4px gray'><thead><tr><th>Chocolatename</th></tr></thead><tbody>"+choco1+"</tbody></table>"

}

let Updating=()=>
{
    let index=document.getElementById('uservalue').value

    // var newvalue=prompt("please tell us which value you want update/replace"+ChocolateNames[index])
    const newvalue="Something"
    ChocolateNames[index]=newvalue;
    Listing()
}

var Removing=()=>
{
    let deletedvalue=document.getElementById('uservalue').value

    // delete ChocolateNames[deletedvalue];
    alert(ChocolateNames[deletedvalue]+' has been deleted successfully');
    ChocolateNames=ChocolateNames.filter((data)=>
    { 
        return data!==ChocolateNames[deletedvalue]
    })
    
    Listing()
}


let Searching=()=>
{
    let temp=document.getElementById('uservalue').value
    for(let pos=0;pos<ChocolateNames.length;pos++)
    {
        if(ChocolateNames[pos]===temp)
        {
            return pos;
        }
    }
}