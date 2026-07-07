const revealItems = document.querySelectorAll('.section-reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); }});
},{threshold:.14});
revealItems.forEach(item=>observer.observe(item));

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuButton?.addEventListener('click',()=>{
  mobileNav.classList.toggle('open');
  mobileNav.setAttribute('aria-hidden', mobileNav.classList.contains('open') ? 'false' : 'true');
});
mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));
