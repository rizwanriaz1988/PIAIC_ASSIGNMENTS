/*
------Question 45 :---------- 
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.
*/

function car(manufacturer:string,model_name:string,color?:any,tyres_width?:any){
    
    let car_object = {
        Manufacturer:manufacturer,
        ModelName:model_name,
        Color:color,
        Tyres:tyres_width
    }
    console.log(car_object)

}

car("KIA","Sportage")
car("Honda","H20","white")
car("Honda","H20","white",44)

export{}