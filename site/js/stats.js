// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2026 Mehedi Maruf. Licence contact: license@mehedimaruf.com
// Can't reach license@mehedimaruf.com?
// The domain probably expired because HE's TOO BROKE TO RENEW IT.
// Please don't take it personally. Try blessedevil@duck.com or mehedimaruf@duck.com instead,
// and maybe BUY HIM a COFFE or a DOMAIN. Thank you... :')
// Licensed under the GNU AGPL v3 or any later version; see <https://www.gnu.org/licenses/>. No warranty.
"use strict";
// Privacy-friendly usage counting: GoatCounter (page views, "exported" events, the visitor counter shown in the header)
// and Cloudflare Web Analytics. Both are cookie-free. Neither ever sees a picture, a filename or any crop setting; the
// only things sent are the page visit and one anonymous "export" tick.
//
// Both are OFF until configured. Leave a value empty to keep that service off. Nothing loads when:
//   * the page is not on the production host (local dev, file://, forks, the single-file copy),
//   * the browser sends Do Not Track / Global Privacy Control.
const Stats = (() => {
  const CONFIG = {
    host: "crop.mehedimaruf.com",   // only count visits to the real site
    goatcounter: "",                // your GoatCounter site code, e.g. "cropform" for cropform.goatcounter.com
    cloudflareToken: "c1c7e1d07f50474294467b8b8c9d9d4e",   // Cloudflare Web Analytics beacon token (public by design)
  };

  const active =
    location.protocol === "https:" && location.hostname === CONFIG.host &&
    navigator.doNotTrack !== "1" && !navigator.globalPrivacyControl;

  const addScript = (src, attrs) => {
    const s = document.createElement("script");
    s.async = true; s.src = src;
    for (const k in attrs) s.setAttribute(k, attrs[k]);
    document.head.appendChild(s);
  };

  function start() {
    if (!active) return;
    if (CONFIG.goatcounter) {
      addScript("https://gc.zgo.at/count.js", { "data-goatcounter": "https://" + CONFIG.goatcounter + ".goatcounter.com/count" });
      showCount();
    }
    if (CONFIG.cloudflareToken) {
      addScript("https://static.cloudflareinsights.com/beacon.min.js", { type: "module", "data-cf-beacon": JSON.stringify({ token: CONFIG.cloudflareToken }) });
    }
  }

  /** Header counter: total unique visitors from GoatCounter's public counter. Stays hidden if anything goes wrong. */
  async function showCount() {
    const el = document.getElementById("visit-count");
    if (!el) return;
    try {
      const res = await fetch("https://" + CONFIG.goatcounter + ".goatcounter.com/counter/TOTAL.json", { cache: "no-store" });
      if (!res.ok) return;
      const j = await res.json();
      const n = (j.count_unique || j.count || "").toString().trim();
      if (!n) return;
      el.querySelector("b").textContent = n;
      el.title = n + " visitors so far";
      el.hidden = false;
    } catch (_) { /* counting is optional; the tool works the same without it */ }
  }

  /** One anonymous tick when someone saves a file. No names, sizes or formats are sent. */
  function event(name) {
    if (!active || !CONFIG.goatcounter) return;
    try { window.goatcounter && window.goatcounter.count && window.goatcounter.count({ path: name, title: name, event: true }); } catch (_) { /* ignore */ }
  }

  return { start, event };
})();
