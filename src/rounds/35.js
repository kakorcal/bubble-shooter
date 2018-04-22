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
    [k,0,0,0,0,0,0,c],
     [b,0,0,b,0,0,k,_],
    [0,c,0,k,c,0,b,0],
     [0,k,c,b,k,c,0,_],
    [k,c,b,k,c,b,k,c],
     [0,k,c,b,k,c,0,_],
    [0,k,c,b,k,c,b,0],
     [b,k,c,b,k,c,b,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];