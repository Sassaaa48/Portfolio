// Redesign interactions: skill tabs and timeline folds. Content is untouched.
document.addEventListener('DOMContentLoaded', () => {
    // Skills: one group at a time, tab labels reuse the existing group headings
    const wrap = document.querySelector('.skill-groups');
    if (wrap) {
        const groups = [...wrap.querySelectorAll('.skill-group-container')];
        const bar = document.createElement('div');
        bar.className = 'skill-tabs';
        bar.setAttribute('role', 'tablist');
        const tabs = groups.map((g, i) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'skill-tab';
            b.setAttribute('role', 'tab');
            b.textContent = g.querySelector('h4').textContent.trim();
            b.addEventListener('click', () => select(i));
            b.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') select((i + 1) % groups.length, true);
                if (e.key === 'ArrowLeft') select((i - 1 + groups.length) % groups.length, true);
            });
            bar.appendChild(b);
            return b;
        });
        function select(n, focus) {
            groups.forEach((g, i) => g.classList.toggle('is-active', i === n));
            tabs.forEach((t, i) => { t.classList.toggle('active', i === n); t.setAttribute('aria-selected', i === n); t.tabIndex = i === n ? 0 : -1; });
            if (focus) tabs[n].focus();
        }
        wrap.classList.add('has-tabs');
        wrap.insertBefore(bar, wrap.firstChild);
        select(0);
    }
    // Timeline: description opens on click / Enter / Space
    document.querySelectorAll('.timeline-item').forEach((item) => {
        const desc = item.querySelector('.timeline-desc');
        if (!desc) return;
        item.classList.add('is-foldable');
        item.tabIndex = 0;
        item.setAttribute('role', 'button');
        item.setAttribute('aria-expanded', 'false');
        const toggle = () => { const o = item.classList.toggle('open'); item.setAttribute('aria-expanded', o); };
        item.addEventListener('click', toggle);
        item.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    });
});
