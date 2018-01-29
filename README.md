# Kablamo

A simple [re-frame](https://github.com/Day8/re-frame) application with some nicely styled text.

### Live Demo

Try it here: https://jimtheman.github.io/Kablamo/(https://jimtheman.github.io/Kablamo/

### Created From Re-Frame Template

This project was created from the re-frame leiningen template with:

```
lein new re-frame kablamo +re-frisk +trace
```

## Usage

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Production Build


To compile clojurescript to javascript:

```
lein clean
lein cljsbuild once min
```

### Credits

Thanks to Claire Larsen (https://codepen.io/ClaireLarsen/pen/XmVyVX) and Alex Moore (https://codepen.io/MoorLex/pen/BzgyyY) from examples of some cool text css styles!
