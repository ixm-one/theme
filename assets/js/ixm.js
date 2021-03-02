class Theme {
  constructor(target) {
    this.target = target;
    this.current = localStorage[this.target];
    this.update();
  }

  get options() { return document.getElementById(`${this.target}-theme`); }

  get current() { return localStorage[this.target]; }
  set current(theme) {
    const html = document.documentElement;
    if (!theme) {
      delete html.dataset[this.target];
      delete localStorage[this.target];
    } else {
      html.dataset[this.target] = theme;
      localStorage[this.target] = theme;
    }
  }

  update() {
    for (const option of this.options) {
      option.selected = option.value == this.current;
    }
  }

  reset() {
    for (const option of this.options) {
      option.selected = false;
    }
    this.current = null;
  }
}

function onChange(id, fn) {
  document.getElementById(id).addEventListener('change', fn);
}

function onClick(id, fn) {
  document.getElementById(id).addEventListener('click', fn);
}

/* non-prelude */
const syntax = new Theme('syntax');
const site = new Theme('site');

onChange('syntax-theme', (event) => { syntax.current = event.target.value; });
onChange('site-theme', (event) => { site.current = event.target.value; });
onClick('reset-settings', () => {
  syntax.reset();
  site.reset();
});
