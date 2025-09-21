function processing(){let getArray = document.getElementById('input').value;
    document.getElementById('input').vlaue = '';
    document.getElementById('input').focus();
    getArray = getArray.trim();
    let array = getArray.split(' ');
    let unique = [];
    for(let key of array){if(!unique.includes(key)){unique.push(key)}}
    let display = document.getElementById('display');
    unique = unique.join(' ');
    display.value = unique;
}

// method 2 is more simple for unique array finding 
/*let arr = ['a','b','b','c','d','d','e'];
console.log(arr,typeof arr);
let array = [];
for(let i = 0 ;i < arr.length;i++){
    if(arr[i] !== arr[i+1]){array.push(arr[i])}
    else{arr[i] = array}
}
console.log(array)*/
