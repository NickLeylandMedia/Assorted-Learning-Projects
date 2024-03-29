/* Objects */
let log = {
    Active() {
        return log.Full.slice(-3).reverse()
    }, 
    Full : [],
    DelLog: [],
}

let gameRefs = {
    Balance() {
        return this.Income + this.Expense
    },
    Expense: 0,
    Income: 0,
    ID: 0,
    Del: false,
    Targ: '',
    Queries: [],
}

/* Classes */
class Transaction {
    constructor(text, type, val) {
        this.Text = text
        this.Type = type
        this.Val = +val
        this.ID = assignID()
        this.Del = false
    }
}

let transTypes = [
    {Name: 'Car Insurance', ImageOne: './img/car.svg', ImageTwo: './img/shield.svg'},
    {Name: 'Car Maintenance', ImageOne: './img/car.svg', ImageTwo: './img/checkmark.svg'},
    {Name: 'Car Registration', ImageOne: './img/car.svg', ImageTwo: './img/scroll.svg'},
    {Name: 'Car Repair', ImageOne: './img/car.svg', ImageTwo: './img/wrench.svg'},
    {Name: 'Electric Bill', ImageOne: './img/bolt.svg', ImageTwo: './img/bill.svg'},
    {Name: 'Electrical Work', ImageOne: './img/bolt.svg', ImageTwo: './img/wrench.svg'},
    {Name: 'Flights', ImageOne: './img/plane.svg', ImageTwo: './img/lockbag.svg'},
    {Name: 'Games', ImageOne: './img/die.svg', ImageTwo: './img/controller.svg'},
    {Name: 'Gas', ImageOne: './img/pump.svg', ImageTwo: './img/car.svg'},
    {Name: 'Groceries', ImageOne: './img/lettuce.svg', ImageTwo: './img/apple.svg'},
    {Name: 'Home Improvement', ImageOne: './img/hammer.svg', ImageTwo: './img/house.svg'},
    {Name: 'Hotels', ImageOne: './img/bed.svg', ImageTwo: './img/bell.svg'},
    {Name: 'Meals', ImageOne: './img/burger.svg', ImageTwo: './img/tobox.svg'},
    {Name: 'Movies', ImageOne: './img/popcorn.svg', ImageTwo: './img/clapboard.svg'},
    {Name: 'Phone Bill', ImageOne: './img/telephone.svg', ImageTwo: './img/bill.svg'},
    {Name: 'Plumbing Work', ImageOne: './img/shower.svg', ImageTwo: './img/wrench.svg'},
    {Name: 'Taxes', ImageOne: './img/building.svg', ImageTwo: './img/bill.svg'},
    {Name: 'Water Bill', ImageOne: './img/water.svg', ImageTwo: './img/bill.svg'},
    {Name: '', ImageOne: '', ImageTwo: ''},
    {Name: '', ImageOne: '', ImageTwo: ''},
    {Name: '', ImageOne: '', ImageTwo: ''},
    {Name: '', ImageOne: '', ImageTwo: ''},
]


/* Functions */
//Submit Transaction
function submitTrans() {
    let text = document.getElementById('transTitle').value
    let val = document.getElementById('transVal').value
    let type = document.getElementById('transType').value
    log.Full.push(new Transaction(text, type, val))
    clearField(['transVal', 'transTitle'])
}

//Clear Fields 
function clearField(targ) {
    if (Array.isArray(targ)) {
        targ.forEach((cur) => {
            document.getElementById(cur).value = ''
        })
    } else {
        document.getElementById(targ).value = ''
    }
}

//Assign Unique ID to Log Item
function assignID() {
    let beginVal = gameRefs.ID
    gameRefs.ID = gameRefs.ID += 1
    return beginVal    
}

