# Overview

The IXM Jekyll theme is used by both its [documentation][1] and the
[landing][2] page. While written to serve both site's purposes, it can be used
by others for general documentation needs. It's intended to be used *only* with
GitHub Pages, and as a result the theme itself is fairly minimal.

# Installation

The IXM theme supports the `remote_theme` setting *only* for GitHub Pages.
While this makes local development difficult, the theme itself rarely changes.

Add the following to your `_config.yml`:

```yaml
remote_theme: ixm-one/theme@main
```

# Development

A simple `Makefile` is provided for testing the theme locally with the given
example pages. Simply run `make build` or `make serve` to run the equivalent
command. If running under WSL2, `--force_polling` is added automatically.

[1]: https://docs.ixm.one
[2]: https://ixm.one

