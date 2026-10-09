let Data = [];

async function DataEx() {
    const responsive = await fetch('data.json');
    Data = await responsive.json();

    ShowCards(Data);
}
   function ShowCards(data){

    document.querySelector('.cards').innerHTML = '';

     data.forEach((e => {
        let card = document.createElement('div');
        card.className = 'card';

        // Add Data the html

        card.innerHTML = `
        <div class="card-header">
        <img src= "${e.logo}" alt="">
        <h2>${e.name}</h2>
        </div>
        
        <p>${e.description}</p>


        <div class="actions">
        <button class ="remove">Remove</button>
        <label class="switch">
        <input type="checkbox"${e.isActive ? 'checked' : ''}>
        <span class="slider"></span>
        </label>
        </div>`

        let remove = card.querySelector('.remove');

        remove.addEventListener('click', () => {
            card.remove();
        })

        document.querySelector('.cards').appendChild(card)
    }))
   }

DataEx()



let AllButton = document.querySelectorAll('.buttons button');

AllButton.forEach((button) => {

    button.addEventListener('click', () =>{
        // remove color the button
        AllButton.forEach((btn) => btn.classList.remove('active'))
        // Add color the button
        button.classList.add('active')

        // All Cards
        if (button.textContent.trim() === 'All'){

            ShowCards(Data)
        // in Active Cards
        } else if (button.textContent.trim() === 'Active'){
            let active = Data.filter((e) => e.isActive === true)

            ShowCards(active)
        // No Active Cards
        } else if (button.textContent.trim() === 'Inactive') {
            let inactive = Data.filter((e) => e.isActive === false)

            ShowCards(inactive)
        }
    })
})

// Dark mood 
let btn = document.querySelector('.dark button img');

btn.addEventListener('click', () => {
    // Add light mood
    document.body.classList.toggle('light');
    
    if (document.body.classList.contains('light')){
        btn.src= './assets/images/icon-moon.svg'
    } else {
        btn.src= './assets/images/icon-sun.svg'
    }

})




