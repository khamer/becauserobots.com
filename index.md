---
title: BecauseRobots
layout: barebones
---

<section class="articles">
	{% for post in site.posts limit: 10 %}
		{% include article.md %}
	{% endfor %}
</section>
