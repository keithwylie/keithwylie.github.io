---
layout: page
permalink: /teaching/
title: teaching
description: Courses and original teaching activities
nav: true
nav_order: 2
horizontal: false
display_categories: [electives, foundations, core]
---

I teach courses across the psychology major and Flagler's Core curriculum. These pages describe what students study, how we work with research, and some of the assignments and activities I've developed.

I'm gradually adding teaching materials, including interactive labs, research exercises, and open educational resources. Some are ready to share; others are still being revised for use outside my classroom.

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{% case category %}{% when "electives" %}Legal and applied psychology{% when "foundations" %}Psychology and research foundations{% when "core" %}Flagler Core: Social Scientific Inquiry{% else %}{{ category }}{% endcase %}</h2>
  </a>
  {% assign categorized_projects = site.teaching | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

{% assign sorted_projects = site.teaching | sort: "importance" %}

{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
{% endif %}
</div>