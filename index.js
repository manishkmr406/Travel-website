let bar=document.querySelector('.fa-bars');
    bar.addEventListener('click',()=>{
        let list=document.querySelector('ul');
        list.classList.toggle('active-bar');
    });