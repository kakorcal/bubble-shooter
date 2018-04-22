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
    [h,h,h,h,h,h,h,h],
     [0,i,b,h,h,k,i,_],
    [0,0,f,f,k,e,i,e],
     [0,0,i,h,f,i,i,_],
    [0,0,0,h,i,b,k,k],
     [0,0,0,f,b,k,f,_],
    [0,0,0,0,i,f,i,b],
     [0,0,0,f,k,i,k,_],
    [0,0,0,0,i,i,f,e],
     [0,0,0,0,0,0,0,_],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,_],
    [x,x,x,x,x,x,x,x]
];