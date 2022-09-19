var xlsx = require("xlsx");

var wb = xlsx.readFile("Lutosa OSB Texts (1).xlsx");

var ws = wb.Sheets["Portal Fron-end"];

var data = xlsx.utils.sheet_to_json(ws);


let stuct = [...data]
let newObj2 = {}
let objName = ''

stuct.forEach((obj, index) => {
        if (Object.keys(obj).length === 1) {
            newObj2[obj.Keywords] = {}
            objName = obj.Keywords
     }else{
         newObj2[objName][obj.Keywords] = obj.English
     }
 })
 console.log(newObj2);



