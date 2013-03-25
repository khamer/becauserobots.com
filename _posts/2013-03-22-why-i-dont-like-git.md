---
title: Why I don't like Git
layout: default
tags:
- git
- version control
- bad software
---

I've been spending more time using Git lately. In particular, more time working on team projects
with multiple people working on the same project at once.

So far, iMarc is a Subversion shop. So, its no surprise that when we're working with a Github
repository (for example) we treat it like subversion. It's not perfect, but it gets the job done as
long as everyone is careful... Unfortunately I wasn't, and in the process of trying to clean up my
mess I discovered a quirk; **`git checkout HASH` and `git checkout HASH .` are completedly different
commands.**

I've also spent time working with mercurial, which overall, I liked considerably more. I felt both
its abstractions and default tools were much better than Git's, but GitHub pretty much ends the
debate. No one (outside of kernel developers) would care about Git if not for GitHub.

Not that I blame Git for being a poor tool for me; Git was made to fulfill the needs of the linux
kernel developers. Where they have hundreds of developers working in groups, most of my repositories
are only touched by one to four people, rarely at the same time, and nearly never working on
different features or branches. I never pull commits directly from other machines or users. It seems
like Git constantly has to print disclaimers out on the command line warning me about what I've
done. Documentation is a good way to compensate for complexity, but I'd rather be using a simpler
tool in the first place.

I don't blame Git for being powerful, but I do blame GitHub for using Git when its not appropriate.
GitHub encourages

* Users to create lots of small, personal repositories, that only they'll be committing against.
* Encourages users to use Git like a centralized version control system instead of as a
  distributed one.
* Adds another layer on top of Git (pull requests in particular) to introduce a new level of
  inter-repository complexity.

Previous generations of version control (like Subversion) were designed to be centralized; Git
isn't. GitHub encourages misuse of Git, and while I appreciate the benefits GitHub provides the
community, I do wish they had chosen some other version control.

I mostly blame the community. GitHub looks nice and was an amazing upgrade from Google Code or
SourceForge, but switching from Subversion to Git is fundamentally much more costly on a project
basis than the look and feel of the site. GitHub is nearly a monopoly for open source project
collaboration. I still hold out some hope for Bitbucket. For a while, I was updating both Bitbucket
and GitHub, but Bitbucket seems to have so little hold on the community that it seems like a lost
cause. Still, as I uncover more of the pain of Git, I may stil switch back. Maybe if Atlassian
throws together an even better BitBucket client and perhaps bitbucket pages, I'll be able to drag
some people with me. Or perhaps GitHub should add support for Subversion so for small projects, we
can all opt out of using Git and still be part of their community.
