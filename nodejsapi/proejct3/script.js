let endpoint = `https://api.coindesk.com/v1/bpi/currentprice.json`


let btn = $('#btn');

// let radio = $("input[type='radio'][name='currency']:checked").val();

btn.click(function(){
    let selection = $("input[type='radio'][name='currency']:checked").val();
    if(selection==undefined)
        alert("Please select a currency.")    
    else{
    fetch(endpoint)
    .then(function(response){
        if(response.ok)
        return response.json()

        throw Error(response.statusText)
    })
    .then(function(data){
        $('#result').html(data.bpi[selection].symbol+" "+data.bpi[selection].rate)
    })
    .catch()
        }

});
