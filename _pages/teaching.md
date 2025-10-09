---
layout: page
permalink: /teaching/
title: teaching
# description: Courses I teach and have taught.
nav: true
nav_order: 2
horizontal: false
# Set this only if you actually want categories (see notes below)
display_categories: [electives, foundations, core]
---

I've taught across the curriculum--from upper-level electives in legal and forensic topics to foundational courses for the psychology major to 1st-year social scientific inquiry courses in Flagler's Core Experience (general education program).

Below are brief snapshots of several courses in my regular rotation, including sample objectives, resources, and learning activities.

If you’d like more information about a specific course or potential collaboration, please feel free to contact me.


<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
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
