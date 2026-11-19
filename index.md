---
layout: default
title: Home
---
<section class="hero">
  <h1>I find out what people need, then help teams act on it.</h1>
  <p class="hero-sub">I'm {{ site.title }}, a UX researcher who works on <mark>[your focus, e.g. health apps, B2B tools, education]</mark>. Below are projects where research changed what the team built.</p>
</section>

<section id="work" class="work-list">
  <h2>Selected work</h2>
  {% assign studies = site.work | sort: "order" %}
  {% for study in studies %}
  <a class="work-item" href="{{ study.url | relative_url }}">
    <h3>{{ study.title }}</h3>
    <p>{{ study.summary }}</p>
    <p class="work-meta">{{ study.methods }}</p>
  </a>
  {% endfor %}
</section>
