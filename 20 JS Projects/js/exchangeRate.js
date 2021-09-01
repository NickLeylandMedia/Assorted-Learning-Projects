elems = {
    currency_one: document.getElementById('currency-one'),
    amount_one: document.getElementById('amount-one'),
    currency_two: document.getElementById('currency-two'),
    amount_two: document.getElementById('amount-two'),
    rate: document.getElementById('exchangeRate'),
    swap: document.getElementById('swapButton')
}

/* Functions */
function calculateA() {
    const currency_one = elems.currency_one.value
    const currency_two = elems.currency_two.value
    
    fetch(`https://v6.exchangerate-api.com/v6/5334cc75a898c416e42bd0ee/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            const rate = data.conversion_rates[currency_two]
            elems.rate.innerHTML = `1 ${currency_one} equals ${rate} ${currency_two}`

            elems.amount_two.value = (elems.amount_one.value * rate).toFixed(2)
        
        })
}

function calculateB() {
    const currency_one = elems.currency_one.value
    const currency_two = elems.currency_two.value
    
    fetch(`https://v6.exchangerate-api.com/v6/5334cc75a898c416e42bd0ee/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            const rate = data.conversion_rates[currency_two]
            elems.rate.innerHTML = `1 ${currency_one} equals ${rate} ${currency_two}`

            elems.amount_one.value = (elems.amount_two.value / rate).toFixed(2)
        
        })
}

/* Event Listeners */
elems.currency_one.addEventListener('change', calculateA)
elems.amount_one.addEventListener('input', calculateA)
elems.currency_two.addEventListener('change', calculateB)
elems.amount_two.addEventListener('input', calculateB)
elems.swap.addEventListener('click', () =>{
    const temp = elems.currency_one.value
    elems.currency_one.value = elems.currency_two.value
    elems.currency_two.value = temp
    calculateA()
})