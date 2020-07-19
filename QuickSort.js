var numbers = [];
var number;

for (i = 0; i < 5; i++){
numbers[i] = parseInt(prompt());
}

number = numbers.length;
quickSort(0, number-1);

for (i = 0; i < 5; i++){
    console.log(numbers[i]);
}

function swap(i,j){
    temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
}

function partition(low,high){
    var pivot = numbers[high];
    var i = (low-1);
    for(var j=low; j<high; j++){
        if (numbers[j]<pivot){
            i++;
            swap(i,j);
        }
    }
    swap(i+1,high);
    return i+1;
}

function quickSort(low, high){
    if (low < high){
        var pi = partition(low,high);
        quickSort(low,pi-1);
        quickSort(pi+1, high);
    }
}
