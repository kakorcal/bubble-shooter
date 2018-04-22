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
    [c,c,c,c,c,c,c,c],
     [f,k,e,b,h,i,0,_],
    [c,c,c,c,c,c,c,c],
     [f,k,e,b,h,0,i,_],
    [c,c,c,c,c,c,c,c],
     [f,k,e,b,0,h,i,_],
    [c,c,c,c,c,c,c,c],
     [f,k,e,0,b,h,i,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];