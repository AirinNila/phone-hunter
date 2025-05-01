const loadPhone = async() =>{
    const url = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await url.json()
    const phoneData = data.data;
    console.log(phoneData)
}

loadPhone()