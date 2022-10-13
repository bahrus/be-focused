# be-focused

[![Playwright Tests](https://github.com/bahrus/be-focused/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/be-focused/actions/workflows/CI.yml)

<a href="https://nodei.co/npm/be-focused/"><img src="https://nodei.co/npm/be-focused.png"></a>


Size of package, including custom element behavior framework (be-decorated):

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-focused?style=for-the-badge)](https://bundlephobia.com/result?p=be-focused)

Size of new code in this package:

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-focused?compression=gzip">

```html
<button be-focused></button>
```

... sets the focus on the button when the behavior attaches.

This  is useful when HTML is added [post page-load](https://stackoverflow.com/questions/27313872/auto-focus-is-not-working-for-input-field).

## Setting focus on an element within [TODO]

```html
<div be-focused=.primary-button>
    ...
    <button class=primary-button>
</div>
```

## Setting focus on mouse hover over[TODO]

```html
<div be-focused='{
    "when": {
        "mouseHover": true
    }
}'>
```

## Setting focus on mouse hover over closest [TODO]

```html
<div be-focused='{
    "what": ".primary-button",
    "when": {
        "mouseHover": {
            "closest": "section"
        }
    }
}'>
```

## Media query support [TODO]





