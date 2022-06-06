const ue=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=l(i);fetch(i.href,c)}};ue();function h(){}function re(t){return t()}function ie(){return Object.create(null)}function V(t){t.forEach(re)}function pe(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function de(t){return Object.keys(t).length===0}function n(t,e){t.appendChild(e)}function $(t,e,l){t.insertBefore(e,l||null)}function x(t){t.parentNode.removeChild(t)}function r(t){return document.createElement(t)}function J(t){return document.createTextNode(t)}function m(){return J(" ")}function s(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function fe(t){return Array.from(t.childNodes)}function A(t,e,l,o){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,o?"important":"")}let Q;function I(t){Q=t}const G=[],se=[],Y=[],ae=[],be=Promise.resolve();let U=!1;function me(){U||(U=!0,be.then(oe))}function X(t){Y.push(t)}const K=new Set;let W=0;function oe(){const t=Q;do{for(;W<G.length;){const e=G[W];W++,I(e),ge(e.$$)}for(I(null),G.length=0,W=0;se.length;)se.pop()();for(let e=0;e<Y.length;e+=1){const l=Y[e];K.has(l)||(K.add(l),l())}Y.length=0}while(G.length);for(;ae.length;)ae.pop()();U=!1,K.clear(),I(t)}function ge(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}const F=new Set;let ve;function P(t,e){t&&t.i&&(F.delete(t),t.i(e))}function N(t,e,l,o){if(t&&t.o){if(F.has(t))return;F.add(t),ve.c.push(()=>{F.delete(t),o&&(l&&t.d(1),o())}),t.o(e)}}function R(t){t&&t.c()}function j(t,e,l,o){const{fragment:i,on_mount:c,on_destroy:a,after_update:d}=t.$$;i&&i.m(e,l),o||X(()=>{const p=c.map(re).filter(pe);a?a.push(...p):V(p),t.$$.on_mount=[]}),d.forEach(X)}function z(t,e){const l=t.$$;l.fragment!==null&&(V(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function he(t,e){t.$$.dirty[0]===-1&&(G.push(t),me(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(t,e,l,o,i,c,a,d=[-1]){const p=Q;I(t);const u=t.$$={fragment:null,ctx:null,props:c,update:h,not_equal:i,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:ie(),dirty:d,skip_bound:!1,root:e.target||p.$$.root};a&&a(u.root);let f=!1;if(u.ctx=l?l(t,e.props||{},(b,g,...v)=>{const y=v.length?v[0]:g;return u.ctx&&i(u.ctx[b],u.ctx[b]=y)&&(!u.skip_bound&&u.bound[b]&&u.bound[b](y),f&&he(t,b)),g}):[],u.update(),f=!0,V(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){const b=fe(e.target);u.fragment&&u.fragment.l(b),b.forEach(x)}else u.fragment&&u.fragment.c();e.intro&&P(t.$$.fragment),j(t,e.target,e.anchor,e.customElement),oe()}I(p)}class E{$destroy(){z(this,1),this.$destroy=h}$on(e,l){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(l),()=>{const i=o.indexOf(l);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!de(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ye(t){let e,l,o,i,c,a,d,p,u,f,b,g;return{c(){e=r("article"),l=r("h1"),l.textContent="Competences",o=m(),i=r("div"),i.innerHTML=`<h4><p class="svelte-id8bkz">Auto/Personnal Grading</p></h4> 
    <div><p class="text-lead svelte-id8bkz">Langages : Color Legend</p> 
        <p class="svelte-id8bkz">...Least Mastered (red) to Generally fluent (blue)...</p> 
        <p class="svelte-id8bkz">...Color Legend : Red Orange Yellow Green Blue ...</p></div> 
    <ul class="paper paper-btn btn-warning-outline col flex-spaces comps"><li class="paper-btn btn-warning">C</li> 
        <li class="paper-btn btn-warning">C#</li> 
        <li class="paper-btn btn-warning">Ruby</li> 
        <li class="paper-btn btn-warning">React.js</li> 
        <li class="paper-btn btn-warning">React Native</li></ul> 
    
    <ul class="paper paper-btn btn-success-outline col flex-spaces comps"><li class="paper-btn btn-success">Svelte(-ts)</li> 
        <li class="paper-btn btn-success">PHP</li> 
        <li class="paper-btn btn-success">Java</li> 
        <li class="paper-btn btn-success">Python</li> 
        <li class="paper-btn btn-success">Cpp / C++</li></ul> 
    
    <ul class="paper paper-btn btn-secondary-outline col flex-spaces comps "><li class="paper-btn btn-secondary">Javascript</li>  
        <li class="paper-btn btn-secondary">Typescript</li> 
        <li class="paper-btn btn-secondary">Angular</li></ul>`,c=m(),a=r("div"),a.innerHTML=`<div><p class="text-lead svelte-id8bkz">Notions : Color Legend</p> 
        <p class="svelte-id8bkz">...Least Mastered (red) to Generally fluent (blue)...</p> 
        <p class="svelte-id8bkz">...Color Legend : Red Orange Yellow Green Blue ...</p></div> 

    <ul class="paper paper-btn btn-danger-outline col flex-spaces comps"><li class="paper-btn btn-danger">Reseau</li> 
        <li class="paper-btn btn-danger">DevOps: Backend Logics : Kubernetes Docker ....</li></ul> 

    <ul class="paper paper-btn btn-warning-outline col flex-spaces comps"><li class="paper-btn btn-warning">Continuous Integration / Deployement : Github Actions , AWS services</li> 
        <li class="paper-btn btn-warning">API : Application Programming Interface</li></ul> 
    
    <ul class="paper paper-btn btn-success-outline col flex-spaces comps"><li class="paper-btn btn-success">Tools: Gitpod, Gitlab, Github</li> 
        <li class="paper-btn btn-success">MVC : Model View Controller</li> 
        <li class="paper-btn btn-success">OOP: Object Orienting Programming</li></ul> 
    
    <ul class="paper paper-btn btn-secondary-outline col flex-spaces comps "><li class="paper-btn btn-secondary">Services</li>  
        <li class="paper-btn btn-secondary">Modules (Component-like structured app)</li>  
        <li class="paper-btn btn-secondary">Directives</li>  
        <li class="paper-btn btn-secondary">Abstraction : H\xE9ritage Polymorphisme</li> 
        <li class="paper-btn btn-secondary">Class/Model</li></ul>`,d=m(),p=r("div"),p.innerHTML=`<p class="svelte-id8bkz">Platon: Connais toi , toi-m\xEAme</p> 
    <p class="svelte-id8bkz">Platon: Ce que je sais, c&#39;est que je ne sais rien.</p>`,u=m(),f=r("p"),b=J("Written by "),g=r("a"),g.textContent=`Younes Anis Harrat, last seen: ${Date.now().toString()}`,s(i,"class","paper container col col-fill "),s(a,"class","col col-fill "),s(g,"href","#"),s(f,"class","article-meta svelte-id8bkz"),s(e,"class","article svelte-id8bkz"),A(e,"text-align","center"),A(e,"display","flex"),A(e,"flex-direction","column")},m(v,y){$(v,e,y),n(e,l),n(e,o),n(e,i),n(e,c),n(e,a),n(e,d),n(e,p),n(e,u),n(e,f),n(f,b),n(f,g)},p:h,i:h,o:h,d(v){v&&x(e)}}}class _e extends E{constructor(e){super(),S(this,e,null,ye,M,{})}}function xe(t){let e,l,o,i,c,a,d,p,u,f;return{c(){e=r("article"),l=r("h1"),l.textContent="EXPERIENCES",o=m(),i=r("div"),i.innerHTML=`<h3>Etudes de cas</h3> 
    <ul class="row"><li>[ ApprenticeShip - Alternance ]</li> 
        <h4><ul><li>-&gt; Chez Picomto</li> 
                <li>-&gt; Lille, La Madeleine</li> 
                <li>-&gt; D\xE9but\xE9 le : 01/12/20</li></ul></h4> 

        <ul><h4>FabricJs: Cropper</h4> 
            <li>Context
                <p class="svelte-id8bkz">Sur un Canvas, en manipulant des images, pouvoir au double-click disposer d&#39;un calc/region de dimensions \xE9gales \xE0 l&#39;objet manipul\xE9
                    que l&#39;on va pouvoir placer, en y ajoutant des op\xE9rations g\xE9om\xE9trique tel que la translation, la rotation ou encore le skewing ( cf: pass\xE9 d&#39;un rectangle \xE0 un parall\xE9logramme |_| -&gt; /_/) , 
                    dont la r\xE9sultante sera l&#39;intersection de l&#39;image d&#39;origine et du calc , nomm\xE9 &#39;cropper&#39; . 
                    
                    Il fallait \xE9galement ajouter la gestion des bords de l&#39;intersection afin de rajouter ou non une bordure &#39;stroke&#39; \xE0 l&#39;image, une fois cropp\xE9.</p></li> 
            <h4>Gestion Pictogrammes</h4> 
            <li>Context
                <p class="svelte-id8bkz">cf (-presentation doc)</p></li> 
            <h4>Workflow</h4> 
            <li><p class="svelte-id8bkz">Learned: 
                    Gitlab
                    CI / CD
                    Merge Request: Pull Request : Issues Reviewing :: Risk Analysis</p></li></ul></ul> 


    <ul class="row"><li>[ Licence 3 STS Informatique ]</li> 
        <h4><ul><li>-&gt; Chez ULCO</li> 
                <li>-&gt; Calais</li></ul></h4> 
        <ul><li><p class="svelte-id8bkz">Projet de Groupe de 3 eme Ann\xE9e:
                    L&#39;id\xE9e \xE9tait d&#39;utilis\xE9 Java et la POO afin cr\xE9er un jeu de plateau jouable a 2 joueurs, tour a tour.
                    Puis de construire diff\xE9rents algorithmes qui devaient d\xE9finir les actions de &#39;l&#39;ordinateur&#39; lorsqu&#39;il r\xE9pondait aux mouvement du joueur.</p></li></ul></ul> 

    <ul class="row"><li>[ 2018 ]</li> 
        <h4><ul><li>-&gt; Formation Java JEE</li> 

                <li>-&gt; Chez GlobalKnowledge</li> 
                <li>-&gt; Lille, Euratechnologies</li></ul></h4> 
        <ul><ul><li><p class="svelte-id8bkz">Projet Bank: Java JEE :
                        - working with Spring Boot, Hibernate, XML, JavaBeans, JSPages and others
                        - Conception UML
                        - Mod\xE8le View Controller
                        - Travail en \xE9quipe</p></li></ul></ul></ul>`,c=m(),a=r("div"),a.innerHTML=`<p class="svelte-id8bkz">Platon: Connais toi , toi-m\xEAme</p> 
    <p class="svelte-id8bkz">Platon: Ce que je sais, c&#39;est que je ne sais rien.</p>`,d=m(),p=r("p"),u=J("Written by "),f=r("a"),f.textContent=`Younes Anis Harrat, last seen: ${Date.now().toString()}`,s(i,"class","paper container"),s(f,"href","#"),s(p,"class","article-meta svelte-id8bkz"),s(e,"class","article svelte-id8bkz"),A(e,"text-align","center"),A(e,"display","flex"),A(e,"flex-direction","column")},m(b,g){$(b,e,g),n(e,l),n(e,o),n(e,i),n(e,c),n(e,a),n(e,d),n(e,p),n(p,u),n(p,f)},p:h,i:h,o:h,d(b){b&&x(e)}}}class $e extends E{constructor(e){super(),S(this,e,null,xe,M,{})}}function Ce(t){let e,l,o,i,c;return{c(){e=r("head"),e.innerHTML='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js"/>',l=m(),o=r("h1"),o.textContent="Hobbies",i=m(),c=r("div"),c.innerHTML=`<p class="svelte-id8bkz">Hi!
        Some things i like to do are:</p>  
    <ul><h3><li>Rapping</li> 
            <li>Playing Chess</li> 
            <li>Music - Guitar Playing - Fingerstyle</li> 
            
            <li>Mathematics</li> 
            <li>Physics</li> 
            
            <li>Web3 / BlockChain</li> 
            <li>Artificial Intelligence</li> 
            <li>Deep Network &gt; Neural Network &gt; Multiple Perceptron</li> 
            
            <li>Cellular Automata</li> 
            <li>Fractals</li> 
            <li>Generative Designs</li></h3></ul>`,s(c,"class","paper container col")},m(a,d){$(a,e,d),$(a,l,d),$(a,o,d),$(a,i,d),$(a,c,d)},p:h,i:h,o:h,d(a){a&&x(e),a&&x(l),a&&x(o),a&&x(i),a&&x(c)}}}class ke extends E{constructor(e){super(),S(this,e,null,Ce,M,{})}}function we(t){let e,l,o,i,c,a,d,p,u,f;return{c(){e=r("article"),l=r("h1"),l.textContent="ETUDES",o=m(),i=r("div"),i.innerHTML=`<ul class="row"><li>[ ApprenticeShip - Alternance ]</li> 
        <ul><li>-&gt; Chez Picomto</li> 
            <li>-&gt; Lille, La Madeleine</li> 
            <li>-&gt; D\xE9but\xE9 le : 01/12/20</li></ul></ul> 

    <ul class="row"><li>[ Licence 3 STS Informatique ]</li> 
        <ul><li>-&gt; ULCO Calais</li> 
            <li>-&gt; valid\xE9 en 2020</li></ul></ul> 

    <ul class="row"><li>[ Ann\xE9e de Recherche ]</li> 
        <ul><li>-&gt; Formation Java JEE</li> 
            <ul><li>De -&gt;</li> 
                <li>A -&gt;</li> 
                <li>Dur\xE9e: 3 mois</li> 
                <li>Organisme: GlobalKnowledge</li></ul></ul></ul>`,c=m(),a=r("div"),a.innerHTML=`<p class="svelte-id8bkz">Platon: Connais toi , toi-m\xEAme</p> 
    <p class="svelte-id8bkz">Platon: Ce que je sais, c&#39;est que je ne sais rien.</p>`,d=m(),p=r("p"),u=J("Written by "),f=r("a"),f.textContent=`Younes Anis Harrat, last seen: ${Date.now().toString()}`,s(i,"class","paper container"),s(f,"href","#"),s(p,"class","article-meta svelte-id8bkz"),s(e,"class","article svelte-id8bkz")},m(b,g){$(b,e,g),n(e,l),n(e,o),n(e,i),n(e,c),n(e,a),n(e,d),n(e,p),n(p,u),n(p,f)},p:h,i:h,o:h,d(b){b&&x(e)}}}class Le extends E{constructor(e){super(),S(this,e,null,we,M,{})}}function Pe(t){let e,l,o,i,c,a,d,p,u,f,b,g,v,y,Z,O,ee,H,C,te,T,k,le,q,w,ne,D,L,B;return C=new Le({}),k=new $e({}),w=new _e({}),L=new ke({}),{c(){e=r("div"),l=r("input"),o=m(),i=r("label"),i.textContent="Studies",c=m(),a=r("input"),d=m(),p=r("label"),p.textContent="Exp\xE9riences",u=m(),f=r("input"),b=m(),g=r("label"),g.textContent="Comp\xE9tences",v=m(),y=r("input"),Z=m(),O=r("label"),O.textContent="Other....",ee=m(),H=r("div"),R(C.$$.fragment),te=m(),T=r("div"),R(k.$$.fragment),le=m(),q=r("div"),R(w.$$.fragment),ne=m(),D=r("div"),R(L.$$.fragment),s(l,"id","tab1"),s(l,"type","radio"),s(l,"name","tabs"),l.checked=!0,s(i,"for","tab1"),s(i,"class","paper-btn svelte-1dhzkul"),s(a,"id","tab2"),s(a,"type","radio"),s(a,"name","tabs"),s(p,"for","tab2"),s(p,"class","paper-btn svelte-1dhzkul"),s(f,"id","tab3"),s(f,"type","radio"),s(f,"name","tabs"),s(g,"for","tab3"),s(g,"class","paper-btn svelte-1dhzkul"),s(y,"id","tab4"),s(y,"type","radio"),s(y,"name","tabs"),s(O,"for","tab4"),s(O,"class","paper-btn svelte-1dhzkul"),s(H,"class","content"),s(H,"id","content1"),s(T,"class","content"),s(T,"id","content2"),s(q,"class","content"),s(q,"id","content3"),s(D,"class","content"),s(D,"id","content4"),s(e,"class","row flex-spaces tabs")},m(_,ce){$(_,e,ce),n(e,l),n(e,o),n(e,i),n(e,c),n(e,a),n(e,d),n(e,p),n(e,u),n(e,f),n(e,b),n(e,g),n(e,v),n(e,y),n(e,Z),n(e,O),n(e,ee),n(e,H),j(C,H,null),n(e,te),n(e,T),j(k,T,null),n(e,le),n(e,q),j(w,q,null),n(e,ne),n(e,D),j(L,D,null),B=!0},p:h,i(_){B||(P(C.$$.fragment,_),P(k.$$.fragment,_),P(w.$$.fragment,_),P(L.$$.fragment,_),B=!0)},o(_){N(C.$$.fragment,_),N(k.$$.fragment,_),N(w.$$.fragment,_),N(L.$$.fragment,_),B=!1},d(_){_&&x(e),z(C),z(k),z(w),z(L)}}}class je extends E{constructor(e){super(),S(this,e,null,Pe,M,{})}}function ze(t){let e,l,o,i,c,a,d,p,u,f,b,g;return d=new je({}),{c(){e=r("main"),l=r("div"),o=r("div"),o.innerHTML=`<div class="col sm-3">Curriculum Vitae</div> 
        <div class="box sm-6 svelte-1a91je4">Younes Anis Harrat</div> 
        <div class="col sm-3">Web Developper</div>`,i=m(),c=r("div"),a=r("div"),R(d.$$.fragment),p=m(),u=r("div"),u.innerHTML=`<div class="box svelte-1a91je4">Made by Y.A.H :) 
        using PaperCSS, Vite and Svelte-ts</div>`,f=m(),b=J(`\r
\r
\r
&`),s(o,"class","paper container-xs hue row svelte-1a91je4"),s(o,"id","header"),s(a,"class","container-xs"),s(c,"class","paper content svelte-1a91je4"),s(u,"class","paper  svelte-1a91je4"),s(u,"id","footer"),s(l,"class","paper bg-sheet svelte-1a91je4"),s(e,"class","container-lg paper svelte-1a91je4")},m(v,y){$(v,e,y),n(e,l),n(l,o),n(l,i),n(l,c),n(c,a),j(d,a,null),n(l,p),n(l,u),n(e,f),$(v,b,y),g=!0},p:h,i(v){g||(P(d.$$.fragment,v),g=!0)},o(v){N(d.$$.fragment,v),g=!1},d(v){v&&x(e),z(d),v&&x(b)}}}class Ae extends E{constructor(e){super(),S(this,e,null,ze,M,{})}}new Ae({target:document.getElementById("app")});
