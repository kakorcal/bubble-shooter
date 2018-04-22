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
    [i,0,0,0,0,0,0,i],
     [f,f,0,0,0,f,f,_],
    [e,h,k,e,e,k,h,e],
     [b,k,b,0,b,k,b,_],
    [f,g,e,g,g,e,g,f],
     [h,i,0,0,0,i,h,_],
    [g,k,b,h,h,b,k,g],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];