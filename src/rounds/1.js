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
    [0,m,0,f,f,f,b,b,d,b,b,e,e,e,0,m,0],
     [m,0,f,d,0,e,e,d,d,f,f,0,d,e,0,m,_],
    [m,0,0,f,d,0,e,0,b,0,f,0,d,e,0,0,m],
     [0,0,0,b,d,d,0,b,b,0,d,d,b,0,0,0,_],
    [0,0,0,b,b,0,f,f,0,e,e,0,b,b,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
];