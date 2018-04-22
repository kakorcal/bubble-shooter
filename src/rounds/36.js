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
    [0,0,0,h,f,0,0,0],
     [0,0,b,i,h,0,0,_],
    [0,0,f,h,b,i,0,0],
     [0,b,i,f,h,b,0,_],
    [0,f,h,b,i,f,h,0],
     [b,i,f,l,b,i,f,_],
    [f,h,b,i,f,h,b,i],
     [i,f,h,b,i,f,h,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];