---
title: BecauseRobots
layout: barebones
---

<h1>Blog</h1>
<section class="blog">
	{% for post in site.posts limit: 10 %}
		{% include article.md %}
	{% endfor %}
</section>
