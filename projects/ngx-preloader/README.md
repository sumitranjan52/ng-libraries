# Angular Preloaders

- Install using `npm i ngx-preloader`
- [Github repository][repo]
- Report [Issues][issues]

## Documentation

- [Ben10 Preloader][ben10preloader] by [Sumit Ranjan][sumitranjan52]

ben10 preloader with default color `black` and `white` having width `60px`

```
<ben10></ben10>
```

ben10 preloader with color `black` and color2 `white` having width `100px`. Please note: color or color2 should not start with `#`

```
<ben10 [color]="'000000'" [color2]="'ffffff'" [width]="100"></ben10>
```

- [Zooming Loader][zooming] by [Sumit Ranjan][sumitranjan52]

zooming preloader with default color `#764237` having default minWidth and maxWidth `50px` and `130px` respectively.

```
<zooming></zooming>
```

zooming preloader with color `#764237` having minWidth and maxWidth `50px` and `130px` respectively.

```
<zooming [color]="'764237'" [minWidth]="60" [maxWidth]="140"></zooming>
```

- [MultiCircle Preloader][multicircle] by [Sumit Ranjan][sumitranjan52]

multicircle preloader with default colors `'fc7670', 'ebd793', '6ed1b7', '38a484', '365050'` having minWidth and maxWidth `50px` and `130px` respectively.

```
<multicirle></multicirle>
```

multicircle preloader with colors `'fc7670', 'ebd793', '6ed1b7', '38a484', '365050'` having minWidth and maxWidth `60px` and `140px` respectively. Note `colors length should be 5`

```
<multicirle [colors]="['fc7670', 'ebd793', '6ed1b7', '38a484', '365050']" [minWidth]="60" [maxWidth]="140"></multicirle>
```

- [Flat loader][flatloader] by [Sumit Ranjan][sumitranjan52]

flat-loader have default config like position `top`, color `#be3118`, direction `left` and height `5px`

```
<flat-loader></flat-loader>
```

flat-loader can have position `top || bottom`, color `any HEX color starting with #`, direction `left || right` and height `any valid height`

```
  <flat-loader [position]="'bottom'" [color]="'#be3118'" [direction]="'right'" [height]="'10px'"></flat-loader>
```

- [Wave Preloader][wave] by [Mohsen Khakbiz][mohsen]

wave preloader having default color `f35353` and color2 `ffffff` with width `100px`

```
<wave></wave>
```

wave preloader with color `f35353` and color2 `fcfcfc` having width `120px`

```
<wave [color]="'f35353'" [color2]="'fcfcfc'" [width]="120"></wave>
```

- [Bouncy Circle][bouncycircle] by [Codrin Pavel][zerospree]

bouncy-circle preloader having default colors `'457B9D', 'E63946', 'DAD7CD', '392F5A'` and width `100px`

```
<bouncy-circle></bouncy-circle>
```

bouncy-circle preloader with colors `'457B9D', 'E63946', 'DAD7CD', '392F5A'` having width `200px`. Note `colors length should be 4`

```
<bouncy-circle [colors]="['457B9D', 'E63946', 'DAD7CD', '392F5A']" [width]="200"></bouncy-circle>
```

## Few Announcement for coming days

- More preloaders are coming. Provide your suggesstions [here][issues] with label `loader request`
- Demo page will be coming soon

[repo]: https://github.com/sumitranjan52/ng-libraries
[issues]: https://github.com/sumitranjan52/ng-libraries/issues
[ben10preloader]: https://codepen.io/sumitranjan52/pen/JzyOqB
[flatloader]: https://codepen.io/sumitranjan52/pen/oVNRjE
[multicircle]: https://codepen.io/sumitranjan52/pen/jdXKJr
[zooming]: https://codepen.io/sumitranjan52/pen/LYpdWGm
[wave]: https://codepen.io/Mohsen-Khakbiz/pen/uygmH
[bouncycircle]: https://codepen.io/zerospree/pen/aCjAz
[sumitranjan52]: https://codepen.io/sumitranjan52
[mohsen]: https://codepen.io/Mohsen-Khakbiz
[zerospree]: https://codepen.io/zerospree
