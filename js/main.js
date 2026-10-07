const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Avantages", href: "/#advantages" },
  { label: "Comment ça fonctionne", href: "/#steps" },
  { label: "Calculateur", href: "/#calculator" },
  { label: "FAQ", href: "/#faq" },
  { label: "Faire une demande", href: "/#application" },
];

function getHeaderMarkup() {
  const nav = navLinks
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");
  return `
    <header class="site-header">
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
        <nav class="main-nav" aria-label="Menu principal">${nav}<a href="/#application" class="btn btn-primary nav-cta">Faire une demande</a></nav>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Ouvrir le menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
        </button>
      </div>
    </header>
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
        ${navLinks.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
        <a href="/#application" class="btn btn-primary">Faire une demande</a>
      </div>
    </div>
  `;
}

function getFooterMarkup() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" aria-label="PrêtNord - Accueil"><strong>PrêtNord</strong></a>
            <p>PrêtNord (service fictif)</p>
            <p>1000 rue Exemple, Montréal (Québec) H0H 0H0</p>
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
  `;
}

function initMobileMenu() {
  const overlay = document.querySelector(".mobile-menu-overlay");
  const toggle = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".menu-close");
  const links = document.querySelectorAll(".mobile-menu a");

  if (!overlay || !toggle || !closeBtn) {
    return;
  }

  const closeMenu = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = overlay.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeMenu();
    }
  });

  links.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeMenu();
    }
  });
}

function initCalculator() {
  const amountInput = document.getElementById("amountRange");
  const termInput = document.getElementById("termRange");
  const amountValue = document.getElementById("amountValue");
  const termValue = document.getElementById("termValue");
  const monthlyPayment = document.getElementById("monthlyPayment");
  const totalCost = document.getElementById("totalCost");
  const creditCost = document.getElementById("creditCost");

  if (
    !amountInput ||
    !termInput ||
    !amountValue ||
    !termValue ||
    !monthlyPayment ||
    !totalCost ||
    !creditCost
  ) {
    return;
  }

  const formatCurrency = (value) =>
    new Intl.NumberFormat("fr-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 2,
    }).format(value);

  const updateCalculator = () => {
    const amount = Number(amountInput.value);
    const months = Number(termInput.value);
    const annualRate = 0.299;
    const monthlyRate = annualRate / 12;
    const payment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const total = payment * months;
    const credit = total - amount;
    amountValue.textContent = formatCurrency(amount);
    termValue.textContent = `${months} mois`;
    monthlyPayment.textContent = formatCurrency(payment);
    totalCost.textContent = formatCurrency(total);
    creditCost.textContent = formatCurrency(credit);
  };

  amountInput.addEventListener("input", updateCalculator);
  termInput.addEventListener("input", updateCalculator);
  updateCalculator();
}

function initFaq() {
  document.querySelectorAll(".faq details").forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      document.querySelectorAll(".faq details").forEach((detail) => {
        if (detail !== item) detail.open = false;
      });
    });
  });
}

function initCookieConsent() {
  const popup = document.querySelector(".cookie-popup");
  const acceptButton = document.getElementById("cookie-accept");
  if (!popup || !acceptButton) return;

  const consentKey = "pretnord_cookie_consent";
  const hasConsent = localStorage.getItem(consentKey) === "accepted";
  if (hasConsent) {
    popup.classList.remove("is-visible");
    return;
  }

  popup.classList.add("is-visible");
  acceptButton.addEventListener("click", () => {
    localStorage.setItem(consentKey, "accepted");
    popup.classList.remove("is-visible");
  });
}

function setFieldError(field, message) {
  const errorElement = document.querySelector(
    `[data-error-for="${field.name}"]`,
  );
  if (!errorElement) return;
  errorElement.textContent = message || "";
  field.setAttribute("aria-invalid", message ? "true" : "false");
}

function initForm() {
  const form = document.getElementById("application-form");
  if (!form) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const successMessage = document.getElementById("form-status");

  const validateName = (value) =>
    value.trim().length >= 2 ? "" : "Veuillez saisir votre nom.";
  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? ""
      : "Veuillez saisir un courriel valide.";
  const validatePhone = (value) =>
    /^(?:\+?1)?[2-9]\d{2}[2-9]\d{6}$/.test(
      value.replace(/[\s().-]/g, ""),
    )
      ? ""
      : "Veuillez saisir un numéro de téléphone valide au Canada.";
  const validateConsent = (checked) =>
    checked ? "" : "Veuillez accepter le consentement pour continuer.";

  const fields = {
    nom: form.querySelector('input[name="nom"]'),
    email: form.querySelector('input[name="email"]'),
    telephone: form.querySelector('input[name="telephone"]'),
    consent: form.querySelector('input[name="consent"]'),
  };
  let isSubmitting = false;

  Object.values(fields).forEach((field) => {
    if (!field) return;
    field.addEventListener("input", () => {
      let message = "";
      if (field.name === "nom") message = validateName(field.value);
      if (field.name === "email") message = validateEmail(field.value);
      if (field.name === "telephone") message = validatePhone(field.value);
      if (field.name === "consent") message = validateConsent(field.checked);
      setFieldError(field, message);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const formData = {
      nom: fields.nom.value.trim(),
      email: fields.email.value.trim(),
      telephone: fields.telephone.value.trim(),
      consent: fields.consent.checked,
    };

    const errors = {
      nom: validateName(formData.nom),
      email: validateEmail(formData.email),
      telephone: validatePhone(formData.telephone),
      consent: validateConsent(formData.consent),
    };

    Object.entries(fields).forEach(([key, field]) => {
      if (!field) return;
      setFieldError(field, errors[key] || "");
    });

    if (Object.values(errors).some(Boolean)) {
      return;
    }

    isSubmitting = true;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Envoi...";
    }

    console.log("Nouvelle demande PrêtNord :", formData);

    if (successMessage) {
      successMessage.textContent = "Merci ! Votre demande a été envoyée.";
      successMessage.classList.add("is-visible");
    }

    window.location.assign("/merci/");
  });
}

function initAos() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      once: true,
      offset: 20,
      easing: "ease-out-cubic",
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const headerTarget = document.querySelector("[data-site-header]");
  const footerTarget = document.querySelector("[data-site-footer]");

  if (headerTarget) {
    headerTarget.innerHTML = getHeaderMarkup();
  }

  if (footerTarget) {
    footerTarget.innerHTML = getFooterMarkup();
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  initMobileMenu();
  initCalculator();
  initFaq();
  initCookieConsent();
  initForm();
  initAos();
});
