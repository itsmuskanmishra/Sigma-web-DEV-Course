let a=prompt("enter a number")

let b=prompt("enter second number")
if(isNaN(a)||isNaN(b)){
    throw syntaxError ("sorry this is not allowed")
}

let sum= parseInt(a)+parseInt(b)

function main(){
    let x=1;
    try {
        
        console.log("the sum is",sum*x)
        return true
    
    } catch (error) {
        console.log("error aa gya bhai")
        return false
        
    }
    finally{
        console.log("files are being closed and db connection is being closed")
    }
}

let c= main()