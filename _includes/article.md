<article>
	<header>
		<h2>
			<a href="{{ post.url }}">{{ post.title }}</a>
		</h2>
		{% if post.date %}
			<div class="meta">
				<div class="date">{{ post.date }}</div>
			</div>
		{% endif %}
	</header>

	{{ post.content | markdownify }}

</article>
