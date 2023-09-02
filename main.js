// const ROOT = document.querySelector('body')

// const BtnModal = document.createElement('button')
// ROOT.append(BtnModal)
// BtnModal.textContent = 'click blac'
// BtnModal.style.cssText = `
// background-color: rgb(0, 0, 0);
// height: 50px;
// color: white;
// font-size: 1rem;
// margin: 0 auto;
// border-radius: 50px;
// border: none;
// `

// BtnModal.addEventListener('click', () => {
//     BtnModal.style.backgroundColor = 'green'
// })
const blacId = document.querySelector('#blac')
const ylowId = document.querySelector('#ylow')
const body = document.querySelector('body')

blacId.addEventListener('click', onColorChanhe)
ylowId.addEventListener('click', onColorgray)


function onColorChanhe(){
body.style.backgroundColor = 'black'

}
function onColorgray(){
    body.style.backgroundColor = 'grey'
}
