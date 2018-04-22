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
    [0,0,0,c,0,0,0,c,c,c,0,0,0,c,0,0,0],
     [0,0,c,c,0,0,c,b,b,c,0,0,c,c,0,0,_],
    [0,c,c,b,c,c,c,b,f,b,c,c,c,b,c,c,0],
     [c,b,b,b,b,j,b,f,f,b,j,b,b,b,b,c,_],
    [0,f,b,j,b,b,j,b,f,b,j,b,b,j,b,f,0],
     [0,i,b,j,j,j,j,b,b,j,j,j,j,b,i,0,_],
    [0,0,b,b,b,j,b,b,j,b,b,j,b,b,b,0,0],
     [0,0,h,f,i,b,h,f,f,h,b,i,f,h,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
];