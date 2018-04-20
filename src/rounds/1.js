import { AlphabetizedMap } from '../utils/EntityMap';

let { _,x,b,c,d,e,f,g,h,i,j,k,l } = AlphabetizedMap;
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
    k=special=rainbow
    l=block=gold
*/

export const matrix = [
    [j,0,j,j,j,j,j,j,b,j,j,j,j,j,j,0,j],
     [j,j,0,0,0,0,0,b,b,0,0,0,0,0,j,j,_],
    [0,j,0,f,f,f,b,b,d,b,b,e,e,e,0,j,0],
     [j,0,f,d,0,e,e,d,d,f,f,0,d,e,0,j,_],
    [j,0,0,f,d,0,e,0,b,0,f,0,d,e,0,0,j],
     [0,0,0,b,d,d,0,b,b,0,d,d,b,0,0,0,_],
    [0,0,0,b,b,0,f,f,0,e,e,0,b,b,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
];

export const selection = [b, f, e, d];