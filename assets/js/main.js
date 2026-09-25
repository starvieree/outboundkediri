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

  /* ---------- Network Popup ---------- */
  var networkBtn = document.getElementById("networkBtn");
  var networkPopup = document.getElementById("networkPopup");
  var closeNetworkBtn = document.getElementById("closeNetworkBtn");

  if (networkBtn && networkPopup && closeNetworkBtn) {
    networkBtn.addEventListener("click", function () {
      networkPopup.classList.add("show");
    });

    closeNetworkBtn.addEventListener("click", function () {
      networkPopup.classList.remove("show");
    });

    networkPopup.addEventListener("click", function (e) {
      if (e.target === networkPopup) {
        networkPopup.classList.remove("show");
      }
    });
  }

  /* ---------- Blog Pagination ---------- */
  var blogGrid = document.querySelector(".blog-grid");
  var paginationContainer = document.querySelector(".pagination");
  
  if (blogGrid && paginationContainer) {
    var articles = Array.from(blogGrid.querySelectorAll(".blog-card"));
    var itemsPerPage = 8;
    var totalPages = Math.ceil(articles.length / itemsPerPage);
    var currentPage = 1;
    var maxVisibleButtons = 5;

    function renderArticles() {
      var startIndex = (currentPage - 1) * itemsPerPage;
      var endIndex = startIndex + itemsPerPage;

      articles.forEach(function(article, index) {
        if (index >= startIndex && index < endIndex) {
          article.style.display = "";
        } else {
          article.style.display = "none";
        }
      });
    }

    function renderPagination() {
      paginationContainer.innerHTML = "";
      
      if (totalPages <= 1) return;

      // Prev Button
      var prevBtn = document.createElement("a");
      prevBtn.href = "#";
      prevBtn.className = "nav-btn";
      prevBtn.innerHTML = '← <span class="hide-mobile">Sebelumnya</span>';
      if (currentPage === 1) {
        prevBtn.style.pointerEvents = "none";
        prevBtn.style.opacity = "0.5";
      }
      prevBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if (currentPage > 1) {
          currentPage--;
          updateView();
        }
      });
      paginationContainer.appendChild(prevBtn);

      // Page Numbers
      var startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
      var endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

      if (endPage - startPage + 1 < maxVisibleButtons) {
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
      }

      for (var i = startPage; i <= endPage; i++) {
        var pageBtn = document.createElement("a");
        pageBtn.href = "#";
        pageBtn.textContent = i;
        if (i === currentPage) {
          pageBtn.className = "active";
        }
        
        // Hide some buttons on mobile if there are many pages
        if (totalPages > 3) {
           if (i !== currentPage && i !== currentPage - 1 && i !== currentPage + 1) {
               pageBtn.classList.add("hide-mobile");
           }
        }

        pageBtn.addEventListener("click", (function(page) {
          return function(e) {
            e.preventDefault();
            currentPage = page;
            updateView();
          };
        })(i));
        paginationContainer.appendChild(pageBtn);
      }

      // Next Button
      var nextBtn = document.createElement("a");
      nextBtn.href = "#";
      nextBtn.className = "nav-btn";
      nextBtn.innerHTML = '<span class="hide-mobile">Selanjutnya</span> →';
      if (currentPage === totalPages) {
        nextBtn.style.pointerEvents = "none";
        nextBtn.style.opacity = "0.5";
      }
      nextBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if (currentPage < totalPages) {
          currentPage++;
          updateView();
        }
      });
      paginationContainer.appendChild(nextBtn);
    }

    function updateView() {
      renderArticles();
      renderPagination();
      // Optional: scroll to top of blog grid
      var yOffset = -100; 
      var y = blogGrid.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }

    // Initialize
    updateView();
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

  if (!document.body.classList.contains('no-animate')) {
    var animatedElements = document.querySelectorAll('.section, .hero, .stats-strip, .footer-grid > div');
    animatedElements.forEach(function(el) {
      el.classList.add('animate-hidden');
      observer.observe(el);
    });
  }

  /* ---------- Blog Search ---------- */
  var blogSearchInput = document.getElementById("blogSearchInput");
  var blogSearchBtn = document.getElementById("blogSearchBtn");
  var blogCards = document.querySelectorAll(".blog-card");

  if (blogSearchInput && blogCards.length) {
    function performSearch() {
      var query = blogSearchInput.value.toLowerCase().trim();
      blogCards.forEach(function (card) {
        var titleElement = card.querySelector("h3");
        if (titleElement) {
          var titleText = titleElement.textContent.toLowerCase();
          if (titleText.includes(query)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        }
      });
    }

    if (blogSearchBtn) {
      blogSearchBtn.addEventListener("click", performSearch);
    }
    
    blogSearchInput.addEventListener("keyup", function (e) {
      performSearch();
    });
  }
})();
