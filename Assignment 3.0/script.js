async function generatetoken(){
    let Tokenno = await fetch('http://localhost:12345/get_token');
    if(Tokenno.ok){
        let json = await Tokenno.json();
        document.getElementById("tokenprint").innerHTML = json.token;
    }
}

async function Register(){
    let info = {
        username : document.getElementById("username").value,
        data : document.getElementById("data").value,
        token : document.getElementById("token_no").value
    };
    let register = await fetch('http://localhost:12345/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        });
        let send = await register.json();
        if(send.error){
            alert( "ERROR : " + send.error );
            document.getElementById("status").innerHTML = "";
        }
}

async function Search(){
    let tokenfind = {
        token : document.getElementById("token_num").value
    };
    let search = await fetch('http://localhost:12345/get_data', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(tokenfind)
        });
        let ans = await search.json();
    if(ans.error==undefined){
        document.getElementById("user_data").innerHTML = "Username : " + ans.username + "<br>" + "Data : " + ans.data;}
    else{
        alert("ERROR : " + ans.error );
        document.getElementById("user_data").innerHTML = "";
    }    
}
