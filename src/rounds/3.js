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
    [0,0,0,f,f,f,f,0],
     [0,i,i,i,0,f,0,_],
    [0,i,0,b,b,b,b,0],
     [0,e,e,e,e,0,b,_],
    [0,e,0,k,k,k,k,0],
     [0,h,h,h,h,0,k,_],
    [0,f,i,b,e,k,h,0],
     [0,0,0,e,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];