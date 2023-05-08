function removeUrlAnchor(url){
    let myURL = "";
    for(let i = 0; i < url.length; i++){
        myURL = myURL + url[i];
        if(url[i] == '#'){
            return myURL.slice(0, -1);
        }
    }
    return myURL;
}

console.log(removeUrlAnchor('www.codewars.com#about')); // 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')); // 'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor('www.codewars.com/katas/')); // 'www.codewars.com/katas/'