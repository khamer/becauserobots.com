<article>
	<header>
		<h2>
			<a href="{{ post.url }}">{{ post.title }}</a>
		</h2>
		{% if post.date %}
			<div class="meta">
				<div class="date">{{ post.date | date_to_long_string }}</div>
			</div>
		{% endif %}
	</header>

	{{ post.content | markdownify }}

</article>
