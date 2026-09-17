"use strict";

// The page and FAQ work without JavaScript; only sharing is enhanced here.
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const copyButton = document.querySelector("#copy-link");
const copyStatus = document.querySelector("#copy-status");
const canonical = document.querySelector('link[rel="canonical"]');
if (copyButton && copyStatus && canonical) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(canonical.href);
      copyStatus.textContent = "リンクをコピーしました。";
    } catch {
      copyStatus.textContent = `コピーできない場合はこちら：${canonical.href}`;
    }
  });
}

// An unavailable image must never block the rest of the page.
for (const img of document.images) {
  const fallback = () => {
    img.removeAttribute("srcset");
    img.src = "assets/avatar-fallback.svg";
  };
  img.addEventListener("error", fallback, { once: true });
  if (img.complete && img.naturalWidth === 0) fallback();
}
