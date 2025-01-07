const arrSort =(val)=>{
    // let nums =[]
    // let str =[]
    // for (const item of val) {
    //     if (typeof(item) === 'string') {
    //         str.push(item)
    //     } else {
    //         nums.push(item)
    //     }
    // }
    // console.log(str);
    // str.sort()
    // nums.sort((a,b)=>a-b)
    // console.log(str);
    // return [...nums,...str]

    const order = {
        Ace:1,
        2:2,
        3:3,
        4:4,
        5:5,
        6:6,
        7:7,
        8:8,
        9:9,
        10:10,
        Jack:11,
        Queen:12,
        King:13,
    }

    return val.sort((a,b)=> order[a]-order[b])
}

// Usage
const arr = ['Jack', 8, 2, 2, 6, 'King', 5, 3, 'Queen', 'Ace', 'King', 'Queen']
console.log(arrSort(arr));