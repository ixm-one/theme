---
category: customization
---

# Stylesheets

The IXM theme currently provides 3 default stylesheets:
 - `ixm.icons.css`
 - `ixm.fonts.css`
 - `ixm.main.css`

Users can also inject their own CSS files by naming them in the front matter of
a page, underneath the `assets.stylesheets` key:

```yaml
assets:
  stylesheets:
    - assets/css/my.custom.stylesheet
```

This is most useful for the `layout: landing` page, as these tend to require
more customization beyond the default layout (and due to projects typically
requiring only *one* landing page)
