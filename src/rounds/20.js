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
    [m,m,m,0,i,g,0,m,m,m,0,c,f,0,m,m,m],
     [m,m,0,b,0,c,0,m,m,0,g,0,h,0,m,m,_],
    [m,m,m,0,e,0,f,h,m,b,i,0,k,0,m,m,m],
     [m,m,0,k,0,0,0,k,e,0,0,0,e,0,m,m,_],
    [m,m,m,h,0,0,0,0,0,0,0,0,0,b,m,m,m],
     [m,m,f,0,0,0,0,0,0,0,0,0,0,i,m,m,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
];