const root = document.getElementById( 'root' )
const textarea = document.getElementById( 'textarea' )
const pruebaaaa = document.getElementById( 'pruebaaaa' )

addEventListener( 'resize', e =>{  
    textarea.textContent = root.clientHeight
    pruebaaaa.style.height = `${ root.clientHeight }px`
} )