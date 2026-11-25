/* THE BONJIN — lp.js（web.html：ホームページ・名刺のLP）
   - 見出しの影、メールのひな形、見本名刺のQR模様、ふわっと出す */
(function () {
  "use strict";

  /* header shadow */
  var head = document.querySelector(".site-head");
  if (head) {
    var onScroll = function () { head.classList.toggle("scrolled", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* mailto：件名と本文のひな形 */
  var subject = "ホームページ・名刺の相談";
  var body = [
    "【頼みたいこと】ホームページ制作 ／ 名刺×ホームページ（どちらか）",
    "【お名前・団体名】",
    "【いまの状況】（例：来春に開業予定、名刺はまだ無い など）",
    "【希望の時期】",
    ""
  ].join("\n");
  var href = "mailto:itwoshiyou@gmail.com?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
  document.querySelectorAll(".js-mail").forEach(function (a) { a.href = href; });

  /* 見本名刺のQR（飾り。読み取れる本物ではない） */
  document.querySelectorAll(".mk-qr").forEach(function (cv) {
    var n = cv.width, ctx = cv.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#3A2E24";
    var seed = 7;
    var rnd = function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    var inFinder = function (x, y) {
      return (x < 8 && y < 8) || (x >= n - 8 && y < 8) || (x < 8 && y >= n - 8);
    };
    for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
      if (!inFinder(x, y) && rnd() < 0.48) ctx.fillRect(x, y, 1, 1);
    }
    [[0, 0], [n - 7, 0], [0, n - 7]].forEach(function (p) {
      ctx.fillRect(p[0], p[1], 7, 7);
      ctx.clearRect(p[0] + 1, p[1] + 1, 5, 5);
      ctx.fillRect(p[0] + 2, p[1] + 2, 3, 3);
    });
  });

  /* quiet fade-in */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll(".sec-title, .lp-worry li, .lp-plan, .lp-mock, .lp-steps, .lp-works, .lp-flow li, .lp-faq, .dark .wrap");
    targets.forEach(function (el) { el.classList.add("rv"); });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  }
})();
