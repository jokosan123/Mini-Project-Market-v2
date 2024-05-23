const creatInfo = () => {
    // console.log('clicked');
const name = document.getElementById('name').value 
const price = document.getElementById('price').value
console.log(name);
console.log(price);
const condition = document.querySelector("input[name = Condition]:checked").value
console.log(condition);
const warehouse = document.getElementById('warehouse').value
console.log(warehouse);
const courier = document.querySelectorAll('input[name = courier]:checked') 
let courierList = ''
courier.forEach((courier)=>{

courierList += `${courier.value} `

})
console.log(courierList);

document.getElementById('result').innerHTML = `Name : ${name} <br> 
Price: ${price} <br> Condition ${condition} <br> Warehouse :${warehouse} <br> Courier : ${courierList}`
}

/*git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jokosan123/Mini-Project-Market-v2.git
git push -u origin main*/ 