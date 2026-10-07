var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((()=>{var e=[{label:`Accueil`,href:`/`},{label:`Avantages`,href:`/#advantages`},{label:`Comment ça fonctionne`,href:`/#steps`},{label:`Calculateur`,href:`/#calculator`},{label:`FAQ`,href:`/#faq`},{label:`Faire une demande`,href:`/#application`}];function t(){return`

      <div class="container header-inner">
        <a href="/" class="brand" aria-label="PrêtNord - Accueil">
          <span class="brand-mark">
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g fill="none" fill-rule="evenodd">
                <rect width="120" height="120" rx="28" fill="#F7F7F2"/>
                <path d="M27 78V42h18c12 0 18 7 18 18s-6 18-18 18H27zm15-12h3c5 0 8-2 8-6s-3-6-8-6h-3v12z" fill="#0B5D4B"/>
                <path d="M68 35h18l-13 34h-18L68 35zm7 0h16l-8 21h-16l8-21z" fill="#F2A33A"/>
                <circle cx="88" cy="82" r="10" fill="#0B5D4B"/>
                <path d="M83 82h10M88 77v10" stroke="#F7F7F2" stroke-width="3" stroke-linecap="round"/>
              </g>
            </svg>
          </span>
          <span>PrêtNord</span>
        </a>
        <nav class="main-nav" aria-label="Menu principal">${e.map(e=>`<a href="${e.href}">${e.label}</a>`).join(``)}<a href="/#application" class="btn btn-primary nav-cta">Faire une demande</a></nav>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Ouvrir le menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
        </button>
      </div>

    <div class="mobile-menu-overlay" id="mobile-menu" aria-hidden="true">
      <div class="mobile-menu">
        <div class="mobile-menu-header">
          <a href="/" class="brand" aria-label="PrêtNord - Accueil">
            <span class="brand-mark"><svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" fill-rule="evenodd"><rect width="120" height="120" rx="28" fill="#F7F7F2"/><path d="M27 78V42h18c12 0 18 7 18 18s-6 18-18 18H27zm15-12h3c5 0 8-2 8-6s-3-6-8-6h-3v12z" fill="#0B5D4B"/><path d="M68 35h18l-13 34h-18L68 35zm7 0h16l-8 21h-16l8-21z" fill="#F2A33A"/><circle cx="88" cy="82" r="10" fill="#0B5D4B"/><path d="M83 82h10M88 77v10" stroke="#F7F7F2" stroke-width="3" stroke-linecap="round"/></g></svg></span>
            <span>PrêtNord</span>
          </a>
          <button class="menu-close" type="button" aria-label="Fermer le menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        ${e.map(e=>`<a href="${e.href}">${e.label}</a>`).join(``)}
        <a href="/#application" class="btn btn-primary">Faire une demande</a>
      </div>
    </div>
  `}function n(){return`
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" aria-label="PrêtNord - Accueil"><strong>PrêtNord</strong></a>
            <p>PrêtNord (service fictif)</p>
            <p>1000 rue Exemple</p>
            <p>Montréal (Québec) H0H 0H0</p>
            <p>514 555 0142</p>
            <p>bonjour@pretnord.example</p>
            <p>PrêtNord n'est pas un prêteur</p>
          </div>
          <div>
            <h3>Liens utiles</h3>
            <div class="footer-links">
              <a href="/politique-de-confidentialite/">Politique de confidentialité</a>
              <a href="/#application">Faire une demande</a>
              <a href="/pret-personnel-en-ligne/">Prêt personnel en ligne</a>
              <a href="/pret-1000/">Prêt de 1 000 $</a>
            </div>
          </div>
          <div>
            <h3>Contacts</h3>
            <div class="footer-links">
              <a href="mailto:bonjour@pretnord.example">bonjour@pretnord.example</a>
              <a href="tel:5145550142">514 555 0142</a>
              <a href="/politique-de-confidentialite/">Politique de confidentialité</a>
            </div>
          </div>
        </div>
        <div class="footer-meta">
          <span>© 2025 PrêtNord</span>
          <span>Service de mise en relation pour le Québec</span>
        </div>
      </div>
    </footer>
  `}function r(){let e=document.querySelector(`.mobile-menu-overlay`),t=document.querySelector(`.menu-toggle`),n=document.querySelector(`.menu-close`),r=document.querySelectorAll(`.mobile-menu a`);if(!e||!t||!n)return;let i=()=>{e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`),t.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`menu-open`)},a=()=>{e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`),t.setAttribute(`aria-expanded`,`true`),document.body.classList.add(`menu-open`)};t.addEventListener(`click`,()=>{e.classList.contains(`is-open`)?i():a()}),n.addEventListener(`click`,i),e.addEventListener(`click`,t=>{t.target===e&&i()}),r.forEach(e=>e.addEventListener(`click`,i)),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.classList.contains(`is-open`)&&i()})}function i(){let e=document.getElementById(`amountRange`),t=document.getElementById(`termRange`),n=document.getElementById(`amountValue`),r=document.getElementById(`termValue`),i=document.getElementById(`monthlyPayment`),a=document.getElementById(`totalCost`),o=document.getElementById(`creditCost`);if(!e||!t||!n||!r||!i||!a||!o)return;let s=e=>new Intl.NumberFormat(`fr-CA`,{style:`currency`,currency:`CAD`,minimumFractionDigits:2}).format(e),c=()=>{let c=Number(e.value),l=Number(t.value),u=.299/12*c*1.0249166666666667**l/(1.0249166666666667**l-1),d=u*l,f=d-c;n.textContent=s(c),r.textContent=`${l} mois`,i.textContent=s(u),a.textContent=s(d),o.textContent=s(f)};e.addEventListener(`input`,c),t.addEventListener(`input`,c),c()}function a(){document.querySelectorAll(`.faq details`).forEach(e=>{e.addEventListener(`toggle`,()=>{e.open&&document.querySelectorAll(`.faq details`).forEach(t=>{t!==e&&(t.open=!1)})})})}function o(){let e=document.querySelector(`.cookie-popup`),t=document.getElementById(`cookie-accept`);if(!e||!t)return;let n=`pretnord_cookie_consent`;localStorage.getItem(n)===`accepted`?e.classList.remove(`is-visible`):(e.classList.add(`is-visible`),t.addEventListener(`click`,()=>{localStorage.setItem(n,`accepted`),e.classList.remove(`is-visible`)}))}function s(e,t){let n=document.querySelector(`[data-error-for="${e.name}"]`);n&&(n.textContent=t||``,e.setAttribute(`aria-invalid`,t?`true`:`false`))}function c(){let e=document.getElementById(`application-form`);if(!e)return;let t=e.querySelector(`button[type="submit"]`),n=document.getElementById(`form-status`),r=e=>e.trim().length>=2?``:`Veuillez saisir votre nom.`,i=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?``:`Veuillez saisir un courriel valide.`,a=e=>/^(?:\+?1)?[2-9]\d{2}[2-9]\d{6}$/.test(e.replace(/[\s().-]/g,``))?``:`Veuillez saisir un numéro de téléphone valide au Canada.`,o=e=>e?``:`Veuillez accepter le consentement pour continuer.`,c={nom:e.querySelector(`input[name="nom"]`),email:e.querySelector(`input[name="email"]`),telephone:e.querySelector(`input[name="telephone"]`),consent:e.querySelector(`input[name="consent"]`)},l=!1;Object.values(c).forEach(e=>{e&&e.addEventListener(`input`,()=>{let t=``;e.name===`nom`&&(t=r(e.value)),e.name===`email`&&(t=i(e.value)),e.name===`telephone`&&(t=a(e.value)),e.name===`consent`&&(t=o(e.checked)),s(e,t)})}),e.addEventListener(`submit`,e=>{if(e.preventDefault(),l)return;let u={nom:c.nom.value.trim(),email:c.email.value.trim(),telephone:c.telephone.value.trim(),consent:c.consent.checked},d={nom:r(u.nom),email:i(u.email),telephone:a(u.telephone),consent:o(u.consent)};Object.entries(c).forEach(([e,t])=>{t&&s(t,d[e]||``)}),!Object.values(d).some(Boolean)&&(l=!0,t&&(t.disabled=!0,t.textContent=`Envoi...`),console.log(`Nouvelle demande PrêtNord :`,u),n&&(n.textContent=`Merci ! Votre demande a été envoyée.`,n.classList.add(`is-visible`)),window.location.assign(`/merci/`))})}function l(){typeof AOS<`u`&&AOS.init({duration:700,once:!0,offset:20,easing:`ease-out-cubic`})}document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`[data-site-header]`),s=document.querySelector(`[data-site-footer]`);e&&(e.innerHTML=t()),s&&(s.innerHTML=n()),typeof lucide<`u`&&lucide.createIcons(),r(),i(),a(),o(),c(),l()})}));export{t};