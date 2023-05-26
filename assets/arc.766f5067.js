import{c as n,p as t}from"./constant.4f073c13.js";import{aq as a,ar as r,ao as c,as as e,at as o,au as u,av as i,aw as y,ax as l,ay as f,az as s,aA as p,aB as x}from"./mermaid.core.11d0c700.js";function h(n){return n.innerRadius}function v(n){return n.outerRadius}function d(n){return n.startAngle}function g(n){return n.endAngle}function m(n){return n&&n.padAngle}function T(n,t,a,c,e,o,u,i){var y=a-n,l=c-t,f=u-e,s=i-o,p=s*y-f*l;if(!(p*p<r))return[n+(p=(f*(t-o)-s*(n-e))/p)*y,t+p*l]}function A(n,t,a,r,c,e,o){var u=n-a,i=t-r,y=(o?e:-e)/l(u*u+i*i),f=y*i,p=-y*u,x=n+f,h=t+p,v=a+f,d=r+p,g=(x+v)/2,m=(h+d)/2,T=v-x,A=d-h,R=T*T+A*A,j=c-e,q=x*d-v*h,w=(A<0?-1:1)*l(s(0,j*j*R-q*q)),z=(q*A-T*w)/R,B=(-q*T-A*w)/R,P=(q*A+T*w)/R,b=(-q*T+A*w)/R,k=z-g,C=B-m,D=P-g,E=b-m;return k*k+C*C>D*D+E*E&&(z=P,B=b),{cx:z,cy:B,x01:-f,y01:-p,x11:z*(c/j-1),y11:B*(c/j-1)}}function R(){var s=h,R=v,j=n(0),q=null,w=d,z=g,B=m,P=null;function b(){var n,h,v=+s.apply(this,arguments),d=+R.apply(this,arguments),g=w.apply(this,arguments)-a,m=z.apply(this,arguments)-a,b=i(m-g),k=m>g;if(P||(P=n=t()),d<v&&(h=d,d=v,v=h),d>r)if(b>c-r)P.moveTo(d*e(g),d*o(g)),P.arc(0,0,d,g,m,!k),v>r&&(P.moveTo(v*e(m),v*o(m)),P.arc(0,0,v,m,g,k));else{var C,D,E=g,F=m,G=g,H=m,I=b,J=b,K=B.apply(this,arguments)/2,L=K>r&&(q?+q.apply(this,arguments):l(v*v+d*d)),M=u(i(d-v)/2,+j.apply(this,arguments)),N=M,O=M;if(L>r){var Q=p(L/v*o(K)),S=p(L/d*o(K));(I-=2*Q)>r?(G+=Q*=k?1:-1,H-=Q):(I=0,G=H=(g+m)/2),(J-=2*S)>r?(E+=S*=k?1:-1,F-=S):(J=0,E=F=(g+m)/2)}var U=d*e(E),V=d*o(E),W=v*e(H),X=v*o(H);if(M>r){var Y,Z=d*e(F),$=d*o(F),_=v*e(G),nn=v*o(G);if(b<y&&(Y=T(U,V,_,nn,Z,$,W,X))){var tn=U-Y[0],an=V-Y[1],rn=Z-Y[0],cn=$-Y[1],en=1/o(x((tn*rn+an*cn)/(l(tn*tn+an*an)*l(rn*rn+cn*cn)))/2),on=l(Y[0]*Y[0]+Y[1]*Y[1]);N=u(M,(v-on)/(en-1)),O=u(M,(d-on)/(en+1))}}J>r?O>r?(C=A(_,nn,U,V,d,O,k),D=A(Z,$,W,X,d,O,k),P.moveTo(C.cx+C.x01,C.cy+C.y01),O<M?P.arc(C.cx,C.cy,O,f(C.y01,C.x01),f(D.y01,D.x01),!k):(P.arc(C.cx,C.cy,O,f(C.y01,C.x01),f(C.y11,C.x11),!k),P.arc(0,0,d,f(C.cy+C.y11,C.cx+C.x11),f(D.cy+D.y11,D.cx+D.x11),!k),P.arc(D.cx,D.cy,O,f(D.y11,D.x11),f(D.y01,D.x01),!k))):(P.moveTo(U,V),P.arc(0,0,d,E,F,!k)):P.moveTo(U,V),v>r&&I>r?N>r?(C=A(W,X,Z,$,v,-N,k),D=A(U,V,_,nn,v,-N,k),P.lineTo(C.cx+C.x01,C.cy+C.y01),N<M?P.arc(C.cx,C.cy,N,f(C.y01,C.x01),f(D.y01,D.x01),!k):(P.arc(C.cx,C.cy,N,f(C.y01,C.x01),f(C.y11,C.x11),!k),P.arc(0,0,v,f(C.cy+C.y11,C.cx+C.x11),f(D.cy+D.y11,D.cx+D.x11),k),P.arc(D.cx,D.cy,N,f(D.y11,D.x11),f(D.y01,D.x01),!k))):P.arc(0,0,v,H,G,k):P.lineTo(W,X)}else P.moveTo(0,0);if(P.closePath(),n)return P=null,n+""||null}return b.centroid=function(){var n=(+s.apply(this,arguments)+ +R.apply(this,arguments))/2,t=(+w.apply(this,arguments)+ +z.apply(this,arguments))/2-y/2;return[e(t)*n,o(t)*n]},b.innerRadius=function(t){return arguments.length?(s="function"==typeof t?t:n(+t),b):s},b.outerRadius=function(t){return arguments.length?(R="function"==typeof t?t:n(+t),b):R},b.cornerRadius=function(t){return arguments.length?(j="function"==typeof t?t:n(+t),b):j},b.padRadius=function(t){return arguments.length?(q=null==t?null:"function"==typeof t?t:n(+t),b):q},b.startAngle=function(t){return arguments.length?(w="function"==typeof t?t:n(+t),b):w},b.endAngle=function(t){return arguments.length?(z="function"==typeof t?t:n(+t),b):z},b.padAngle=function(t){return arguments.length?(B="function"==typeof t?t:n(+t),b):B},b.context=function(n){return arguments.length?(P=null==n?null:n,b):P},b}export{R as a};
