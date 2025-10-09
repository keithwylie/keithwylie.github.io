---
layout: page
permalink: /presentations/
title: presentations
description: conference papers, posters, and invited talks
nav: true
nav_order: 4
---
{% include bib_search.liquid %}

<div class="publications">
{% bibliography
   --file presentations
   --group_by year
   --order descending
   --template bib_item_conference
%}
</div>
