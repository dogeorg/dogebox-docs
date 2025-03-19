// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><li class="part-title">Getting Started</li><li class="chapter-item expanded "><a href="getting_started/introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> Screenshots</div></li><li class="chapter-item expanded affix "><li class="part-title">Installation</li><li class="chapter-item expanded "><a href="installation/getting.html"><strong aria-hidden="true">3.</strong> Getting Dogebox</a></li><li class="chapter-item expanded "><a href="installation/metal.html"><strong aria-hidden="true">4.</strong> Bare Metal</a></li><li class="chapter-item expanded "><a href="installation/vms.html"><strong aria-hidden="true">5.</strong> Virtual Machines</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="installation/vms/virtualbox.html"><strong aria-hidden="true">5.1.</strong> Virtualbox</a></li><li class="chapter-item expanded "><a href="installation/vms/utm.html"><strong aria-hidden="true">5.2.</strong> UTM</a></li><li class="chapter-item expanded "><a href="installation/vms/generic.html"><strong aria-hidden="true">5.3.</strong> Generic VM</a></li></ol></li><li class="chapter-item expanded "><a href="installation/t6.html"><strong aria-hidden="true">6.</strong> NanoPC T6</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> Purchasing</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.2.</strong> (Optional) Hardware Setup</div></li></ol></li><li class="chapter-item expanded "><a href="installation/setup.html"><strong aria-hidden="true">7.</strong> Dogebox Initial Setup</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="installation/setup/disk.html"><strong aria-hidden="true">7.1.</strong> Disk Installation</a></li><li class="chapter-item expanded "><a href="installation/setup/configuration.html"><strong aria-hidden="true">7.2.</strong> Configuration</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">How To</li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> Recovery Mode</div></li><li class="chapter-item expanded "><a href="howto/pups.html"><strong aria-hidden="true">9.</strong> Installing Pups</a></li><li class="chapter-item expanded "><a href="howto/ports.html"><strong aria-hidden="true">10.</strong> Forwarding Required Ports</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">11.</strong> Updating &amp; Upgrading</div></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Dogebox Development</li><li class="chapter-item expanded "><a href="development/dre.html"><strong aria-hidden="true">12.</strong> Development Environment Setup</a></li><li class="chapter-item expanded "><a href="development/building.html"><strong aria-hidden="true">13.</strong> Building Dogebox</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.</strong> Pup Development</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">14.1.</strong> Manifest</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.2.</strong> Nix File</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.3.</strong> Dependencies</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.4.</strong> Communication</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.5.</strong> Metrics</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">15.</strong> Dogeboxd</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.</strong> DPanel</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">17.</strong> Dogenet</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">17.1.</strong> Handlers</div></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
