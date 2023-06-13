const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValue');
const btnInsert = document.getElementById('btnInsert');
const lsOutput = document.getElementById('lsOutput');
const btnAllDelete = document.getElementById('btnAllDelete');
const autoFILL = document.getElementById('autoFILL');
const inputDelKey = document.getElementById('inputDelKey');
const btnDelete = document.getElementById('btnDelete');
const inputReadDataKey = document.getElementById('inputReadDataKey');
const btnReadData = document.getElementById('btnReadData');
const readedDataHere = document.getElementById('readedDataHere');

btnInsert.onclick=function()
{
    const mykey=inputKey.value;
    const myvalue=inputValue.value;

    if(mykey&&myvalue)
    {
        localStorage.setItem(mykey,myvalue)
        location.reload();
    }
    else{
        alert("please must enter key and values")
    }
}

for(i=0;i<localStorage.length;i++)
{
    // alert(localStorage.length)
    const key=localStorage.key(i);
    const value=localStorage.getItem(key);
    lsOutput.innerHTML+=`
    </hr>
    <b>My key is ${key}</b></br>
    <b>My Value is ${value}</b>
    </hr></br>`;
}

if(localStorage.length===0)
{
    deleteAllBtn.style.display='none';
    autoFILL.innerHTML="add some key and value records"
}

if(localStorage.length!==0)
{
    document.getElementById('Records').innerHTML="Records Available in Local Storage"
}

btnAllDelete.onclick=function(){
    localStorage.clear();
    location.reload();
}