---
category: examples
---

# Contributors

The IXM theme provides a `contributors` list, available as an
`{%raw%}{%include%}{%endraw%}` fragment. This will populate and create a list
of contributors based off of github usernames. A custom list can be passed in,
but a default list of `site.github.contributors` will be used.

{% capture contributors-note %}
  The objects found within the list passed should have *at least* a `.login`
  and `.html_url` key. The `.login` will be used to find the user's avatar.
{% endcapture %}
{% include note.html content=contributors-note %}

## Example Usage

This is what the contributors fragment looks like:

{% include contributors.html users=site.github.contributors %}
