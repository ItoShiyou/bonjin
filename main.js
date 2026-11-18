/* THE BONJIN — main.js
   content.js の SITE を描画し、仕掛けを駆動する。
   JSが失敗しても本文が読めるよう、初期状態はCSSで隠さない（progressive enhancement）。 */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) return;
  var $ = function (sel) { return document.querySelector(sel); };
  var esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- meta ---------- */
  document.title = S.meta.title;
  $("#vol").textContent = S.meta.vol;
  $("#f-vol").textContent = S.meta.vol + " / UPDATED " + S.meta.updated;
  $("#f-colophon").textContent = S.footer.colophon;

  /* ---------- hero title split (v2: title lives in the 九十度 stage; guard) ---------- */
  var title = $("#hero-title");
  if (title) title.innerHTML = '<span class="ch">凡</span><span class="ch jin">人</span>';

  /* ---------- rotating word ---------- */
  var rot = $("#hero-rot");
  rot.innerHTML = esc(S.rotating.before) +
    '<span class="slot" id="rot-slot">' + esc(S.rotating.words[0]) + "</span>" +
    esc(S.rotating.after);
  var slot = $("#rot-slot"), wi = 0;
  if (!reduceMotion) {
    setInterval(function () {
      wi = (wi + 1) % S.rotating.words.length;
      slot.style.opacity = "0";
      setTimeout(function () {
        slot.textContent = S.rotating.words[wi];
        slot.style.opacity = "1";
      }, 220);
    }, 2600);
    slot.style.transition = "opacity .22s";
  }

  /* ---------- stats ---------- */
  $("#stats").innerHTML = S.stats.map(function (st) {
    return '<div class="stat"><div class="v num">' + esc(st.value) +
      (st.unit ? '<span class="u">' + esc(st.unit) + "</span>" : "") +
      '</div><div class="l">' + esc(st.label) + "</div></div>";
  }).join("");

  /* ---------- marquee (2 sets, aria-hidden duplicate) ---------- */
  var items = S.marquee.map(function (m) { return "<span>" + esc(m) + "　／</span>"; }).join("");
  $("#marquee-track").innerHTML = "<div>" + items + '</div><div aria-hidden="true">' + items + "</div>";

  /* ---------- about the members ---------- */
  $("#about-body").innerHTML = S.about.body.map(function (p) {
    return "<p>" + esc(p) + "</p>";
  }).join("");

  /* ---------- members ledger ---------- */
  var ledger = $("#ledger");
  ledger.innerHTML = S.members.map(function (m, i) {
    var detail = "";
    if (m.bio) {
      detail = '<div class="row-detail">' +
        "<p>" + esc(m.bio) + "</p>" +
        (m.facts.length ? '<ul class="facts">' + m.facts.map(function (f) {
          return "<li><span class=\"k\">" + esc(f[0]) + "</span><span>" + esc(f[1]) + "</span></li>";
        }).join("") + "</ul>" : "") +
        (m.links.length ? '<div class="links">' + m.links.map(function (l) {
          return '<a href="' + esc(l[1]) + '" target="_blank" rel="noopener" data-cursor="開く">' + esc(l[0]) + "：" + esc(l[2]) + "</a>";
        }).join("") + "</div>" : "") +
        (m.page ? '<div class="links"><a href="' + esc(m.page) + '" data-cursor="開く">紹介ページ →</a></div>' : "") +
        "</div>";
    } else {
      detail = '<div class="row-detail"><p class="mono" style="font-size:12px;letter-spacing:.15em">COMING SOON</p></div>';
    }
    return '<div class="row' + (i === 0 ? " open" : "") + '">' +
      '<button class="row-main" type="button" data-cursor="開閉">' +
      '<span class="row-no">' + esc(m.no) + "</span>" +
      '<span class="row-name palt">' + esc(m.name) +
      '<span class="reading">' + esc([m.reading, m.tags.join(" / ")].filter(Boolean).join(" — ")) + "</span></span>" +
      '<span class="row-role">' + esc(m.role) + '<br><span class="plus">' + (i === 0 ? "−" : "+") + "</span></span>" +
      "</button>" + detail + "</div>";
  }).join("");

  ledger.addEventListener("click", function (e) {
    var btn = e.target.closest(".row-main");
    if (!btn) return;
    var row = btn.closest(".row");
    var wasOpen = row.classList.contains("open");
    ledger.querySelectorAll(".row").forEach(function (r) {
      r.classList.remove("open");
      var p = r.querySelector(".plus"); if (p) p.textContent = "+";
    });
    if (!wasOpen) {
      row.classList.add("open");
      var p = row.querySelector(".plus"); if (p) p.textContent = "−";
    }
  });

  /* ---------- products ---------- */
  $("#products-list").innerHTML = S.products.map(function (p) {
    var titleHtml = p.url
      ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener" data-cursor="開く">' + esc(p.title) + "</a>"
      : esc(p.title);
    var chipCls = (p.status === "公開中") ? "chip" : "chip ghost";
    return '<div class="p-row"><span class="' + chipCls + '">' + esc(p.status) + "</span>" +
      '<span class="p-title">' + titleHtml + '</span>' +
      '<span class="p-meta">' + esc(p.meta) + "</span>" +
      '<span class="p-hook" style="grid-column:2">' + esc(p.hook) + "</span></div>";
  }).join("");

  /* ---------- footer ---------- */
  $("#f-credits").innerHTML = S.footer.credits.map(function (c) {
    return "<li>" + esc(c[0]) + "： " + esc(c[1]) + "</li>";
  }).join("");
  $("#f-links").innerHTML = S.footer.links.map(function (l) {
    return '<li><a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + "</a></li>";
  }).join("");

  /* ---------- custom cursor (difference, fine pointers only) ---------- */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion) {
    document.body.classList.add("cursor-on");
    var dot = document.querySelector(".cursor-dot");
    var ring = document.querySelector(".cursor-ring");
    var label = ring.querySelector(".cursor-label");
    var mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener("mousemove", function (e) { mx = e.clientX; my = e.clientY; });
    (function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      dot.style.transform = "translate(" + (mx - 4) + "px," + (my - 4) + "px)";
      var half = ring.classList.contains("is-active") ? 36 : 20;
      ring.style.transform = "translate(" + (rx - half) + "px," + (ry - half) + "px)";
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest("[data-cursor],a,button,.row-main");
      if (t) {
        ring.classList.add("is-active");
        label.textContent = t.getAttribute("data-cursor") || "";
      } else {
        ring.classList.remove("is-active");
        label.textContent = "";
      }
    });
  }

  /* ---------- ⌘K palette (paco/cmdk steal, hand-rolled) ---------- */
  var entries = [];
  S.members.forEach(function (m) {
    if (!m.role) return;
    entries.push({ label: m.name + "（" + m.role + "）", kind: "MEMBER", target: "#members" });
  });
  S.products.forEach(function (p) {
    entries.push({ label: p.title, kind: p.status, target: "#products", url: p.url });
  });
  var backdrop = $("#palette-backdrop"), input = $("#palette-input"), list = $("#palette-list");
  var sel = 0, current = entries.slice();
  function renderPalette() {
    list.innerHTML = current.map(function (e, i) {
      return '<li data-i="' + i + '"' + (i === sel ? ' class="sel"' : "") + "><span>" +
        esc(e.label) + '</span><span class="kind">' + esc(e.kind) + "</span></li>";
    }).join("") || '<li><span>見つかりません</span><span class="kind">—</span></li>';
  }
  function openPalette() {
    backdrop.classList.add("open");
    input.value = ""; current = entries.slice(); sel = 0;
    renderPalette();
    setTimeout(function () { input.focus(); }, 30);
  }
  function closePalette() { backdrop.classList.remove("open"); }
  function choose(e) {
    if (!e) return;
    closePalette();
    if (e.url) { window.open(e.url, "_blank", "noopener"); return; }
    var t = document.querySelector(e.target);
    if (t) t.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }
  $("#cmdk-open").addEventListener("click", openPalette);
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openPalette(); }
    if (!backdrop.classList.contains("open")) return;
    if (e.key === "Escape") closePalette();
    if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(current.length - 1, sel + 1); renderPalette(); }
    if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, sel - 1); renderPalette(); }
    if (e.key === "Enter") choose(current[sel]);
  });
  input.addEventListener("input", function () {
    var q = input.value.trim().toLowerCase();
    current = entries.filter(function (e) { return e.label.toLowerCase().indexOf(q) >= 0; });
    sel = 0; renderPalette();
  });
  list.addEventListener("click", function (e) {
    var li = e.target.closest("li[data-i]");
    if (li) choose(current[Number(li.getAttribute("data-i"))]);
  });
  backdrop.addEventListener("click", function (e) { if (e.target === backdrop) closePalette(); });

  /* ---------- GSAP: mask-rise headings + hero (SplitText-free, hand split) ---------- */
  if (window.gsap && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger);
    // hero chars rise (run immediately; fonts.ready gating left headless/slow
    // environments stuck at the from-state, so only refresh triggers later)
    gsap.from(".hero-rot, .hero-lead, header .hero-actions", {
      y: 26, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.09, delay: 0.45,
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
  }

  /* ---------- reveal: headings & manifesto (IntersectionObserver, robust) ---------- */
  if ("IntersectionObserver" in window && !reduceMotion) {
    var targets = document.querySelectorAll(".sec-head h2");
    targets.forEach(function (el) { el.classList.add("rv"); });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.2 });
    targets.forEach(function (el) { io.observe(el); });
    // safety: never leave content hidden
    setTimeout(function () {
      targets.forEach(function (el) { el.classList.add("in"); });
    }, 4000);
  }
})();


/* ---------- background: the page's scroll turns the ink ---------- */
(function () {
  var bgFrame = document.getElementById("bg-frame");
  if (!bgFrame) return;
  var ticking = false;
  function sendScroll() {
    ticking = false;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    try { bgFrame.contentWindow.postMessage({ type: "bonjin-scroll", p: p }, "*"); } catch (e) {}
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(sendScroll); }
  }, { passive: true });
  window.addEventListener("resize", sendScroll);
  bgFrame.addEventListener("load", sendScroll);
  sendScroll();
})();
