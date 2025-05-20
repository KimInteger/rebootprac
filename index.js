const rootDir = document.getElementById('root')

console.log(rootDir)
console.dir(rootDir)

rootDir.style.width = '100vw'
rootDir.style.height = '100vh'


const colorList = ['#272727', '#f8e2f3', '#000000','#999999', '#ffffff'];

const changeBtn = document.createElement('button')
changeBtn.textContent = '색상변경'

changeBtn.addEventListener('click',()=>{
  let randomColor = Math.floor(Math.random()*colorList.length)
  rootDir.style.backgroundColor = colorList[randomColor]
})

rootDir.appendChild(changeBtn);