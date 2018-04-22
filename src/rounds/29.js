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
    [0,0,f,f,0,h,h,0,k,k,0,e,e,0,b,b,0],
     [0,f,i,f,h,f,h,k,h,k,e,k,e,b,e,b,_],
    [0,0,0,f,j,0,h,j,0,k,j,0,e,j,0,b,0],
     [h,h,j,c,c,j,g,g,j,f,f,j,i,i,0,0,_],
    [h,c,h,c,g,c,g,k,g,f,i,f,i,b,i,0,0],
     [h,0,0,c,0,0,g,0,0,f,0,0,i,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
];