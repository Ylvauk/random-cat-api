const idInput=document.querySelector('.input')
const randomButton=document.querySelector('.randomButton')
const form=document.querySelector('form')
const randomCatImage=document.querySelector('.randomCatImage')
const randomCat=document.querySelector('.randomCat')
const formInput=document.querySelector('.input')
const categoryCat=document.querySelector('.categoryCat')

const getCat = (event) => {
    const url='https://api.thecatapi.com/v1/images/search'
    event.preventDefault()
    fetch(url, {
        headers: {
            ['x-api-key']: '14ab8776-e644-4ae3-b2ed-2b3fcffa191c'
        }
    })
    .then(res => {
        return res.json()
    })
    .then(data=>{
        randomCat.innerHTML="<img src='"+data[0].url+ "'>"
        console.log(data.url)
    })
    .catch(err => {
        console.log(err)
        image.innerText = 'ERROR'
      })
    }
    
const categoryCatFunction = (event) => {
    const urlCategory='https://api.thecatapi.com/v1/images/search?category_ids='
    const enteredCategory=formInput.value
    event.preventDefault()
    fetch(urlCategory+enteredCategory, {
        headers: {
            ['x-api-key']: '14ab8776-e644-4ae3-b2ed-2b3fcffa191c'
        }
    })
    .then(res => {
        return res.json()
    })
    .then(data=>{
        categoryCat.innerHTML="<img src='"+data[0].url+ "'>"
        console.log(data.url)
    })
    .catch(err => {
        console.log(err)
        image.innerText = 'ERROR'
      })
    }
    
    randomButton.addEventListener('click',getCat)
    form.addEventListener('submit',categoryCatFunction)
    