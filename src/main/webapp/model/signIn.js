if(!window.location.href.includes("personalMatchUps")){
    document.querySelector("#signUpButton").addEventListener("click", function(){
        let form = new FormData(document.querySelector("#POSTInlog"));
        let data = {
            name: form.name.value
        }

        fetch("/index.html/signIn", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (resp){
            return resp.json();
        }).then(function (result){
            console.log(result);
        });
    });
}