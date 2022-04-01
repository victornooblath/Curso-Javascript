let valores = [3,8,4,5,9];
valores.sort()
console.log([0])

// for(let pos=0; pos < valores.length; pos ++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for( let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}