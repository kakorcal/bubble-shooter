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
    [f,k,k,k,k,k,k,f],
     [f,h,h,h,h,h,f,_],
    [k,f,h,h,h,h,f,k],
     [h,f,h,h,h,f,b,_],
    [k,h,f,h,h,f,i,h],
     [e,b,f,h,f,h,k,_],
    [e,k,i,f,f,i,k,e],
     [h,i,k,b,e,b,e,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];