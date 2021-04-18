# ツールボックス
_Tsūrubokkusu_

Welcome to my little toolbox. Here are some procedures I
keep going back to. Keeping them together in a repo ensures
fixes and improvements are propagated to my other projects,
yay!

I started this during my bootcamp @
[Konexio](https://www.konexio.eu/index.html), hopefully this
project doesn't make them look bad. Whoops.

TODO: have not figured this part out yes: I can install it
as an npm but how do I keep it up to date with the repo?

Feel free to use it or parts. Please report bugs and
improvements.

## General Notes

I have tried to keep the behaviour as unsurprising as
possible for js, so `arelatStar(1)(['a']) -> [undefined]`.
When I break this rule, I will make a note of it on the
jsdoc.

You will see procedures in pairs: `lengths` and `lengthsA`
for example. This hints at their signature: `lengths([],
[1]) === lengthsA([[[], [1]]])`.

The `test` script in `package.json` is horrific, but
required to switch node to es modules AND not get warnings.
Improvements *very* welcome.

## testing

```
npm test
```

## Dependencies

### devDependencies

- Jest for testing, Mocha wouldn't behave with es modules +
  watch.

## Get it

### 1. Using the command line

In your favored shell:

```
git clone https://github.com/grenle/tsurubokkusu.git
```

Or, if you favour SSH:

```
git clone git@github.com:grenle/tsurubokkusu.git
```

### 2. Using GitHub Desktop

Obtain the software here: https://desktop.github.com/ and see the help section
on the site. This is like the command line but with buttons, which you may
prefer. I also has bells and whistles.

### 3. Just as a compressed folder

You can also download a zip of the whole project by clicking the 'Code' button
near the top of this page and selecting 'Download ZIP'.
