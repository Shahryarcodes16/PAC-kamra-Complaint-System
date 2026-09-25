document.addEventListener('click',e=>{
 const btn=e.target.closest('[data-confirm]');
 if(btn&&!confirm(btn.dataset.confirm))e.preventDefault();
});
document.querySelectorAll('[data-other-select]').forEach(select=>{
 const target=document.querySelector(select.dataset.otherSelect);
 const toggle=()=>{if(target)target.style.display=select.options[select.selectedIndex]?.text==='Other'?'block':'none'};
 select.addEventListener('change',toggle);toggle();
});

// "Install App" button — appears when the browser offers installation (Android/Chrome)
let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{
 e.preventDefault();deferredPrompt=e;
 const nav=document.querySelector('.navlinks');if(!nav)return;
 if(document.getElementById('install-btn'))return;
 const btn=document.createElement('button');
 btn.id='install-btn';btn.className='btn small';btn.textContent='Install App';
 btn.onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;btn.remove();};
 nav.appendChild(btn);
});
window.addEventListener('appinstalled',()=>{const b=document.getElementById('install-btn');if(b)b.remove();});
