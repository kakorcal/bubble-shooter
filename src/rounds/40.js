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
    [m,k,k,k,k,k,k,k,m,k,k,k,k,k,k,k,m],
     [k,f,f,e,e,b,b,k,k,b,b,e,e,f,f,k,_],
    [k,f,f,e,e,b,b,0,k,0,b,b,e,e,f,f,k],
     [k,b,b,f,f,e,e,0,0,e,e,f,f,b,b,k,_],
    [k,b,b,f,f,e,e,e,0,e,e,e,f,f,b,b,k],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
];