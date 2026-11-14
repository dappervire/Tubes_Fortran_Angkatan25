/* Meja Bundar FORTRAN 2026 — semua tampilan dibangun dari data/kelompok.js */
(function () {
  "use strict";

  var SITE = window.SITE || {};
  var BIDANG = window.BIDANG || {};
  var RAW = window.KELOMPOK || [];
  var UNSET = { nama: "Belum ditentukan", rumpun: "", warna: "#59636d", deskripsi: "Bidang kelompok ini belum dicatat." };

  /* ---------------- helpers ---------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function roman(n) {
    var map = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    var out = "";
    map.forEach(function (p) { while (n >= p[0]) { out += p[1]; n -= p[0]; } });
    return out;
  }
  function normBidang(b) {
    var k = String(b || "").trim().toUpperCase();
    if (!k) return "";
    if (BIDANG[k]) return k;
    if (k.indexOf("TEKNO") !== -1) return "TEKNOLOGI";
    if (k.indexOf("ORMAWA") !== -1 || k.indexOf("UKM") !== -1) return "ORMAWA";
    for (var key in BIDANG) { if (String(BIDANG[key].nama).toUpperCase() === k) return key; }
    return "";
  }
  function bidangOf(g) { return g.bidang ? BIDANG[g.bidang] : UNSET; }
  function colorOf(g) { return bidangOf(g).warna; }
  function shortOf(g) { var b = bidangOf(g); return b.singkat || b.nama; }

  /* Google Drive: ubah link berbagi menjadi link pratinjau / gambar */
  function driveId(url) {
    if (!/drive\.google\.com|docs\.google\.com/.test(url || "")) return null;
    var m = String(url).match(/(?:\/d\/|[?&]id=)([\w-]{20,})/);
    return m ? m[1] : null;
  }
  function paperEmbed(url) { var id = driveId(url); return id ? "https://drive.google.com/file/d/" + id + "/preview" : url + "#view=FitH"; }
  function paperOpen(url) { var id = driveId(url); return id ? "https://drive.google.com/file/d/" + id + "/view" : url; }
  function imgSrc(url) { var id = driveId(url); return id ? "https://drive.google.com/thumbnail?id=" + id + "&sz=w1600" : url; }

  var ICON = {
    users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3 19c.6-3.2 3-5 6-5s5.4 1.8 6 5"/><circle cx="17" cy="9" r="2.4"/><path d="M16.5 14.2c2.3.2 3.9 1.7 4.5 4.3"/></svg>',
    doc: '<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/></svg>',
    img: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="14" rx="1"/><circle cx="9" cy="10" r="1.6"/><path d="M4 17l5-4.5 4 3.5 3-2.5 4 3.5"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    seal: '<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><circle cx="12.5" cy="14" r="2.6"/></svg>',
    ext: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/></svg>'
  };
  var CROWN = '<svg class="tc-crown" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 10l6 5 6-9 6 9 6-5-3 16H7z"/></svg>';

  /* ---------------- data ---------------- */
  var total = Math.max(Number(SITE.jumlahKelompok) || 0, RAW.reduce(function (m, g) { return Math.max(m, Number(g.no) || 0); }, 0));
  var byNo = {};
  RAW.forEach(function (g) { if (g && Number(g.no)) byNo[Number(g.no)] = g; });

  var GROUPS = [];
  for (var n = 1; n <= total; n++) {
    var g = byNo[n] || {};
    var item = {
      no: n,
      bidang: normBidang(g.bidang),
      judul: String(g.judul || "").trim(),
      abstrak: String(g.abstrak || "").trim(),
      kataKunci: Array.isArray(g.kataKunci) ? g.kataKunci.filter(Boolean) : [],
      anggota: Array.isArray(g.anggota) ? g.anggota.filter(function (a) { return a && a.nama; }) : [],
      paper: String(g.paper || "").trim(),
      luaran: Array.isArray(g.luaran) ? g.luaran.filter(function (l) { return l && l.url; }) : [],
      dokumentasi: Array.isArray(g.dokumentasi) ? g.dokumentasi.map(function (d) { return typeof d === "string" ? { src: d } : d; }).filter(function (d) { return d && d.src; }) : []
    };
    item.ready = !!item.judul;
    item.search = [
      "kelompok " + n, "kelompok " + pad(n), roman(n), item.judul, item.abstrak,
      item.kataKunci.join(" "), item.anggota.map(function (a) { return a.nama + " " + (a.nim || ""); }).join(" "),
      bidangOf(item).nama
    ].join(" ").toLowerCase();
    GROUPS.push(item);
  }
  var usedBidang = Object.keys(BIDANG).filter(function (k) { return GROUPS.some(function (g) { return g.bidang === k; }); });
  var unsetCount = GROUPS.filter(function (g) { return !g.bidang; }).length;

  /* ---------------- static text ---------------- */
  $all("[data-site]").forEach(function (el) {
    var v = SITE[el.getAttribute("data-site")];
    if (v) el.textContent = v;
  });
  if (SITE.judul) document.title = "Meja Bundar " + (SITE.penyelenggara || "FORTRAN 2026");
  if (SITE.modeContoh) $("#demo-banner").hidden = false;
  $("#about-prose").innerHTML = (SITE.tentang || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");

  /* ---------------- tally ---------------- */
  var readyCount = GROUPS.filter(function (g) { return g.ready; }).length;
  var paperCount = GROUPS.filter(function (g) { return g.paper; }).length;
  var people = GROUPS.reduce(function (s, g) { return s + g.anggota.length; }, 0);
  var docs = GROUPS.reduce(function (s, g) { return s + g.dokumentasi.length; }, 0);
  var tally = [
    ["Kelompok", total],
    ["Paper terbit", paperCount + "<small>/" + total + "</small>"],
    ["Bidang", usedBidang.length],
    people >= total ? ["Peserta", people] : ["Foto dokumentasi", docs]
  ];
  $("#tally").innerHTML = tally.map(function (t) { return "<div><dt>" + t[0] + "</dt><dd>" + t[1] + "</dd></div>"; }).join("");

  /* ---------------- legend ---------------- */
  var legendHtml = usedBidang.map(function (k) {
    return '<li><i style="background:' + BIDANG[k].warna + '"></i>' + esc(BIDANG[k].nama) + "</li>";
  });
  if (unsetCount) legendHtml.push('<li><i style="background:' + UNSET.warna + '"></i>Belum ditentukan</li>');
  legendHtml.push('<li class="is-pending"><i></i>Belum unggah</li>');
  $("#legend").innerHTML = legendHtml.join("");

  /* ---------------- round table ---------------- */
  var svg = $("#round-table");
  var NS = "http://www.w3.org/2000/svg";
  var C = 300, R_IN = 100, R_OUT = 218, R_SEAT = 256;
  function pt(r, a) { return [C + r * Math.cos(a), C + r * Math.sin(a)]; }
  function wedgePath(a0, a1) {
    var p1 = pt(R_OUT, a0), p2 = pt(R_OUT, a1), p3 = pt(R_IN, a1), p4 = pt(R_IN, a0);
    var large = a1 - a0 > Math.PI ? 1 : 0;
    return "M" + p1 + " A" + R_OUT + " " + R_OUT + " 0 " + large + " 1 " + p2 + " L" + p3 + " A" + R_IN + " " + R_IN + " 0 " + large + " 0 " + p4 + "Z";
  }
  var SHIELD = "M-15 -16 H15 V-2 C15 9 7 15 0 19 C-7 15 -15 9 -15 -2 Z";
  function el(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  var defs = el("defs", {});
  defs.innerHTML =
    '<radialGradient id="rt-shade" cx="50%" cy="50%" r="50%"><stop offset="55%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity=".45"/></radialGradient>' +
    '<pattern id="rt-grain" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><rect width="6" height="6" fill="none"/><path d="M0 3h6" stroke="#fff" stroke-opacity=".035"/></pattern>';
  svg.appendChild(defs);
  svg.appendChild(el("circle", { cx: C, cy: C, r: R_OUT + 9, class: "rt-rim" }));

  var wedges = el("g", {});
  var seats = el("g", {});
  var step = (Math.PI * 2) / total;
  var start = -Math.PI / 2 - step / 2;
  GROUPS.forEach(function (g, i) {
    var a0 = start + i * step, a1 = a0 + step, mid = a0 + step / 2;
    var base = colorOf(g);
    var w = el("path", {
      d: wedgePath(a0, a1),
      class: "rt-wedge",
      fill: g.ready ? base : (i % 2 ? "#1a1f25" : "#20262d"),
      "fill-opacity": g.ready ? ".55" : "1",
      "data-no": g.no,
      style: "--i:" + i
    });
    if (!g.ready && g.bidang) { w.setAttribute("fill", base); w.setAttribute("fill-opacity", i % 2 ? ".14" : ".2"); }
    wedges.appendChild(w);

    var p = pt(R_SEAT, mid);
    var a = el("a", {
      href: "#kelompok-" + pad(g.no),
      class: "rt-seat" + (g.ready ? "" : " is-pending"),
      "data-no": g.no,
      style: "--i:" + i,
      "aria-label": "Kelompok " + g.no + (g.ready ? ": " + g.judul : ", belum mengunggah")
    });
    var gg = el("g", { transform: "translate(" + p[0].toFixed(1) + " " + p[1].toFixed(1) + ")" });
    gg.appendChild(el("path", { d: SHIELD, class: "rt-shield", fill: g.ready ? base : "" }));
    var t = el("text", { x: 0, y: 0, class: "rt-num", fill: g.ready ? "#0e1114" : "" });
    t.textContent = g.no;
    gg.appendChild(t);
    a.appendChild(gg);
    seats.appendChild(a);
  });
  svg.appendChild(wedges);
  svg.appendChild(el("circle", { cx: C, cy: C, r: R_OUT, fill: "url(#rt-grain)", "pointer-events": "none" }));
  svg.appendChild(el("circle", { cx: C, cy: C, r: R_OUT, fill: "url(#rt-shade)", "pointer-events": "none" }));
  svg.appendChild(el("circle", { cx: C, cy: C, r: R_OUT - 1, class: "rt-rim-inner" }));
  svg.appendChild(el("circle", { cx: C, cy: C, r: R_IN, class: "rt-hub" }));
  svg.appendChild(el("circle", { cx: C, cy: C, r: R_IN - 8, class: "rt-rim-inner" }));
  svg.appendChild(seats);

  var center = $("#table-center");
  function centerDefault() {
    center.innerHTML = CROWN +
      '<span class="tc-kicker">Meja Bundar</span>' +
      '<span class="tc-big">' + total + " kursi</span>" +
      '<span class="tc-text">' + readyCount + " karya terbit</span>";
  }
  function centerFor(g) {
    center.innerHTML =
      '<span class="tc-kicker" style="color:' + colorOf(g) + '">' + esc(bidangOf(g).nama) + "</span>" +
      '<span class="tc-big">Kelompok ' + g.no + "</span>" +
      '<span class="tc-text">' + (g.ready ? esc(g.judul) : "<em>Naskah belum diunggah</em>") + "</span>";
  }
  centerDefault();
  function hot(no) {
    svg.classList.toggle("has-hot", !!no);
    $all(".rt-wedge, .rt-seat", svg).forEach(function (e) { e.classList.toggle("is-hot", Number(e.getAttribute("data-no")) === no); });
    if (no) centerFor(GROUPS[no - 1]); else centerDefault();
  }
  $all(".rt-seat", svg).forEach(function (s) {
    var no = Number(s.getAttribute("data-no"));
    s.addEventListener("mouseenter", function () { hot(no); });
    s.addEventListener("focus", function () { hot(no); });
    s.addEventListener("mouseleave", function () { hot(0); });
    s.addEventListener("blur", function () { hot(0); });
  });

  /* ---------------- bidang cards ---------------- */
  function orderCard(key, b, count, ready) {
    return '<button type="button" class="order' + (key ? "" : " is-unset") + '" data-filter="' + (key || "UNSET") + '" style="--t:' + b.warna + '">' +
      '<span class="order-top"><span class="order-banner" aria-hidden="true"></span>' +
      '<span class="order-count">' + count + "<small>kelompok</small></span></span>" +
      "<span><h3>" + esc(b.nama) + "</h3>" + (b.rumpun ? '<span class="order-rumpun">' + esc(b.rumpun) + (b.panji ? " · Panji " + esc(b.panji) : "") + "</span>" : "") + "</span>" +
      "<p>" + esc(b.deskripsi) + "</p>" +
      '<span class="order-cta">' + (ready ? "Lihat " + ready + " karya →" : "Lihat kelompok →") + "</span></button>";
  }
  var ordersHtml = usedBidang.map(function (k) {
    var list = GROUPS.filter(function (g) { return g.bidang === k; });
    return orderCard(k, BIDANG[k], list.length, list.filter(function (g) { return g.ready; }).length);
  });
  if (unsetCount) ordersHtml.push(orderCard("", UNSET, unsetCount, GROUPS.filter(function (g) { return !g.bidang && g.ready; }).length));
  $("#orders-grid").innerHTML = ordersHtml.join("");
  $all(".order").forEach(function (b) {
    b.addEventListener("click", function () {
      setFilter(b.getAttribute("data-filter"));
      $("#arsip").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  });

  /* ---------------- archive ---------------- */
  var state = { filter: "ALL", q: "", onlyReady: false, sort: "no" };
  try {
    var saved = JSON.parse(sessionStorage.getItem("fortran-filter") || "null");
    if (saved) { state.onlyReady = !!saved.onlyReady; state.sort = saved.sort || "no"; }
  } catch (e) { /* storage tidak tersedia */ }
  $("#only-ready").checked = state.onlyReady;
  $("#sort").value = state.sort;

  var chipDefs = [["ALL", "Semua", "var(--gold)", total]].concat(
    usedBidang.map(function (k) { return [k, BIDANG[k].nama, BIDANG[k].warna, GROUPS.filter(function (g) { return g.bidang === k; }).length]; })
  );
  if (unsetCount) chipDefs.push(["UNSET", "Belum ditentukan", UNSET.warna, unsetCount]);
  $("#chips").innerHTML = chipDefs.map(function (c) {
    return '<button type="button" class="chip" data-filter="' + c[0] + '" style="--t:' + c[2] + '" aria-pressed="false"><i></i>' + esc(c[1]) + " <span>" + c[3] + "</span></button>";
  }).join("");
  $all(".chip").forEach(function (c) { c.addEventListener("click", function () { setFilter(c.getAttribute("data-filter")); }); });

  function setFilter(f) { state.filter = f; render(); }
  function persist() { try { sessionStorage.setItem("fortran-filter", JSON.stringify({ onlyReady: state.onlyReady, sort: state.sort })); } catch (e) { /* abaikan */ } }

  var qTimer;
  $("#q").addEventListener("input", function (e) {
    clearTimeout(qTimer);
    qTimer = setTimeout(function () { state.q = e.target.value.trim().toLowerCase(); render(); }, 120);
  });
  $("#only-ready").addEventListener("change", function (e) { state.onlyReady = e.target.checked; persist(); render(); });
  $("#sort").addEventListener("change", function (e) { state.sort = e.target.value; persist(); render(); });
  $("#reset-filter").addEventListener("click", function () {
    state.filter = "ALL"; state.q = ""; state.onlyReady = false;
    $("#q").value = ""; $("#only-ready").checked = false; persist(); render();
  });

  function matches(g) {
    if (state.filter === "UNSET" && g.bidang) return false;
    if (state.filter !== "ALL" && state.filter !== "UNSET" && g.bidang !== state.filter) return false;
    if (state.onlyReady && !g.ready) return false;
    if (state.q) {
      var words = state.q.split(/\s+/);
      for (var i = 0; i < words.length; i++) if (g.search.indexOf(words[i]) === -1) return false;
    }
    return true;
  }

  function folio(g) {
    var b = bidangOf(g);
    var meta = [];
    if (g.ready) {
      if (g.anggota.length) meta.push("<span>" + ICON.users + g.anggota.length + " anggota</span>");
      meta.push("<span>" + ICON.doc + (g.paper ? "Paper PDF" : "PDF menyusul") + "</span>");
      if (g.dokumentasi.length) meta.push("<span>" + ICON.img + g.dokumentasi.length + " foto</span>");
      if (g.luaran.length) meta.push("<span>" + ICON.link + g.luaran.length + " tautan</span>");
    } else {
      meta.push("<span>" + ICON.seal + "Menunggu pengumpulan</span>");
    }
    return '<a class="folio' + (g.ready ? "" : " is-pending") + (g.bidang ? "" : " is-unset") + '" href="#kelompok-' + pad(g.no) + '" style="--t:' + b.warna + '">' +
      '<div class="folio-head"><div><span class="folio-roman">' + roman(g.no) + '</span><span class="folio-no">Kelompok ' + pad(g.no) + "</span></div>" +
      '<span class="tag">' + esc(shortOf(g)) + "</span></div>" +
      '<h3 class="folio-title">' + (g.ready ? esc(g.judul) : "Naskah belum diunggah") + "</h3>" +
      (g.ready && g.abstrak ? '<p class="folio-abs">' + esc(g.abstrak) + "</p>" : "") +
      '<div class="folio-meta">' + meta.join("") + "</div></a>";
  }

  function render() {
    $all(".chip").forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-filter") === state.filter)); });
    var list = GROUPS.filter(matches);
    if (state.sort === "judul") {
      list.sort(function (a, b) { return (b.ready - a.ready) || a.judul.localeCompare(b.judul, "id") || a.no - b.no; });
    } else if (state.sort === "bidang") {
      var order = usedBidang.concat([""]);
      list.sort(function (a, b) { return order.indexOf(a.bidang) - order.indexOf(b.bidang) || a.no - b.no; });
    }
    $("#folio-grid").innerHTML = list.map(folio).join("");
    $("#empty").hidden = list.length > 0;
    var readyShown = list.filter(function (g) { return g.ready; }).length;
    $("#archive-count").innerHTML = "Menampilkan <b>" + list.length + "</b> dari " + total + " kelompok · " + readyShown + " karya terbit";

    var filtered = state.filter !== "ALL";
    svg.classList.toggle("is-filtered", filtered);
    $all(".rt-wedge, .rt-seat", svg).forEach(function (e) {
      var g = GROUPS[Number(e.getAttribute("data-no")) - 1];
      var on = state.filter === "UNSET" ? !g.bidang : g.bidang === state.filter;
      e.classList.toggle("is-dim", filtered && !on);
    });
  }
  render();

  /* ---------------- detail dialog ---------------- */
  var dlg = $("#detail");
  var current = 0;
  var canModal = typeof dlg.showModal === "function";

  function detailHtml(g) {
    var b = bidangOf(g);
    var info = '<div class="d-info">' +
      '<p class="d-roman">Kelompok ' + roman(g.no) + "</p>" +
      '<h2 class="d-title' + (g.ready ? "" : " is-pending") + '" id="d-title">' + (g.ready ? esc(g.judul) : "Kelompok " + g.no + " belum mengunggah naskah") + "</h2>" +
      '<span class="tag" style="--t:' + b.warna + '">' + esc(b.nama) + "</span>" +
      (g.paper ? '<p class="d-quick"><a class="btn btn-gold btn-sm" href="' + esc(paperOpen(g.paper)) + '" target="_blank" rel="noopener">Baca mini paper (PDF)</a></p>' : "");

    if (g.abstrak) info += '<div class="d-block"><p class="d-label">Abstrak</p><p class="d-abs">' + esc(g.abstrak) + "</p></div>";
    else if (!g.ready) info += '<div class="d-block"><p class="d-note">Mini paper dan dokumentasi kelompok ini akan tampil di sini setelah dikumpulkan.</p></div>';
    if (g.kataKunci.length) info += '<div class="d-block"><p class="d-label">Kata kunci</p><ul class="d-keys">' + g.kataKunci.map(function (k) { return "<li>" + esc(k) + "</li>"; }).join("") + "</ul></div>";
    if (g.anggota.length) info += '<div class="d-block"><p class="d-label">Anggota · ' + g.anggota.length + '</p><ul class="d-members">' +
      g.anggota.map(function (a) { return "<li><span>" + esc(a.nama) + '</span><span class="nim">' + esc(a.nim || "") + "</span></li>"; }).join("") + "</ul></div>";
    if (g.luaran.length) info += '<div class="d-block"><p class="d-label">Luaran proyek</p><div class="d-links">' +
      g.luaran.map(function (l) {
        var host = ""; try { host = new URL(l.url, location.href).hostname.replace(/^www\./, ""); } catch (e) { host = l.url; }
        return '<a class="d-link" href="' + esc(l.url) + '" target="_blank" rel="noopener"><span>' + esc(l.label || "Tautan") + "</span><small>" + esc(host) + " " + "</small></a>";
      }).join("") + "</div></div>";
    info += "</div>";

    var paperPanel;
    if (g.paper) {
      paperPanel = '<iframe class="pdf-frame" title="Mini paper Kelompok ' + g.no + '" src="' + esc(paperEmbed(g.paper)) + '" loading="lazy"></iframe>' +
        '<div class="placeholder pdf-mobile"><div>' + ICON.doc + "<p><strong>Mini paper Kelompok " + g.no + "</strong>Buka PDF untuk membaca di layar ponsel.</p>" +
        '<p style="margin-top:16px"><a class="btn btn-gold btn-sm" href="' + esc(paperOpen(g.paper)) + '" target="_blank" rel="noopener">Buka paper (PDF)</a></p></div></div>';
    } else {
      paperPanel = '<div class="placeholder"><div>' + ICON.doc + "<p><strong>Paper belum tersedia</strong>" +
        (g.ready ? "File PDF kelompok ini sedang disiapkan." : "Kelompok ini belum mengumpulkan mini paper.") + "</p></div></div>";
    }
    var docPanel = g.dokumentasi.length
      ? '<div class="gallery">' + g.dokumentasi.map(function (d, i) {
          return '<button type="button" data-lb="' + i + '"><figure style="margin:0"><img src="' + esc(imgSrc(d.src)) + '" alt="' + esc(d.caption || "Dokumentasi Kelompok " + g.no) + '" loading="lazy">' +
            (d.caption ? "<figcaption>" + esc(d.caption) + "</figcaption>" : "") + "</figure></button>";
        }).join("") + "</div>"
      : '<div class="placeholder"><div>' + ICON.img + "<p><strong>Belum ada dokumentasi</strong>Foto proses kerja kelompok akan tampil di sini.</p></div></div>";

    var actions = g.paper ? '<div class="tab-actions"><a class="btn btn-ghost btn-sm" href="' + esc(paperOpen(g.paper)) + '" target="_blank" rel="noopener">Buka di tab baru ' + ICON.ext + "</a></div>" : "";
    var media = '<div class="d-media">' +
      '<div class="tabs" role="tablist">' +
      '<button type="button" class="tab" role="tab" id="tab-paper" aria-controls="panel-paper" aria-selected="true">Mini paper</button>' +
      '<button type="button" class="tab" role="tab" id="tab-doc" aria-controls="panel-doc" aria-selected="false">Dokumentasi' + (g.dokumentasi.length ? "<span>" + g.dokumentasi.length + "</span>" : "") + "</button>" +
      actions + "</div>" +
      '<div class="tabpanel" role="tabpanel" id="panel-paper" aria-labelledby="tab-paper">' + paperPanel + "</div>" +
      '<div class="tabpanel" role="tabpanel" id="panel-doc" aria-labelledby="tab-doc" hidden>' + docPanel + "</div></div>";
    return info + media;
  }

  function openDetail(no) {
    var g = GROUPS[no - 1];
    if (!g) return;
    current = no;
    var b = bidangOf(g);
    dlg.style.setProperty("--t", b.warna);
    $("#d-kicker").innerHTML = "<b>Kelompok " + pad(g.no) + "</b><span>" + esc(b.nama) + "</span>";
    $("#detail-body").innerHTML = detailHtml(g);
    $("#detail-body").scrollTop = 0;
    $("#d-prev").disabled = no <= 1;
    $("#d-next").disabled = no >= total;

    $all(".tab", dlg).forEach(function (t) {
      t.addEventListener("click", function () {
        $all(".tab", dlg).forEach(function (o) { o.setAttribute("aria-selected", String(o === t)); });
        $("#panel-paper").hidden = t.id !== "tab-paper";
        $("#panel-doc").hidden = t.id !== "tab-doc";
      });
    });
    $all("[data-lb]", dlg).forEach(function (btn) {
      btn.addEventListener("click", function () { openLightbox(g, Number(btn.getAttribute("data-lb"))); });
    });

    if (!dlg.open) {
      if (canModal) dlg.showModal(); else dlg.setAttribute("open", "");
      document.body.style.overflow = "hidden";
    }
  }
  function closeDetail() {
    if (dlg.open) { if (canModal) dlg.close(); else dlg.removeAttribute("open"); }
  }
  dlg.addEventListener("close", function () {
    document.body.style.overflow = "";
    current = 0;
    if (/^#kelompok-/.test(location.hash)) {
      try { history.replaceState(null, "", "#arsip"); } catch (e) { /* abaikan */ }
    }
  });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) closeDetail(); });
  $("#d-close").addEventListener("click", closeDetail);
  $("#d-prev").addEventListener("click", function () { go(current - 1); });
  $("#d-next").addEventListener("click", function () { go(current + 1); });
  function go(no) {
    if (no < 1 || no > total) return;
    try { history.replaceState(null, "", "#kelompok-" + pad(no)); } catch (e) { /* abaikan */ }
    openDetail(no);
  }
  document.addEventListener("keydown", function (e) {
    if (!dlg.open || !$("#lightbox").hidden) return;
    if (e.key === "ArrowLeft" && e.target.tagName !== "INPUT") go(current - 1);
    if (e.key === "ArrowRight" && e.target.tagName !== "INPUT") go(current + 1);
  });

  function route() {
    var m = location.hash.match(/^#kelompok-(\d+)$/);
    if (m) openDetail(Number(m[1]));
    else if (dlg.open) closeDetail();
  }
  window.addEventListener("hashchange", route);
  route();

  /* ---------------- lightbox ---------------- */
  var lb = $("#lightbox"), lbList = [], lbIdx = 0, lbReturn = null;
  function showLb() {
    var d = lbList[lbIdx];
    $("#lb-img").src = imgSrc(d.src);
    $("#lb-img").alt = d.caption || "Dokumentasi";
    $("#lb-cap").textContent = (d.caption ? d.caption + " · " : "") + (lbIdx + 1) + "/" + lbList.length;
    $("#lb-prev").disabled = lbIdx === 0;
    $("#lb-next").disabled = lbIdx === lbList.length - 1;
  }
  function openLightbox(g, i) {
    lbList = g.dokumentasi; lbIdx = i; lbReturn = document.activeElement;
    showLb();
    lb.hidden = false;
    dlg.appendChild(lb); // tetap di top layer bersama dialog
    $("#lb-close").focus();
  }
  function closeLightbox() { lb.hidden = true; if (lbReturn) lbReturn.focus(); }
  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-prev").addEventListener("click", function () { if (lbIdx > 0) { lbIdx--; showLb(); } });
  $("#lb-next").addEventListener("click", function () { if (lbIdx < lbList.length - 1) { lbIdx++; showLb(); } });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  dlg.addEventListener("cancel", function (e) { if (!lb.hidden) { e.preventDefault(); closeLightbox(); } });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "ArrowLeft" && lbIdx > 0) { lbIdx--; showLb(); }
    if (e.key === "ArrowRight" && lbIdx < lbList.length - 1) { lbIdx++; showLb(); }
  });
})();
