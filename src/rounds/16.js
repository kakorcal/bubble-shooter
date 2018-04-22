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
    [g,g,h,h,i,i,e,e],
     [k,0,g,e,h,0,f,_],
    [0,e,h,k,f,g,i,h],
     [b,0,e,0,k,0,g,_],
    [0,i,k,b,0,e,0,k],
     [f,c,i,k,b,h,e,_],
    [0,h,b,e,c,i,k,b],
     [g,k,h,0,f,b,i,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];