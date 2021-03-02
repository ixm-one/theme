---
category: examples
---

# Admonitions

There are quite a few 'admonitions' available via the {% raw %}`{% include %}`
{% endraw %} tag. These are provided to be equivalent to the [Sphinx][1]
documentation generator's admonitions. Examples are shown below.

{% highlight liquid %}
{% raw %}
{% include danger.html content="DANGER WILL ROBINSON" %}
{% endraw %}
{% endhighlight %}

{% include danger.html content="DANGER WILL ROBINSON" %}

{% highlight liquid %}
{% raw %}
{% include warning.html content="This is a warning, be aware there might be
consequences" %}
{% endraw %}
{% endhighlight %}

{% include warning.html content="This is a warning, be aware there might be
consequences" %}

{% highlight liquid %}
{% raw %}
{% include note.html content="This is a simple note" %}
{% endraw %}
{% endhighlight %}

{% include note.html content="This is a simple note" %}

{% highlight liquid %}
{% raw %}
{% include tip.html content="This is a neat little tip 🙂" %}
{% endraw %}
{% endhighlight %}

{% include tip.html content="This is a neat little tip 🙂" %}

[1]: https://sphinx-doc.org
