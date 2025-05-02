const loadPhone = async(phoneName, isShowAll) =>{
    const url = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`)
    const data = await url.json()
    const phoneData = data.data;
    // console.log(phoneData)
    displayPhone(phoneData, isShowAll)
}



const displayPhone= (phone, isShowAll)  =>{
    const phoneContainer = document.getElementById('phone-container')
    // clear phone container card before adding new card
    phoneContainer.textContent = '';
    console.log('is show all', isShowAll)
    // show only 9 result
    if(!isShowAll){
        phone = phone.slice(0,9)
    }
   ;
    // see more result
    const seeAllContainer = document.getElementById('show-all-btn-c')
    if(phone.length > 12){
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
                <button onclick="handlePhoneDetails('${element.slug}')" class="btn btn-primary">Show Details</button>
              
            </div>
        
        `
        phoneContainer.appendChild(phoneCard)

    });

    // hide loading spinner
    toggleSpinner(false)
}

// handle search
const handleSearch = (isShowAll) => {
    // show loading spinner
    toggleSpinner(true)
    const getInput = document.getElementById('search-feild')
    const inputData = getInput.value;
    loadPhone(inputData, isShowAll)
}

// habdle loading spinner
const toggleSpinner = (isLoading) => {
    const getSpinner = document.getElementById('loading-spinner')
    if(isLoading){
        getSpinner.classList.remove('hidden')
    }
    else{
        getSpinner.classList.add('hidden')
    }
}

// handle show all button
const showAll = () => {
    handleSearch(true)
}

// handle phone details 
const handlePhoneDetails = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    const phonInfor = data.data
    showPhoneDetails(phonInfor)
    console.log(phonInfor)
}

// show phone details
const showPhoneDetails = (value) => {
    const phonBrand = document.getElementById('details-box')
    phonBrand.innerHTML = `
         <figure class="bg-[#0D6EFD0D] p-6">
              <img
                src="${value.image}"
                alt="phone" />
            </figure>
            <div class="card-body flex justify-center items-center">
              <h2 class="card-title">${value.name}</h2>

              <p class="text-center">A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <h2 class="card-title">$999</h2>
                
              
            </div>
    `

    
    // show the display model
    show_details_model.showModal()
}

// loadPhone()