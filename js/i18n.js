(function() {
    const LANG_KEY = 'irina_lang';
    const currentLang = localStorage.getItem(LANG_KEY) || 'ru';

    // Export i18n helper
    const i18n = {
        lang: currentLang,
        setLanguage: function(lang) {
            if (lang !== 'ru' && lang !== 'uk') return;
            localStorage.setItem(LANG_KEY, lang);
            window.location.reload();
        },
        getTranslation: function(dict, value) {
            const trimmed = value ? value.trim() : '';
            if (!trimmed) return '';
            if (dict[trimmed]) return dict[trimmed];

            const normalized = trimmed.replace(/\s+/g, ' ');
            return dict[normalized] || '';
        },
        translateDOM: function() {
            if (this.lang !== 'uk') {
                this.updateActiveToggle();
                return; // Default language is Russian, no translation needed
            }

            const dict = window.translations && window.translations.uk;
            if (!dict) {
                console.warn('Ukrainian translations dictionary not loaded.');
                this.updateActiveToggle();
                return;
            }

            // Update HTML lang attribute
            document.documentElement.setAttribute('lang', 'uk');

            // Translate document title
            const trimmedTitle = document.title ? document.title.trim() : '';
            const translatedTitle = this.getTranslation(dict, trimmedTitle);
            if (translatedTitle) {
                document.title = translatedTitle;
            }

            // Walk the DOM tree
            const walk = (node) => {
                if (node.nodeType === 3) { // Text node
                    const rawVal = node.nodeValue;
                    const trimmed = rawVal.trim();
                    const translated = i18n.getTranslation(dict, trimmed);
                    if (translated) {
                        const leadingSpace = rawVal.match(/^\s*/)[0];
                        const trailingSpace = rawVal.match(/\s*$/)[0];
                        node.nodeValue = leadingSpace + translated + trailingSpace;
                    }
                } else if (node.nodeType === 1) { // Element node
                    const tag = node.tagName.toLowerCase();
                    if (tag !== 'script' && tag !== 'style' && tag !== 'iframe' && tag !== 'noscript') {
                        // Translate common text attributes
                        const translatedPlaceholder = i18n.getTranslation(dict, node.placeholder);
                        if (translatedPlaceholder) {
                            node.placeholder = translatedPlaceholder;
                        }
                        const translatedAlt = i18n.getTranslation(dict, node.alt);
                        if (translatedAlt) {
                            node.alt = translatedAlt;
                        }
                        const translatedNodeTitle = i18n.getTranslation(dict, node.title);
                        if (translatedNodeTitle) {
                            node.title = translatedNodeTitle;
                        }
                        const ariaLabel = node.getAttribute('aria-label');
                        const translatedAriaLabel = i18n.getTranslation(dict, ariaLabel);
                        if (translatedAriaLabel) {
                            node.setAttribute('aria-label', translatedAriaLabel);
                        }
                        if (node.hasAttribute('data-label')) {
                            const translatedLabel = i18n.getTranslation(dict, node.getAttribute('data-label'));
                            if (translatedLabel) {
                                node.setAttribute('data-label', translatedLabel);
                            }
                        }
                        // Recurse children
                        for (let child of node.childNodes) {
                            walk(child);
                        }
                    }
                }
            };

            walk(document.body);

            // Translate dynamic JS data structures if present
            if (typeof blogTabsData !== 'undefined') {
                this.translateObject(blogTabsData, dict);
                // Re-render current active tab if the function exists
                const activeTab = document.querySelector('.blog-tab-link.active');
                if (activeTab && typeof renderBlogTab === 'function') {
                    renderBlogTab(activeTab.getAttribute('data-blog-tab'));
                }
            }

            this.updateActiveToggle();
        },

        translateObject: function(obj, dict) {
            if (!obj || typeof obj !== 'object') return;
            for (let key in obj) {
                if (typeof obj[key] === 'string') {
                    const translated = this.getTranslation(dict, obj[key]);
                    if (translated) {
                        obj[key] = translated;
                    }
                } else if (typeof obj[key] === 'object') {
                    this.translateObject(obj[key], dict);
                }
            }
        },

        updateActiveToggle: function() {
            // Wait for DOM to finish parsing active toggle styling
            const toggles = document.querySelectorAll('.lang-switcher .lang-btn');
            toggles.forEach(btn => {
                const lang = btn.getAttribute('data-lang');
                if (lang === this.lang) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
    };

    window.i18n = i18n;

    // Run translation when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => i18n.translateDOM());
    } else {
        i18n.translateDOM();
    }
})();
