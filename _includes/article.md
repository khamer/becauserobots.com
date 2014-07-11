<article>
	{% if post.date %}
		<div class="meta">
			<span class="date">{{ post.date | date: "%B %-d, %Y" }}</span>
		</div>
	{% endif %}
	<h2>
		<a href="{{ post.url }}">{{ post.title }}</a>
	</h2>

<div markdown="1" class="content">
{{ post.content }}
</div>

</article>
