/* ============================================================
   OUTBOUND KEDIRI - SHARED SCRIPT
   Menangani: navbar mobile, dropdown accordion "Paket",
   kalkulator simulasi biaya, filter galeri, dan FAQ (native <details>).
============================================================ */
(function () {
  "use strict";

  /* ---------- Mobile navbar ---------- */
  var hamburger = document.getElementById("hamburgerBtn");
  var mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll("#mobileMenu a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Mobile dropdown accordion "Paket" ---------- */
  var mobileDropdownBtn = document.getElementById("mobileDropdownBtn");
  var mobileAccordion = document.getElementById("mobileAccordion");
  if (mobileDropdownBtn && mobileAccordion) {
    mobileDropdownBtn.addEventListener("click", function () {
      var isOpen = mobileAccordion.classList.toggle("open");
      mobileDropdownBtn.setAttribute("aria-expanded", isOpen);
    });
  }

  /* ---------- Simulator / kalkulator estimasi biaya ---------- */
  var calc = document.getElementById("calcSimulator");
  if (calc) {
    var pesertaInput = calc.querySelector("#calcPeserta");
    var pesertaValue = calc.querySelector("#calcPesertaValue");
    var paketSelect = calc.querySelector("#calcPaket");
    var resultTotal = calc.querySelector("#calcTotal");
    var resultPerOrang = calc.querySelector("#calcPerOrang");

    function formatRupiah(num) {
      return "Rp" + Math.round(num).toLocaleString("id-ID");
    }

    function updateCalc() {
      var peserta = parseInt(pesertaInput.value, 10) || 0;
      var harga = parseInt(paketSelect.value, 10) || 0;
      var total = peserta * harga;
      if (pesertaValue) pesertaValue.textContent = peserta + " Orang";
      if (resultTotal) resultTotal.textContent = formatRupiah(total);
      if (resultPerOrang) resultPerOrang.textContent = formatRupiah(harga) + " / peserta";
    }

    pesertaInput.addEventListener("input", updateCalc);
    paketSelect.addEventListener("change", updateCalc);
    updateCalc();
  }

  /* ---------- Filter chip galeri ---------- */
  var chips = document.querySelectorAll(".filter-chip");
  var galleryItems = document.querySelectorAll("[data-category]");
  if (chips.length && galleryItems.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        var target = chip.getAttribute("data-filter");
        galleryItems.forEach(function (item) {
          var show = target === "semua" || item.getAttribute("data-category") === target;
          item.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---------- Scroll to Top Button ---------- */
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    scrollTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ---------- FAQ Accordion Behavior ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length) {
    faqItems.forEach(function (item) {
      item.addEventListener("click", function (e) {
        // Only trigger if clicking the summary element
        if (e.target.tagName.toLowerCase() === 'summary' || e.target.closest('summary')) {
          // If this item is not already open, close all others
          if (!item.hasAttribute('open')) {
            faqItems.forEach(function (otherItem) {
              if (otherItem !== item && otherItem.hasAttribute('open')) {
                otherItem.removeAttribute('open');
              }
            });
          }
        }
      });
    });
  }

  /* ---------- Scroll Animation (Fade In Up) ---------- */
  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  var animatedElements = document.querySelectorAll('.section, .hero, .stats-strip, .footer-grid > div');
  animatedElements.forEach(function(el) {
    el.classList.add('animate-hidden');
    observer.observe(el);
  });
})();
