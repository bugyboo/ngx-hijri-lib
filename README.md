# `ngx-hijri-lib` - The Hijri Library for Angular

[![npm](https://img.shields.io/badge/npm-1.0.5-blue.svg)](https://www.npmjs.com/package/hijri-js)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.5.3-blue.svg)](https://www.typescriptlang.org)
[![build](https://img.shields.io/badge/build-success-green.svg)](https://www.typescriptlang.org)

Angular 2+ plugin for Hijri dates conversions. Date calculations based on [hijri-js](https://github.com/bugyboo/hijri-js) and [solarHijri-js](https://github.com/xsoh/solarHijri-js) libraries.

This package provides components, pipes and service Angular for the date conversions.

It's available on plunker [plunker playground](https://embed.plnkr.co/THwo9r6rkf6GDWMoRCh4/)

## Install

It's registered on npmjs.com
as [ngx-hijri-lib](https://www.npmjs.com/package/ngx-hijri-lib).

#### npm 

```
$ npm install ngx-hijri-lib --save
```

#### yarn 

```
$ yarn add ngx-hijri-lib --save
```

## Usage

### Components

``` current day in Hijri

    <g2h></g2h>

```

``` convert date from Gregorian to Hijri

    <g2h date="31/10/2017"></g2h>

```

``` convert date from Gregorian to Hijri with diffrent splitter and return full format

    <g2h date="31-10-2017" splitter="-" format="full"></g2h>

```

``` current day in Gregorian

    <h2g></h2g>

```

``` convert Hijri date to Gregorian

    <h2g date="12/12/1438"></h2g>

```

### Pipes

``` convert Gregorian date to hijri

    <span>{{ '31/10/2017' | h2g }}</span>

```

``` convert Gregorian date to hijri with diffrent splitter and output format

    <span>{{ '31-10-2017' | h2g:'-':full }}</span>
    
```

``` convert Hijri date to Gregorian

    <span>{{ '12-12-1439' | g2h:'-':full }}</span>

```

# Development project

In the project source code there is a directory named (demo) where you can run this library in dev mode.

the (src) directory contains the source code of this package.

```
    git clone https://github.com/bugyboo/ngx-hijri-lib
    cd into ngx-...

    yarn install
    npm run test
    npm run build

    ng serve

```