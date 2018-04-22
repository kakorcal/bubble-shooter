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
    [0,0,b,0,0,i,0,0],
     [0,h,c,e,e,i,0,_],
    [0,i,0,f,g,0,g,0],
     [c,k,g,0,c,i,c,_],
    [e,0,k,c,g,e,0,f],
     [e,i,g,e,h,h,g,_],
    [i,b,e,k,h,f,g,c],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];