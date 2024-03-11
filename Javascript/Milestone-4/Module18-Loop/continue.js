var numbers = [21, 423, 65, 34, 32, 75, 86, 94, 16, 7];
for(var i = 0; i < numbers.length; i++){
    if(numbers[i] > 50){
        continue;
    }
    console.log(numbers[i]);
}