const notifications = document.querySelector('.notifications');
const buttons=document.querySelectorAll('.buttons .btn');
const toastDetails = {
    timer:5000,
    success:{
        icon:"fa-circle-check",
        text:"This is a success toast"
    },
    error:{
        icon:"fa-circle-xmark",
        text:"This is an error toast"
    },
    warning:{
        icon:"fa-triangle-exclamation",
        text:"This is a warning toast"
    },
    info:{
        icon:"fa-circle-exclamation",
        text:"This is an info toast"
    }
}
const removeToast=(toast)=>{
    toast.classList.add('hide');
    if(toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(()=>toast.remove(),500)
}
const createToast = (id) =>{
    const {icon,text} = toastDetails[id];
    const toast = document.createElement('li');
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="column">
    <i class="fa-solid ${icon}"></i>
    <span>${text}</span>
</div>
<div>
    <i class="fa-solid fa-x" onClick='removeToast(this.parentElement)'></i>
</div>`;
notifications.appendChild(toast);
toast.timeoutId=setTimeout(()=>removeToast(toast),toastDetails.timer)
}
buttons.forEach((button)=>{
    button.addEventListener('click',()=> createToast(button.id));
})