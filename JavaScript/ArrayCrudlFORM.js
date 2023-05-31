let ChocolateNames=new Array("Nestle","Mars","Amul","Milky","Diary","KitKat","Munch")

let Adding=()=>
{
    let newchoconame=document.getElementById('uservalue').value
    ChocolateNames.unshift(newchoconame)
    alert(newchoconame+"your chocolate name is added successfully")
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