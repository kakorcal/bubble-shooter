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
    [b,b,b,0,0,0,k,k],
     [i,i,0,k,0,k,k,_],
    [f,f,0,k,0,c,k,k],
     [b,0,k,k,c,0,b,_],
    [i,0,k,k,c,k,0,i],
     [0,k,c,c,k,k,0,_],
    [0,k,c,c,k,k,k,0],
     [0,b,0,i,0,f,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];