/** Represents the name of a `data-` tag whose value is also stored within
 * localStorage.
 *
 * The target name given (e.g., syntax) will be bound to an element with the id
 * `${Theme#target}-theme` The element *must* be a `<select>` tag. No
 * enforcement of this is used.
 */
class Theme {
  constructor(target) {
    this.target = target;
    this.current = localStorage[this.target];
    this.update();
  }

  /** Returns the <select> object */
  get options() { return document.getElementById(`${this.target}-theme`); }

  /** Returns the current value of Theme#target found within `localStorage` */
  get current() { return localStorage[this.target]; }
  /** This updates *both* the top-level `data-*` attribute *and* `localStorage`
   *
   * If a `false` value is passed as the theme, the localStorage is deleted and
   * the `data-*` attribute is unset.
   */
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

  /* Updates the bound `<select>` to show the correct `<option>` */
  update() {
    for (const option of this.options) {
      option.selected = option.value == this.current;
    }
  }

  /* Resets the bound `<select>` to show the initial `<option>` */
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

const syntax = new Theme('syntax');
const site = new Theme('site');

onChange('syntax-theme', (event) => { syntax.current = event.target.value; });
onChange('site-theme', (event) => { site.current = event.target.value; });
onClick('reset-settings', () => {
  syntax.reset();
  site.reset();
});
