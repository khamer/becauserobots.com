<article>
	<header>
		<h2>
			<a href="{{ post.url }}">{{ post.title }}</a>
		</h2>
	</header>
	<div class="torso">
		<div>{{ post.content }}</div>
		<div class="meta">
			<div class="date">{{ post.date }}</div>
			<ul class="tags">
				{% for tag in post.tags %}
					<li>
						<a href="">{{ tag }}</a>
					</li>
				{% endfor %}
			</ul>
		</div>
	</div>
</article>
