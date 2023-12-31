const iconMenu = document.querySelector(".icon-menu");
const navMenu = document.querySelector(".nav");

window.addEventListener('load',()=>{
    
    if (!localStorage.getItem('notificacionMostrada')) {
        // Si no se ha mostrado, mostrar la notificación
        showNotification()

        // Marcar la notificación como mostrada en localStorage
        localStorage.setItem('notificacionMostrada', 'true');
    }else{
        setTimeout(() => {
            localStorage.removeItem('notificacionMostrada')
        },1800000)
    }


    function showNotification(){
    Notification
    .requestPermission()
    .then( result => {
    
        if( Notification.permission === result){

            const redSocial = new Notification('Santana & Asociados',{
                icon:'images/logoSyA.jpeg',
                body:'Visita nuestra red social'
             })

            redSocial.onclick = function() {
                window.open('https://www.instagram.com/servicios_juridicos_santana/?igsh=ZGNjOWZkYTE3MQ%3D%3D')
            }
            
        }
    })
    }
})


iconMenu.addEventListener('click', ()=>{
    event.stopPropagation();
    navMenu.classList.toggle('active')
   })

window.onclick = function (e) {
    navMenu.classList.remove('active')
   }