//Render Short History
function transItemRender(arr, par, clr) {
    //Logic for Clearing Elements
    if (clr === true) {
        document.querySelectorAll('.histItem').forEach(e => e.remove());
    } 
    
    arr.forEach((cur) => {
        const parent = document.getElementById(par)
        const temp = document.getElementById('historyItem').content.cloneNode(true)
        //Main Content - Title
        temp.querySelector('.histItemTitle').innerHTML = cur.Text
        //Main Content - Type
        temp.querySelector('.historyItemType-text').innerHTML = cur.Type 
        //Set ID
        temp.querySelector('.histItem').id = cur.ID

        //Positive - Negative Style + Value Population
        if (cur.Val > 0) {
            temp.querySelector('.histItem').classList.add('pos')
            temp.querySelector('.histItemValue').innerHTML = `+$${cur.Val}`
        } else {
            let copy = cur.Val
            temp.querySelector('.histItem').classList.add('neg')
            temp.querySelector('.histItemValue').innerHTML = `-$${copy *= -1}`
        }

        //Change Type Images
        let imgNodes = temp.querySelectorAll('.historyItemImg')
        let convNodes = Array.from(imgNodes)
        let index = getIndex(transTypes, cur.Type)
        convNodes[0].src = transTypes[index].ImageOne
        convNodes[1].src = transTypes[index].ImageTwo

        //Append to Document
        parent.appendChild(temp)
    })
    //Expense Calculation + Population
    let neg = log.Full.filter(val => val.Val < 0)
    let negArr =[]
    let negVals = neg.forEach((cur) => negArr.push(cur.Val) )
    let negOut = negArr.reduce((a,b) => a += b, 0)
    gameRefs.Expense = negOut

    //Income Calculation + Population
    let pos = log.Full.filter(val => val.Val >= 0)
    let posArr =[]
    let posVals = pos.forEach((cur) => posArr.push(cur.Val) )
    let posOut = posArr.reduce((a, b) => a += b, 0)
    gameRefs.Income = posOut
}

function deleteMode() {
    document.getElementById('delEvents').classList.toggle('delReady')
    gameRefs.Queries.forEach((cur) => {
        cur.addEventListener('click', (e) => {
            let id = e.target.closest('.histItem').id
            if (document.getElementById('delEvents').classList.contains('delReady') && !e.target.classList.contains('delReady')) {
                e.target.closest('.histItem').classList.toggle('delReady')
                log.Full[indexItemID(log.Full, id)].Del = true
            } else {
                e.target.closest('.histItem').classList.toggle('delReady')
                log.Full[indexItemID(log.Full, id)].Del = false
            }
        })
    })
}

function confDel() {
    let targets = log.Full.filter((term) => term.Del === true)
    let idArr = targets.map((term) => term.ID)
    idArr.forEach((cur) => {
        let index = indexItemID(log.Full, cur)
        log.Full.splice(index, 1)
        updateUI()
        updateUI()
    })
}

//Universal Render
function univRender(elem, cont) {
    document.getElementById(elem).innerHTML = cont
}

//Get Index of Item in Array
function getIndex(arr, srch) {
    for (i = 0; i < arr.length; i++) {
        if (srch == arr[i].Name) {
            return i
        }
    }
    return "not in array"
}

function indexItemID(arr, srch) {
    for (i = 0; i < arr.length; i++) {
        if (srch == arr[i].ID) {
            return i
        }
    }
    return "not in array"
}


//Update UI
function updateUI() {
    let expenseVal = gameRefs.Expense
    //Balance
    univRender('balText', `$${gameRefs.Balance()}`)
    //Expense
    univRender('expText', `$${expenseVal *= -1}`)
    //Income
    univRender('incText', `$${gameRefs.Income}`)
    //History
    transItemRender(log.Active(), 'history-cont', true)
}


document.getElementById('transaction').addEventListener('submit', (e) => {
    e.preventDefault()
    submitTrans()
    updateUI()
    updateUI()
})

document.getElementById('showHist').addEventListener('click', (e) => {
    document.getElementById('fullHist').classList.toggle('hidden')
    transItemRender(log.Full, 'fullHist-cont')
})

document.getElementById('closeFullHist').addEventListener('click', (e) => {
    document.getElementById('fullHist').classList.toggle('hidden')        
})

setInterval(() => {
    gameRefs.Queries = Array.from(document.querySelectorAll('#fullHist-cont .histItem'))
}, 5);






updateUI()