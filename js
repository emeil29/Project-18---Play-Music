const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');



btn2.addEventListener('click', ()=> {
console.log('click')
document.getElementById('mp').play()
})
btn1.addEventListener('click', ()=> {
    document.getElementById('mp').pause()
    })
