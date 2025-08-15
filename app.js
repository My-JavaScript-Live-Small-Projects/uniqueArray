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