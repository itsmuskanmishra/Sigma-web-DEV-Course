const fs = require("fs")

console.log(fs)

console.log("starting")
// fs.writeFileSync("muskan.txt","muskan is a good girl")


fs.writeFile("muskan2.txt","muskan is a good girl",()=>{
    console.log("done")
    fs.readFile("muskan2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("muskan.txt","muskanobo",(e,d)=>{
    console.log(d)
})
console.log("ending")    