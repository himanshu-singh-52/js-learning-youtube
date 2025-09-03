// for(let i=1;i<=10;i++){
//     console.log(`Outer loop value: ${i}`);
//     for(let j=1;j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`);   
//     }
// }

// continue and break

// for(let i=1;i<=10;i++){
//     if(i==5){
//         console.log(`${i} is detected`);
//         break;
//     }
//     console.log(`value is ${i}`);
// }

for(let i=1;i<=10;i++){
    if(i==5){
        console.log(`${i} is detected`);
        continue;
    }
    console.log(`value is ${i}`);
}