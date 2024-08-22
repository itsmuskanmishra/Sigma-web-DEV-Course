// let obj={
//     a:1,
//     b:"muskan"
// }

// console.log(obj)

// let animal={
//     eats:true
// };

// let rabbit ={
//     jumps:true 
// };


// rabbit._proto_=animal; //sets rabbit.[[prototype]]=animal

class Animal{
    constructor(name){
        this.name=name
        console.log("object is created....")
    }
    eats(){
        console.log("kha rha hu")
    }
    jumps(){
   console.log("kood rhi hu")
   } 
}
 class Lion extends Animal{
    constructor(name){
        super(name)
        this.name=name
        console.log("object is created and he is lion....")
    }
    eats(){
        super.eats()
        console.log("kha rha hu")
    }

}
     let a=new Animal("Bunny");
     console.log(a)

     let l=new Lion("shera")
     console.log(l)
 
