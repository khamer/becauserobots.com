---
title: Adding a Grid
layout: default
tags:
 - bookmarklet
 - tools
---

### Bookmarklet for Element Alignment

I threw together a bookmarklet that I'm using to work on the 'rhythm' of a page. All this does is
overlay a simple grid to the page which can be clicked on to remove.

Each square of the grid is 16px by 16px (meant to correspond to 1em by 1em), however there are
lighter lines at 8px and 4px. At some point, perhaps I'll make this configurable, but for now, its
just this one size.

Bookmark the following link:

<div class="actions">
	<a class="button" href="javascript:(function(){document.body.innerHTML+%3D%27%3Cdiv%20onclick%3D%22this.remove%28%29%22%20style%3D%22position%3Afixed%3Bopacity%3A.3%3Btop%3A0%3Bleft%3A0%3Bright%3A0%3Bbottom%3A0%3Bbackground%3Aurl%28data%3Aimage/gif%3Bbase64%2CR0lGODlhIAAgAIAAAAAAAAAAACH5BAEKAAEALAAAAAAgACAAAAJmhI+pewEBo5xv2liv3pR3j4VQRoqOmYGqCaaey8HbQ591Pdr6vZ6rrAFehL0h6phL+patHrH4UT0lBgftas1Wt1gctPlzisPKksW8nLJeY+nXzYvv5jyy+822g9NIfhmfdwc4CFEAADs%3D%29%20repeat%22%3E%3C/div%3E%27}());">Show Grid</a>
</div>
