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
    [m,m,m,0,0,0,0,0,b,0,0,0,0,0,m,m,m],
     [m,m,0,0,k,e,b,i,f,h,c,g,0,0,m,m,_],
    [m,m,m,k,e,0,0,0,f,h,0,0,c,g,m,m,m],
     [m,m,0,0,k,e,b,i,f,h,c,g,0,0,m,m,_],
    [m,m,m,k,e,0,0,0,f,h,0,0,c,g,m,m,m],
     [m,m,0,0,k,e,b,i,f,h,c,g,0,0,m,m,_],
    [m,m,m,0,0,0,0,0,0,0,0,0,0,0,m,m,m],
     [m,m,l,0,0,0,0,0,0,0,0,0,0,l,m,m,_],
    [m,m,m,0,0,0,0,0,0,0,0,0,0,0,m,m,m],
     [m,m,0,0,0,0,0,0,0,0,0,0,0,0,m,m,_],
    [m,m,m,0,0,0,0,0,0,0,0,0,0,0,m,m,m],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
];