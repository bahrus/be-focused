# be-focused [TODO]

```html
<button be-focused></button>
```

... sets the focus on the button when the behavior attaches.

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





