<article>
	{% if post.date %}
		<div class="meta">
			<div class="date">{{ post.date | date_to_long_string }}</div>
		</div>
	{% endif %}
	<h2>
		<a href="{{ post.url }}">{{ post.title }}</a>
	</h2>

	{{ post.content | markdownify }}

</article>
