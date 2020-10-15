let myColor = ["Red", "Green", "White", "Black"];
let numStr = '025468';
let str =  'The Quick Brown Fox';

function addString(arr) {
    return  arr.toString();
}

function breakString(str) {
        let nums = numStr.split('');

    for (let i = 0; i < nums.length -1; i++) {
        if(nums[i] % 2 == 0 && nums[i+1] % 2 ==0){
            nums.splice(i+1,0,"-");
            i++
        }
    }
    console.log(nums);
}

function changeChar(str) {
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    for (let i = 0; i <str.length ; i++) {
        if (UPPER.indexOf(str[i]) !== -1){
            result.push(str[i].toLowerCase());
        } else if (LOWER.indexOf(str[i]) !== -1){
            result.push(str[i].toUpperCase());
        } else {
            result.push(str[i]);
        }
    }
    console.log(result.join(""));
}
changeChar(str);