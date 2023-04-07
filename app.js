const root = document.getElementById( 'root' )
const textarea = document.getElementById( 'textarea' )
const pruebaaaa = document.getElementById( 'pruebaaaa' )

textarea.textContent = root.clientHeight

addEventListener( 'resize', e =>{  
    textarea.textContent = root.clientHeight
    pruebaaaa.style.height = `${ root.clientHeight }px`
} )

setTimeout(()=>{
while(true){
 const time = Date.now()
 console.log( time )
 textarea.innerHTML = time
}
},10000)

 
