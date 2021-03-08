---
category: examples
title: Landing Page
layout: landing
---

# {{ page.title }}

Landing Pages have a simple layout and style. They are intended to be a simple
page that requires more work from users to add elements. The main content of a
page is whatever was written in a given file (its `{{contents}}`). However,
users can also inject fragments into the `<header>` and `<footer>` sections by
placing files for use via `{% raw %}{% include %}{% endraw %}` in the
`_include/headers` and `_include/footers` directories respectively. To then
include them into a specific file, they must be referenced via the page's
frontmatter:

```yaml
---
layout: landing
sections:
  headers: ['my-header-content.html']
  footers: ['my-footer-content.html']
---
```

Very little work is done to ensure the same capabilities as the rest of the
site, as can be evidenced by the *now missing* navigation menu to the left. 

{% include note.html content="You will need to press 'back' to continue
browsing the theme documentation" %}
