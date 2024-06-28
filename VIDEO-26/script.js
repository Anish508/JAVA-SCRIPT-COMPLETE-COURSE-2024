let array = [8,3,2123,4342,1,123,442]


for (let i = 0; i < 10; i++) {
    // console.log(array[i]);
    let element = i
    if (element === 5) {
        console.log("5 is best number");
        
    }
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop ${i}`);
    for (let j = 1; j <=10; j++) {
      console.log(`${i} * ${j} = ${i*j}`);
    }
}


/* break and continue in loops */