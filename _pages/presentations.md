---
layout: page
permalink: /presentations/
title: presentations
description: conference papers, posters, and invited talks
nav: true
nav_order: 4
---

{% include bib_search.liquid %}

<div class="publications presentation-list">
  <div class="presentation-filter mb-4">
    <button id="show-all-presentations" class="btn btn-sm z-depth-0 active" type="button">Show all</button>
    <button id="show-apls-presentations" class="btn btn-sm z-depth-0" type="button">Show only APLS</button>
  </div>

{% bibliography
   --file presentations
   --group_by year
   --order descending
%}
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector(".presentation-list");
    const showAllButton = document.getElementById("show-all-presentations");
    const showAplsButton = document.getElementById("show-apls-presentations");

    if (!list || !showAllButton || !showAplsButton) return;

    const entries = list.querySelectorAll("ol.bibliography > li");

    function setActiveButton(activeButton) {
      [showAllButton, showAplsButton].forEach((button) => button.classList.remove("active"));
      activeButton.classList.add("active");
    }

    function showAll() {
      entries.forEach((entry) => {
        entry.style.display = "";
      });
      setActiveButton(showAllButton);
    }

    function showAplsOnly() {
      entries.forEach((entry) => {
        const text = entry.textContent || "";
        entry.style.display = text.includes("American Psychology") || text.includes("AP-LS") || text.includes("APLS") ? "" : "none";
      });
      setActiveButton(showAplsButton);
    }

    showAllButton.addEventListener("click", showAll);
    showAplsButton.addEventListener("click", showAplsOnly);
  });
</script>
