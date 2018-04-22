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
    [0,0,0,h,k,e,0,0],
     [0,0,0,f,h,k,e,_],
    [0,0,0,b,i,f,h,0],
     [0,0,0,e,b,i,f,_],
    [0,0,0,h,k,e,b,0],
     [0,0,0,f,h,k,e,_],
    [0,0,0,0,0,f,h,0],
     [0,0,0,0,0,0,f,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];