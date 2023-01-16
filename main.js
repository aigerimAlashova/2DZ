let btn = document.querySelector('.red')
let btnOne = document.querySelector('.yellow')
let btnTwo = document.querySelector('.green')
let btnReset = document.querySelector('.btn-reset')


btn.addEventListener('click', () => {
    setTimeout(()=>{
    document.body.style.background = 'red';
} , 2000)
})

btnOne.addEventListener('click',() =>{
    setTimeout(()=>{
    document.body.style.background = 'yellow';
},2000)
})

btnTwo.addEventListener('click',() =>{
    setTimeout(()=>{
    document.body.style.background = 'green';
},2000)
})

btnReset.addEventListener('click',()=>{
    setTimeout(()=>{
     document.body.style.background = 'aliceblue';
    },1000)
})

