---
layout: post
title: "HelloWorld"
tags: ["Hello", "World"]
mathjax: true 
plot: true
---

This is a rendering test page

---

# This is an <h1> tag
## This is an <h2> tag
### This is an <h3> tag
#### This is an <h4> tag

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

* Item 1
* Item 2
* Item 3

1. Item 1
2. Item 2
3. Item 3

[link-name](link-url)

![img-name](/assets/img/logo.png)

> If you please draw me a sheep!

`This is an inline code.`


```html
<script>
	MathJax = {
		tex: {
			inlineMath: [['$', '$']],
			displayMath: [['$$', '$$']],
			processEnvironments: true,
			processRefs: true
		},
		options: {
			skipHtmlTags: ['noscript', 'style', 'textarea', 'pre', 'code'],
			ignoreHtmlClass: 'tex2jax_ignore',
			renderActions: {
				find_script_mathtex: [10, function (doc) {
					for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
						const display = !!node.type.match(/; *mode=display/);
						const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
						const text = document.createTextNode('');
						node.parentNode.replaceChild(text, node);
						math.start = { node: text, delim: '', n: 0 };
						math.end = { node: text, delim: '', n: 0 };
						doc.math.push(math);
					}
				}, '']
			}
		},
		svg: {
			fontCache: 'global'
		}
	};
</script>
<script id="MathJax-script" async src="https://cdn.staticfile.org/mathjax/3.0.1/es5/tex-svg.js"></script>
```





$\begin{aligned} C^{c}\left(u_{i-1}, u_{i}\right) &=\sum_{k=1}^{q} w_{k}^{c} C_{k}^{c}\left(u_{i-1}, u_{i}\right) C^{\prime}\left(t_{i}, u_{i}\right) &=\sum_{j=1}^{p} w_{j}^{\prime} C_{j}^{t}\left(t_{i}, u_{i}\right) \end{aligned}$





<span class="plot" id="function-continuity-singal"></span>
<script>
functionPlot({
  title: 'sin(x)',
  disableZoom: true,
  yAxis: {domain: [-1.5, 1.5]},
  height: 250,
  width: 330,
  target: '#function-continuity-singal',
  data: [{
    fn: 'sin(x)'
  }]
})
</script>