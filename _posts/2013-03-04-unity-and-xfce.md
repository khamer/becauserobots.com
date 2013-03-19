---
title: Unity and XFCE
layout: default
tags:
 - unity
 - xfce
---

I switched over to Unity from using XFCE for years to try it out. Over the years I've tried Gnome,
KDE, WindowMaker, Enlightenment, Fluxbox, i3 and even xmonad. The only two that I used for more than
week were Fluxbox, which I used to use with Gentoo ten years ago or so, and XFCE, which has been my
primary desktop since at least 2006.

However, I try to make sure I try out new things as they show up. I briefly played around with KDE 4
and Gnome 3, but didn't care much for either. I've considered giving Linux Mint with Cinnamon or
LXDE a try, or perhaps Elementary OS with Pantheon, but haven't done either. What really drove me to
try Unity again was some of the demos of Unity on phones and tablets from CES this year, as nearly
everyone one of them did an excellent job showing how well designed the interface was, especially to
the tasks at hand. So, I installed Unity on my ultrabook last week to give it a go.

I have very specific demands of my environment, perhaps more than most people. I think most of these
requirements are a result of using Linux in the first place; I've grown accustomed to being able to
change or fix nearly anything about my system for years now and have had plenty of time to discover
exactly what I want:


I want to know what's open
--------------------------

This requirement seems to be the least popular, as Windows 7, OS X, Gnome 3, and even Unity have all
obscured this information if not flat out hid it. Most of these follow a similar pattern:

* Reuse the same area used for shortcuts for common applications to show which ones are open, but
  providing some kind of additional indicator attached to that shortcut.

OSX uses one dot as long as there's at least one window. Windows uses one kind of border if there's
one window, and a different border if there's two or more. Unity uses arrows very similarly to OSX's
dots, except will show one, two, or three on the same icon.

First off, open windows do not indicate active processes. For example, Chrome will run another
process for each of its tabs, but only take up one window. Other processes, such as Pidgin might be
running without a window button at all.

These window buttons represent my personal activities or tasks. If I open a terminal, it's because
I'm planning to do something there. If I open a second, it's because I know I'm still using the
first one. I like to clearly see the list of my open windows because its a list of my current tasks
that I can use to keep track of what I'm doing. I configure Pidgin to open incoming messages
directly into new windows so that even if I ignore them to finish testing a code change, they'll be
visible in my list of things I'm doing until I intentionally close them.

Most of the time, I run

* a couple terminals,
* two or three GVIM windows,
* at least one browser window per monitor, and
* anywhere between two and eight Pidgin conversations.

With OSX, I'd only be able know about four windows. Windows, I'd know about eight. Unity, I can see
up to twelve, which is high enough for GVIM and terminals, but falls short for tracking pidgin
conversations.

XFCE doesn't artificially lower limits like this. If you're willing to settle for just an icon, you
can have practically as many as you'd like. I prefer seeing the window titles (something that's been
removed by all of the others) instead of the icons, and often list them down the left side of the
monitor. Like this, I easily have enough space.


Window placement should be keyboard controllable
------------------------------------------------

One of the best usability features of Windows Vista was the hotkeys it provided for window
management. Win+Left, Win+Right, Win+Up, and Win+Down are intuitive, easy to use, and were even
designed well for multiple monitors. Being able to quickly position to things side by side is
critical for me.

So critical, that since this wasn't part of XFCE (until recently), I wrote a script to provide this
functionality for Linux. Initially, it only used wmctrl, but now it also uses xdotool to get
information about the focused window and resize and position it properly. I use it constantly.

Unity provides some shortcuts (Control+Win and an arrow key) however they didn't quite get multiple
monitor support right. Also, they don't always work- they won't reposition window if it can't also
be resized.

This functionality isn't part of OSX, but other people have written small apps to provide this. I
remember using 2Up previously, and a colleague has mentioned Moom.


I should be able to launch applications by typing only
------------------------------------------------------

Luckily for me, this is a popular thing these days; originally I had to rely on launchers like
Launchy to add this functionality. Windows Vista added this to the start menu, and Windows 8 has
improved it further. I don't even know how to launch many OSX applications without using Spotlight.
Unity also pushes the limits of a keyboard based launcher with Dash, providing access to
applications, files, search results, or even products on Amazon. Unity also provides the HUD, which
allows users to use the keyboard to search and select dropdown menus inside of applications. (OSX
has this too, although I never remember the shortcut.)

Amusingly enough, this also isn't a strong point for XFCE. Still, I use Synapse with XFCE without
any issue, which provides enough functionality although it isn't as integrated as what the others
provide.

