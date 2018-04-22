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
    [f,0,0,e,0,0,k,0],
     [b,0,0,i,0,0,f,_],
    [k,0,0,h,0,0,b,0],
     [c,0,l,g,0,0,g,_],
    [e,0,0,c,0,0,h,0],
     [i,0,0,k,0,0,i,_],
    [h,0,0,f,0,0,e,0],
     [g,0,0,b,0,0,k,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];