const mep=new Map()
mep.set("firstName","Jalol");
mep.set(1,true);
mep.set(true,"Win")
console.log(mep)

console.log(mep.size)
console.log(mep.get(1))
console.log(mep.has("firstName"))
console.log(mep.delete(1))
console.log(mep)
mep.clear()
console.log(mep)
const arr=[1,2,3];
const newMap=new Map();
newMap.set("lastName","Yaxyoyev");
newMap.set(20,"age")
newMap.set(true,false);
newMap.set(arr,"Arrayni keyga qoshish")
console.log(newMap)


for (let [key,value] of newMap){
    console.log(key,value)
}

const obj={
    job:"Student",
    age:21,
    city:"Shahrisabz"
}

const rest=new Map(Object.entries(obj))
console.log(rest)

const array=[...rest.entries()]
console.log(array)