import fs from "fs/promises"

let a= await fs.readFile("muskan.txt")

let b= await fs.appendFile("muskan.txt","\n\n\n\nthis is amazing promise")

 console.log(a.toString())