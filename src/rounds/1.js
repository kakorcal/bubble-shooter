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
    [m,0,m,m,m,m,m,m,b,m,m,m,m,m,m,0,m],
     [m,m,0,0,0,0,0,b,b,0,0,0,0,0,m,m,_],
    [0,m,0,f,f,f,b,b,k,b,b,e,e,e,0,m,0],
     [m,0,f,k,0,e,e,k,k,f,f,0,k,e,0,m,_],
    [m,0,0,f,k,0,e,0,b,0,f,0,k,e,0,0,m],
     [0,0,0,b,k,k,0,b,b,0,k,k,b,0,0,0,_],
    [0,0,0,b,b,0,f,f,0,e,e,0,b,b,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
];