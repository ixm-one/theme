---
category: customization
---

# Landing Page

Landing pages sometimes require header and footer content that is not found on
other project pages. For this reason, the `layout: landing` template will
optionally inject `{% raw %}{% include %}{% endraw %}` fragments from the
`_include/headers` and `_include/footers` directories into the landing page's
`<header>` and `<footer>` elements respectively if they are named in the pages
front matter.

```yaml
sections:
  headers:
    - navigation.html
  footers:
    - copyright.html
    - social-media.html
```

This is a small workaround for the lack of shortcode found within the set of
jekyll plugins found within GitHub Pages.
