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
    [m,f,f,0,0,0,0,0,0,0,0,0,0,0,g,g,m],
     [m,f,k,b,e,h,i,c,c,g,f,k,b,e,g,m,_],
    [m,m,f,k,b,e,h,i,c,g,f,k,b,e,g,m,m],
     [m,m,0,0,f,k,b,e,h,i,c,g,0,0,m,m,_],
    [m,m,m,0,0,0,0,0,0,0,0,0,0,0,m,m,m],
     [m,m,m,0,0,0,0,0,0,0,0,0,0,m,m,m,_],
    [m,m,m,m,0,0,0,0,0,0,0,0,0,m,m,m,m],
     [m,m,m,m,0,0,0,0,0,0,0,0,m,m,m,m,_],
    [m,m,m,m,m,0,0,0,0,0,0,0,m,m,m,m,m],
     [m,m,m,m,m,0,0,0,0,0,0,m,m,m,m,m,_],
    [m,m,m,m,m,m,0,0,0,0,0,m,m,m,m,m,m],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
];