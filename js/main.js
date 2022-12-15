var a = 1.24;
let b = a.toString();
alert(typeof b+b);

let c = 2.5;
let d = c.toExponential(3);
alert(typeof d+d);

let e = 111.2222;
let f = e.toFixed(1);
alert(typeof f+f);

let g = 2.45;
let h = g.toPrecision(5);
alert(typeof h+h);

let i = 2.45;
let j= i.valueOf();
alert(typeof j+j);

let k = Number("10.45");
alert(typeof k+k)

let l = parseInt(10.46);
alert(typeof l + l)

let m = parseFloat(10.45);
alert(m);


// Number Properties

let n= Number.MIN_VALUE;
alert(n);

let o = Number.MAX_VALUE;
alert(o)

let p = Number.POSITIVE_INFINITY;
alert(p);

let q = Number.NEGATIVE_INFINITY;
alert(q);

let r= Number.NaN;
alert(r);

