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
    [0,0,0,k,f,0,0,0],
     [0,b,e,j,i,f,0,_],
    [j,e,k,0,0,b,i,j],
     [b,j,h,0,e,j,b,_],
    [j,0,0,f,k,0,0,j],
     [0,0,i,j,h,0,0,_],
    [j,i,b,0,0,k,h,j],
     [f,j,e,0,e,j,f,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];