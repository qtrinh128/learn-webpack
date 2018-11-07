function createObj(){
    let td = navigator.appName;
    let obj = null;
    if(td === 'Microsoft Internet Explorer'){
        obj = new ActiveXObject('Microsoft.XMLHTTP');
    }else{
        obj = new XMLHttpRequest();
    }
    return obj;
}
let http = createObj();
const address = 'http://www.colr.org/json/color/random';



export const getData = () => {
    http.open('get', address, true);
    http.onreadystatechange = process;
    http.send(null);
}
function process(){
    if(http.readyState === 4 && http.status === 200){
        let text = http.responseText;
        let result = JSON.parse(text);
        document.getElementById('div-color').style.backgroundColor = `#${result.new_color}`;

    }
}