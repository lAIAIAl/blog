
export function formatTime(time){
    let date = time.split(" ")[0];
    return date.replace('-','年').replace('-','月')+'日';
}

export function decodeQuery(query){
    let paramsArray = query.split("?")[1].split("&");
    return  paramsArray.reduce((a,b)=>{a[b.split('=')[0]] = b.split('=')[1] ;return a},{})
}