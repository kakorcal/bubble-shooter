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
    [i,0,0,l,l,0,0,i],
     [f,f,0,l,0,f,f,_],
    [e,h,k,i,i,k,h,e],
     [b,k,b,g,b,k,b,_],
    [f,g,e,f,f,e,g,f],
     [h,i,k,g,k,i,h,_],
    [g,0,b,0,0,b,0,g],
     [i,0,k,0,k,0,i,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];