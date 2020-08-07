const names = ["youtube", "facebook", "instagram", "Netfilx","Amazon",];

// for(const n of names){
//     console.log(n);
// }

const symbols = {
    yt: "Youtube",
    ig: "instagram",
    fb: "Facebook",
    ds: "DarkSoul"

}

for(const n in symbols){
    console.log(`key is : ${n} and value is: ${symbols[n]}`);
}