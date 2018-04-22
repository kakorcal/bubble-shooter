import { AlphabetizedMap } from '../utils/EntityMap';

let { _,x,b,c,d,e,f,g,h,i,j,k,l,m } = AlphabetizedMap;
/* 
    b=flame=red
    c=N=blue
    d=coin=green
    e=star=yellow
    f=solidBlack=purple
    g=moon=skyBlue
    h=heart=orange
    i=triangle=pink
    j=blank=white
    k=grey=grey
    l=special=rainbow
    m=block=gold
*/

export default [
    [0,0,0,0,0,0,e,e],
     [0,0,0,0,0,k,k,_],
    [0,0,0,0,0,g,c,h],
     [0,0,0,0,h,e,k,_],
    [0,0,0,e,k,g,c,h],
     [0,0,g,c,h,e,k,_],
    [g,c,h,e,k,g,c,h],
     [k,g,c,g,c,h,e,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];