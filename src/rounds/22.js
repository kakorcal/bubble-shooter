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
    [f,0,0,0,0,0,0,g],
     [f,e,k,0,0,g,i,_],
    [f,b,0,0,g,i,0,g],
     [0,0,g,i,0,g,i,_],
    [0,g,i,0,g,i,0,g],
     [i,0,g,i,0,g,i,_],
    [0,g,i,0,g,i,0,g],
     [0,0,g,i,0,g,i,_],
    [0,g,i,0,g,i,0,g],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];