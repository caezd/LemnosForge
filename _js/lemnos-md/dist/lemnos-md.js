(function () {
    'use strict';

    var md = window.markdownit({
        typographer: true,
        html: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs ' + lang + '"><code>' +
                        hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                        '</code></pre>';
                } catch (__) { console.log(__); }
            }

            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    })
        .use(markdownitIns)
        .use(markdownitDeflist)
        .use(markdownitMark)
        .use(markdownItAttrs)
        .use(markdownitContainer)
        .use(markdownitFootnote)
        .use(markdownitCheckbox, {
            divWrap: true,
            divClass: 'cb'
        });

    var forumName = document.querySelector('#navlist').lastChild.innerText;
    var topicTitle = document.querySelector('.blogPost__title').innerText;

    window.slugify = function (text) {
        return text
            .toString()
            .toLowerCase()
            .normalize('NFD')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-');
    };

    fetch('https://raw.githubusercontent.com/caezd/lemnos/main/' + slugify(forumName) + '/' + slugify(stripTags(topicTitle)) + '.md')
        .then(function (response) {
            return response.text()
        })
        .then(function (text) {
            var body = document.getElementById('mkd');
            if (!text.startsWith("404")) {
                body.innerHTML = md.render(text);
                var pre = body.querySelectorAll('pre');

                pre.forEach(function (el) {
                    appendCopyButton(el);
                });
            } else {
                body.innerHTML = `<p>404 : ${slugify(forumName)}/${slugify(stripTags(topicTitle))}.md n'existe pas encore.</p>`;
            }
        });

})();
