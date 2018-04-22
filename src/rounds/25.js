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
    [f,l,h,l,k,l,e,0],
     [i,j,c,0,h,j,k,_],
    [b,0,g,l,c,0,h,0],
     [e,j,f,0,g,j,c,_],
    [k,0,i,l,f,0,g,0],
     [h,j,b,0,i,j,f,_],
    [c,0,e,l,b,0,i,0],
     [g,0,k,0,e,0,b,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];