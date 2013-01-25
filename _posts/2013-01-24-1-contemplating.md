---
title: Boilerplates – Building an HTML5/CSS2 Starting Point
layout: default
tags:
 - HTML5
 - iMarc
---

The project I'm spending the majority of my time on this week and last week is
working on updating iMarc's boilerplate – the basic HTML and CSS we use
starting new projects – up to HTML5 elements with an eye towards responsive
site design.

Previously, we had

* A CSS Reset, based off of Eric Meyers', which all sites were expected to have.
* A set of base CSS rules that were more or less "sane defaults" for most
  elements we use.
* An HTML file with lots of sample markup for testing the CSS on a given site.
  This fufilled two purpoess – to make sure we have a 'complete' set of base
  styles on sites, and to make sure any content added via WYSIWYG fields in our
  CMS would be displayed properly.

When we started moving towards building reponsive sites, we started using the
HTML5 Boiler plate. The HTML5 Boilerplate was a great way to start, but we
wanted something leaner. I revisited Eric Meyers now updated thoughts on a
reset and sought out normalize.css, took a look at
[inkLing](https://github.com/dotink/inKLing), and a few others.

My original goals were

0. **Support all of the HTML(5) elements that are implemented in IE, Webkit, and
   Gecko.** We decided to go forward with using HTML5 tags on all new sites
   (and using the html5shiv to add support for IE7/IE8.)
0. **Keep the CSS file short.** We noticed that that once a CSS file reaches, say
   2000 lines, laziness kicks in and lots of rules get appended that should be
   organized appropriately.
0. **Implement markup that's close to what we use most places.** I looked a lot our recently finished sites and looked for what we did the most.

[This commit](https://github.com/imarc/boilerplate/commit/1441b598550b8630600899ea915057e199fb30a0) is probably the closest to the state this was at this point. However, after working with this further, I realized I should revise my goals to

0. **Support only the HTML(5) elements that iMarc uses on nearly every site.**
   Anything we don't use, don't reset. This substantially cleaned out a lot of
   CSS that wasn't going to be important most of the time.
0. **Keep the CSS file short.** No serious change here.
0. **Implment markup and CSS that reflects the 'greatest common denominator' of
   our typical sites instead of the 'average' of them.** This was a big
   difference as well.

We'll run through with this pass next, and it will probably influence our
standard, as things like having a `div.site` in between the body and parts of
the layout for widths, centering, etc., seems like a practice we should expect
and implement everywhere.

Anyway, for now this site is based off of the earlier version of the
boilerplate, but once we've ironed out some more I'll update this site to make
use of it as well. I'd also like to recommend the Firefox addon CSS Usage, which was a great way to identify which tags and selectors were in use on a given page.
