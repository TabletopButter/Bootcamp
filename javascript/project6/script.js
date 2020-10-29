var bgColor = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', 
'#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0','#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', 
'#283593','#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

var counter =0;

function bgColors(){
    var newbgColor  = setInterval(bgSeizure,1000);
}

function bgSeizure(){
    var d = new Date();
    var getTime = d.toLocaleTimeString();
    var locateDate = getTime.search(/am/ig);
    if(locateDate<0){
        var updateTime = d.toLocaleTimeString().replace(/pm/ig, '');
    }
    else{
        var updateTime = d.toLocaleTimeString().replace(/am/ig, '');
    }
    localTime.innerHTML = updateTime;

    document.getElementById("bgSeizures").style.background=bgColor[counter];
    counter++;

    if(counter==bgColor.length){
        return counter=0;
    }
}