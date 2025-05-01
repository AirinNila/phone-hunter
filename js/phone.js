const loadPhone = async(phoneName) =>{
    const url = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`)
    const data = await url.json()
    const phoneData = data.data;
    // console.log(phoneData)
    displayPhone(phoneData)
}



const displayPhone= phone =>{
    const phoneContainer = document.getElementById('phone-container')
    // clear phone container card before adding new card
    phoneContainer.textContent = '';
    // show only 9 result
    phone = phone.slice(0,9);
    // see more result
    const seeAllContainer = document.getElementById('show-all-btn-c')
    if(phone.length < 12){
        seeAllContainer.classList.remove('hidden')
    }
    phone.forEach(element => {
        // console.log(element)
        const phoneCard = document.createElement('div')
        phoneCard.classList= `card bg-white w-80 border-2 border-[#CFCFCF] p-4`;
        phoneCard.innerHTML= `
          
            <figure class="bg-[#0D6EFD0D] p-6">
              <img
                src="${element.image}"
                alt="phone" />
            </figure>
            <div class="card-body flex justify-center items-center">
              <h2 class="card-title">${element.phone_name}</h2>

              <p class="text-center">A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <h2 class="card-title">$999</h2>
                <button class="btn btn-primary">Show Details</button>
              
            </div>
        
        `
        phoneContainer.appendChild(phoneCard)

    });

   
}

// handle search
const handleSearch = () => {
    const getInput = document.getElementById('search-feild')
    const inputData = getInput.value;
    loadPhone(inputData)
}

// loadPhone()