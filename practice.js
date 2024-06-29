//  first task
function foo(){
    console.log('foo');
    bar();
}
foo();
function bar(){
    console.log('bar');
}



// second task
function make_avg(num1, num2, num3){
    var avg = (num1 + num2 + num3) / 3;
    console.log(avg);
}

make_avg(10, 10, 10);




// third task
var arr = [20, 20, 20];
var size = 3;
function make_avg(arr, size){
    var i = 0;
    var sum = 0;
    while(i < size){
        sum += arr[i];
        i++;
    }
    var avg = sum  / size;
    console.log(avg);
}

make_avg(arr, size);




// fifth task
function odd_even(num){
    if(num % 2 == 0){
        console.log('Even');
    }
    else{
        console.log('Odd');
    }
    return;
}
odd_even(10);




// sixth task
function odd_even(num){
    if(num % 2 == 0){
        console.log('Even');
    }
    else{
        console.log('Odd');
    }
}
odd_even(10);




// seventh task
var signal = 'green';
if(signal == 'green'){
    console.log('You should cross the road');
}
else if(signal == 'red'){
    console.log('You are in danger');
}
else{
    console.log('You should stop');
}




// switch
switch(signal){
    case 'green':
        console.log('You should cross the road');
        break;
    case 'red':
        console.log('You are in danger');
        break;
    case 'yellow':
        console.log('You should stop');
        break;
}