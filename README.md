## Webpack-plugin

This project was created to represent the issue, I think it will help to find a solution

## Issue

The original issue is here - [https://github.com/webpack/webpack/issues/1175](https://github.com/webpack/webpack/issues/1175)

## What I want to

1) I want `my-sprite.svg` to be in `manifest.json` - now it's not working

2) I don't want to set size this way:

```
size: function() { return 5; }
```

Because I think it's strange that I added a file with source and I should hard set size to it.

It's not working without size field. What i should do?

3) `my-sprite.svg` is appering in `public/svg/` path, but there is no hash.

I expected to see something like - `my-sprite.f0597993fbc752d49fdadc623e2cb63a.svg`

But I see just - `my-sprite.svg`

## How to reproduce the issue

1. `git clone <path-to-project>`
2. `npm i`
3. `npm run build`

## 

# Thanks in advance for your help