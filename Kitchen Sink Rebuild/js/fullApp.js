/* Snippet Objects */
/* Date API */
let date = {
    //Current Date
    current() {
        let date = new Date()
        renderSnipContent('full', 'Current Year:', 'append')
        renderSnipContent('full', date, 'append')
        return date
    },

}

/* Intersection Observer API Snippet */

/* Javascript Classes */


/* Full Apps - JSON Package */
let appPack = []

/* Snippets - JSON Package */
let snipPack = [
    //{Name: 'IntersectionObserver', DisplayName: 'Intersection Observer API', ShortName: 'I-O/API', Description: '', Icon: './img/arrownsew.svg', Image: 'img.jpg', Enabled: true},
    {Name: 'Date', DisplayName: 'Date API', ShortName: 'Date', Description: 'Get and manipulate the date and time.', Icon: './img/calendar.svg', Image: 'img.jpg', Enabled: true},
    {Name: 'IntersectionObserver', DisplayName: 'Intersection Observer API', ShortName: 'I-O/API', Description: '', Icon: './img/arrownsew.svg', Image: 'img.jpg', Enabled: true},
    {Name: 'Objects', DisplayName: 'Objects', ShortName: 'Obj', Description: 'All about objects, and how to utilize them.', Icon: './img/obj.svg', Image: 'img.jpg', Enabled: true},
]

/* Snippet Content - JSON Package */
let snipContentPack = [
    {Name: 'Date', Options: [{Text: 'Show Current Date', Func: date.current},]},
    {Name: 'IntersectionObserver', Options: []},
    {Name: 'Objects', Options: []},
]


/* Functions - Supporting */
//Get Index of Item in Array
function getIndex(arr, term, param){
    for (let i = 0; i < arr.length; i++) {
        if (term == arr[i][param]) {
            return i
        }
    }
    return 'Not in array!'
}

/* Functions - UI Updating/Rendering */
/* Scroll Window */
//Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

//Scroll to Left
function scrollToLeft() {
    window.scrollTo({
        left: 0,
        behavior: 'smooth'
    })
}

//Scroll to Right
function scrollToRight() {
    window.scrollTo({
        left: window.innerWidth,
        behavior: 'smooth'
    })
}

//Clear an Elements Content
function clearContent(id) {
    if (Array.isArray(id)) {
        id.forEach((el) =>{
            document.getElementById(el).innerHTML = ''
        })
    } else {
        document.getElementById(id).innerHTML = ''
    }
}

//Append an element/render it in the snippet display window
function renderSnipContent(size, content, method) {
    const renderWindow = document.getElementById('renderContainer')
    let block = document.createElement('div')
    let para = document.createElement('p')
    para.innerText = content
    block.appendChild(para)
    if (size == 'half') {
        block.classList.add('rendHalf')
    } 

    if (size == 'quart') {
        block.classList.add('rendQuart')
    }

    if (size == 'full') {
        block.classList.add('rendWhole')
    }

    //Append Method Logic
    if (method == 'append') {
        renderWindow.appendChild(block)
    } else {
        clearContent(renderWindow.id)
        renderWindow.appendChild(block)
    }
  

}

//Render Snippet Grid from Package 
function renderSnippetGrid() {
    //Designate grid to append children to
    const grid = document.getElementById('snipGrid')
    //Generate grid item for each item in array
    snipPack.forEach((snip) => {
        //Grab template for grid items from document
        const itemTemp = document.getElementById('snippet-grid-item').content.cloneNode(true)
        //Replace image in template
        itemTemp.querySelector('.snipItemImg').src = snip.Icon
        //Replace title in template
        itemTemp.querySelector('.snipItemTitle').innerHTML = snip.ShortName
        //Replace paragraph in template
        itemTemp.querySelector('.snipItemDesc').innerHTML = snip.DisplayName
        //Assign ID to grid item
        itemTemp.querySelector('.snipGridItem').id = snip.Name
        //Append child to main grid
        grid.appendChild(itemTemp)
    })

    //Add event listener to grid items
    grid.addEventListener('click', (e) =>{
        let sel = e.target.closest(".snipGridItem").id
        let snipIndex = getIndex(snipPack, sel, 'Name')
        

        let snipContentIndex = getIndex(snipContentPack, sel, 'Name')
        const optParent = document.getElementById('snipOptions')

        clearContent('renderContainer')
        clearContent('snipOptions')

        if (snipContentPack[snipContentIndex].Options.length > 0) {
            snipContentPack[snipContentIndex].Options.forEach((cur) =>{
                const button = document.createElement('button')
                button.innerText = cur.Text
                button.classList.add('snipOptButt')
                button.addEventListener('click', function() {
                    cur.Func()
                })
                optParent.appendChild(button)
            })
        }
        
        document.getElementById('snipRenderTitle').innerHTML = snipPack[snipIndex].DisplayName
        document.getElementById('snipRenderDesc').innerHTML = snipPack[snipIndex].Description

    


        scrollToRight()

    })

}
//Render Snippet Options

/* Event Listeners */
document.getElementById('backArrow').addEventListener('click', scrollToLeft)


//Call At Start
renderSnippetGrid()

