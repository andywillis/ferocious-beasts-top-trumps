import{j as a,_ as L,d as p,N as z,L as S,r as H,R as F,a as _,c as G,b as V,B as U}from"./vendor-b0ad166c.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const W="_board_1pp2s_1",A={board:W};function Y({children:e}){return a.jsx("section",{className:A.board,children:e})}const K="_cardImage_1qhy4_1",J="_fadein_1qhy4_1",Q="_hidden_1qhy4_5",X={cardImage:K,fadein:J,hidden:Q};function Z({src:e,alt:n}){const t=[X.cardImage].join(" ");return a.jsx("img",{width:"250",height:"125",className:t,src:e,alt:n})}const ee=[{id:1,name:"bear",image:{name:"bear.webp",alt:"Photo of a Brown Bear"},properties:[{id:1,name:"aggression",value:7},{id:2,name:"fluffiness",value:4},{id:3,name:"size",value:8},{id:4,name:"speed",value:6},{id:5,name:"stealth",value:2},{id:6,name:"strength",value:8}]},{id:2,name:"eagle",image:{name:"eagle.webp",alt:"Photo of a Bald Eagle"},properties:[{id:1,name:"aggression",value:3},{id:2,name:"fluffiness",value:2},{id:3,name:"size",value:5},{id:4,name:"speed",value:8},{id:5,name:"stealth",value:8},{id:6,name:"strength",value:5}]},{id:3,name:"cheetah",image:{name:"cheetah.webp",alt:"Photo of a cheetah"},properties:[{id:1,name:"aggression",value:5},{id:2,name:"fluffiness",value:5},{id:3,name:"size",value:5},{id:4,name:"speed",value:9},{id:5,name:"stealth",value:7},{id:6,name:"strength",value:7}]},{id:4,name:"red panda",image:{name:"red-panda.webp",alt:"Photo of a Red Panda"},properties:[{id:1,name:"aggression",value:1},{id:2,name:"fluffiness",value:10},{id:3,name:"size",value:3},{id:4,name:"speed",value:2},{id:5,name:"stealth",value:5},{id:6,name:"strength",value:3}]},{id:5,name:"spider",image:{name:"spider.webp",alt:"Extreme close-up photo of a Jumping Spider"},properties:[{id:1,name:"aggression",value:2},{id:2,name:"fluffiness",value:1},{id:3,name:"size",value:1},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:9},{id:6,name:"strength",value:4}]},{id:6,name:"shark",image:{name:"shark.webp",alt:"Photo of a Great White Shark"},properties:[{id:1,name:"aggression",value:10},{id:2,name:"fluffiness",value:1},{id:3,name:"size",value:6},{id:4,name:"speed",value:8},{id:5,name:"stealth",value:8},{id:6,name:"strength",value:8}]},{id:7,name:"praying mantis",image:{name:"praying-mantis.webp",alt:"Photo of a Praying Mantis"},properties:[{id:1,name:"aggression",value:6},{id:2,name:"fluffiness",value:1},{id:3,name:"size",value:2},{id:4,name:"speed",value:3},{id:5,name:"stealth",value:7},{id:6,name:"strength",value:3}]},{id:8,name:"polar bear",image:{name:"polar-bear.webp",alt:"Photo of a Polar Bear"},properties:[{id:1,name:"aggression",value:8},{id:2,name:"fluffiness",value:7},{id:3,name:"size",value:9},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:6},{id:6,name:"strength",value:10}]},{id:9,name:"fox",image:{name:"fox.webp",alt:"Photo of a fox"},properties:[{id:1,name:"aggression",value:3},{id:2,name:"fluffiness",value:5},{id:3,name:"size",value:4},{id:4,name:"speed",value:4},{id:5,name:"stealth",value:6},{id:6,name:"strength",value:3}]},{id:10,name:"hippopotamus",image:{name:"hippopotamus.webp",alt:"Photo of a hippopotamus"},properties:[{id:1,name:"aggression",value:9},{id:2,name:"fluffiness",value:1},{id:3,name:"size",value:8},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:6},{id:6,name:"strength",value:9}]},{id:11,name:"snake",image:{name:"white-lipped-island-pit-viper.webp",alt:"Photo of a White-Lipped Island Pit Viper"},properties:[{id:1,name:"aggression",value:8},{id:2,name:"fluffiness",value:1},{id:3,name:"size",value:2},{id:4,name:"speed",value:6},{id:5,name:"stealth",value:9},{id:6,name:"strength",value:4}]},{id:12,name:"owl",image:{name:"owl.webp",alt:"Photo of a White Owl"},properties:[{id:1,name:"aggression",value:2},{id:2,name:"fluffiness",value:8},{id:3,name:"size",value:3},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:10},{id:6,name:"strength",value:2}]},{id:13,name:"scorpion",image:{name:"scorpion.webp",alt:"Photo of a scorpion"},properties:[{id:1,name:"aggression",value:9},{id:2,name:"fluffiness",value:1},{id:3,name:"size",value:1},{id:4,name:"speed",value:2},{id:5,name:"stealth",value:6},{id:6,name:"strength",value:3}]},{id:14,name:"sloth",image:{name:"sloth.webp",alt:"Photo of a happy sloth"},properties:[{id:1,name:"aggression",value:1},{id:2,name:"fluffiness",value:7},{id:3,name:"size",value:4},{id:4,name:"speed",value:1},{id:5,name:"stealth",value:1},{id:6,name:"strength",value:3}]},{id:15,name:"koala",image:{name:"koala.webp",alt:"Photo of a koala"},properties:[{id:1,name:"aggression",value:2},{id:2,name:"fluffiness",value:4},{id:3,name:"size",value:2},{id:4,name:"speed",value:2},{id:5,name:"stealth",value:2},{id:6,name:"strength",value:2}]},{id:16,name:"piranha",image:{name:"piranha.webp",alt:"Photo of a piranha"},properties:[{id:1,name:"aggression",value:10},{id:2,name:"fluffiness",value:1},{id:3,name:"size",value:2},{id:4,name:"speed",value:8},{id:5,name:"stealth",value:7},{id:6,name:"strength",value:3}]},{id:17,name:"parrot",image:{name:"parrot.webp",alt:"Photo of a parrot"},properties:[{id:1,name:"aggression",value:2},{id:2,name:"fluffiness",value:5},{id:3,name:"size",value:4},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:3},{id:6,name:"strength",value:2}]},{id:18,name:"crocodile",image:{name:"crocodile.webp",alt:"Photo of a crocodile"},properties:[{id:1,name:"aggression",value:9},{id:2,name:"fluffiness",value:1},{id:3,name:"size",value:8},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:7},{id:6,name:"strength",value:9}]},{id:19,name:"lion",image:{name:"lion.webp",alt:"Photo of a lion yawning"},properties:[{id:1,name:"aggression",value:8},{id:2,name:"fluffiness",value:6},{id:3,name:"size",value:6},{id:4,name:"speed",value:6},{id:5,name:"stealth",value:7},{id:6,name:"strength",value:7}]},{id:20,name:"kangaroo",image:{name:"kangaroo.webp",alt:"Photo of a kangaroo"},properties:[{id:1,name:"aggression",value:6},{id:2,name:"fluffiness",value:2},{id:3,name:"size",value:7},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:1},{id:6,name:"strength",value:7}]},{id:21,name:"capybara",image:{name:"capybara.webp",alt:"Photo of a capybara soaking in a pond with a citrus fruit on its head"},properties:[{id:1,name:"aggression",value:1},{id:2,name:"fluffiness",value:7},{id:3,name:"size",value:5},{id:4,name:"speed",value:3},{id:5,name:"stealth",value:1},{id:6,name:"strength",value:3}]},{id:22,name:"zebra",image:{name:"zebra.webp",alt:"Photo of a zebra"},properties:[{id:1,name:"aggression",value:3},{id:2,name:"fluffiness",value:3},{id:3,name:"size",value:5},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:2},{id:6,name:"strength",value:2}]},{id:23,name:"elephant",image:{name:"elephant.webp",alt:"Photo of a elephant"},properties:[{id:1,name:"aggression",value:7},{id:2,name:"fluffiness",value:2},{id:3,name:"size",value:9},{id:4,name:"speed",value:6},{id:5,name:"stealth",value:1},{id:6,name:"strength",value:9}]},{id:24,name:"chimpanzee",image:{name:"chimpanzee.webp",alt:"Photo of a chimpanzee"},properties:[{id:1,name:"aggression",value:7},{id:2,name:"fluffiness",value:2},{id:3,name:"size",value:4},{id:4,name:"speed",value:6},{id:5,name:"stealth",value:3},{id:6,name:"strength",value:6}]},{id:25,name:"chicken",image:{name:"chicken.webp",alt:"Photo of a chicken prancing"},properties:[{id:1,name:"aggression",value:5},{id:2,name:"fluffiness",value:2},{id:3,name:"size",value:2},{id:4,name:"speed",value:2},{id:5,name:"stealth",value:1},{id:6,name:"strength",value:1}]},{id:26,name:"domestic cat",image:{name:"domestic-cat.webp",alt:"Photo of an adorable kitten"},properties:[{id:1,name:"aggression",value:7},{id:2,name:"fluffiness",value:10},{id:3,name:"size",value:3},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:8},{id:6,name:"strength",value:3}]},{id:27,name:"otter",image:{name:"otter.webp",alt:"Photo of a otter"},properties:[{id:1,name:"aggression",value:2},{id:2,name:"fluffiness",value:9},{id:3,name:"size",value:3},{id:4,name:"speed",value:6},{id:5,name:"stealth",value:7},{id:6,name:"strength",value:5}]},{id:28,name:"quokka",image:{name:"quokka.webp",alt:"Photo of a happy quokka"},properties:[{id:1,name:"aggression",value:1},{id:2,name:"fluffiness",value:10},{id:3,name:"size",value:3},{id:4,name:"speed",value:3},{id:5,name:"stealth",value:2},{id:6,name:"strength",value:2}]},{id:29,name:"fennec fox",image:{name:"fennec-fox.webp",alt:"Photo of a Fennec Fox"},properties:[{id:1,name:"aggression",value:2},{id:2,name:"fluffiness",value:9},{id:3,name:"size",value:2},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:7},{id:6,name:"strength",value:2}]},{id:30,name:"bison",image:{name:"bison.webp",alt:"Photo of a bison"},properties:[{id:1,name:"aggression",value:6},{id:2,name:"fluffiness",value:6},{id:3,name:"size",value:9},{id:4,name:"speed",value:5},{id:5,name:"stealth",value:1},{id:6,name:"strength",value:9}]},{id:31,name:"yak",image:{name:"yak.webp",alt:"Photo of a yak"},properties:[{id:1,name:"aggression",value:6},{id:2,name:"fluffiness",value:7},{id:3,name:"size",value:9},{id:4,name:"speed",value:4},{id:5,name:"stealth",value:1},{id:6,name:"strength",value:8}]},{id:32,name:"margay",image:{name:"margay.webp",alt:"Photo of a margay"},properties:[{id:1,name:"aggression",value:2},{id:2,name:"fluffiness",value:9},{id:3,name:"size",value:3},{id:4,name:"speed",value:5},{id:5,name:"stealth",value:7},{id:6,name:"strength",value:3}]},{id:33,name:"elephant shrew",image:{name:"elephant-shrew.webp",alt:"Photo of an Elephant Shrew"},properties:[{id:1,name:"aggression",value:1},{id:2,name:"fluffiness",value:7},{id:3,name:"size",value:1},{id:4,name:"speed",value:5},{id:5,name:"stealth",value:8},{id:6,name:"strength",value:1}]},{id:34,name:"pallas cat",image:{name:"pallas-cat.webp",alt:"Photo of a Pallas Cat"},properties:[{id:1,name:"aggression",value:2},{id:2,name:"fluffiness",value:10},{id:3,name:"size",value:5},{id:4,name:"speed",value:6},{id:5,name:"stealth",value:8},{id:6,name:"strength",value:5}]},{id:35,name:"crow",image:{name:"crow.webp",alt:"Photo of a crow"},properties:[{id:1,name:"aggression",value:6},{id:2,name:"fluffiness",value:6},{id:3,name:"size",value:2},{id:4,name:"speed",value:9},{id:5,name:"stealth",value:7},{id:6,name:"strength",value:2}]},{id:36,name:"panda",image:{name:"panda.webp",alt:"Photo of a panda"},properties:[{id:1,name:"aggression",value:6},{id:2,name:"fluffiness",value:9},{id:3,name:"size",value:9},{id:4,name:"speed",value:3},{id:5,name:"stealth",value:2},{id:6,name:"strength",value:7}]},{id:37,name:"honey badger",image:{name:"honey-badger.webp",alt:"Photo of a Honey Badger"},properties:[{id:1,name:"aggression",value:10},{id:2,name:"fluffiness",value:3},{id:3,name:"size",value:5},{id:4,name:"speed",value:8},{id:5,name:"stealth",value:5},{id:6,name:"strength",value:9}]},{id:38,name:"chameleon",image:{name:"chameleon.webp",alt:"Photo of a chameleon"},properties:[{id:1,name:"aggression",value:1},{id:2,name:"fluffiness",value:5},{id:3,name:"size",value:2},{id:4,name:"speed",value:2},{id:5,name:"stealth",value:2},{id:6,name:"strength",value:2}]},{id:39,name:"ostrich",image:{name:"ostrich.webp",alt:"Photo of a ostrich"},properties:[{id:1,name:"aggression",value:7},{id:2,name:"fluffiness",value:3},{id:3,name:"size",value:8},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:1},{id:6,name:"strength",value:6}]},{id:40,name:"bat",image:{name:"bat.webp",alt:"Photo of a Flying Gray Long-Eared Bat"},properties:[{id:1,name:"aggression",value:1},{id:2,name:"fluffiness",value:5},{id:3,name:"size",value:2},{id:4,name:"speed",value:7},{id:5,name:"stealth",value:9},{id:6,name:"strength",value:4}]}],ae="Welcome to Ferocious Beasts Top Trumps.",ne="Human player to play.",ie="Computer has played its hand.",te="Click a statistic ➔",se="Computer player to start.",le="You have won this round.",re="The computer's card has been added to your deck.",oe="The computer has won this round.",ue="Your card has been added to the computer's deck.",de="This round is a tie. Both cards have been added to the board.",me="Both cards has been added to the board.",ce="Congratulations! You have won all the cards!",pe="Commiserations! The computer has won all the cards!",ve={welcome:ae,humanplay:ne,computerplay:ie,clickstat:te,computerstart:se,humanwin:le,humanadded:re,computerwin:oe,computeradded:ue,tie:de,boardadded:me,humanwinner:ce,computerwinner:pe},y=p(ee),u=p(ve),m=p([]),g=p([]),c=p([]),I=p([]),h=p(!1),P=p(!0),b=p(!0),x=p(!1),v=p(""),he=L(()=>m.value.at(-1)),fe=L(()=>c.value.at(-1));function r(e){return e.split(" ").map(n=>`${n[0].toUpperCase()}${n.slice(1)}`).join(" ")}function T(e){let t=structuredClone(e).length,o,i;for(;--t>0;)o=Math.floor(Math.random()*(t+1)),i=e[o],e[o]=e[t],e[t]=i;return e}function ge(e,n){return T(e).slice(0,n)}function xe(e,n){return T(e).slice(0,n)}function be(e){return e.sort((n,t)=>n.name.localeCompare(t.name))}function we(e){const n=he.peek();return{name:n?.name,property:{name:e,value:n?.properties.find(t=>t.name===e)?.value}}}function ye(e){const n=fe.peek();return{name:n?.name,property:{name:e,value:n?.properties.find(t=>t.name===e)?.value}}}function je(){return crypto.randomUUID()}function w(){I.value=[]}function l(e,n){I.value.push({id:je(),type:n,text:e})}function _e(){const e=T(y.peek()),n=e.length;m.value=e.slice(0,n/2),c.value=e.slice(n/2,n),g.value=[],h.value=!1,P.value=!0,b.value=!0,x.value=!1,v.value="",w(),w(),l(u.peek().humanplay),l(u.peek().clickstat)}function B(e,n,t,o){if(h.value=!0,b.value=!1,w(),o==="human"){const i=we(n);t>i.property.value&&(v.value="human",l(u.peek().humanwin),l(r(n),"underline"),l(`
				${r(e)}
				(${t}) 
				beats 
				${r(i.name)}
				(${i.property.value})
			`)),i.property.value>t&&(v.value="computer",l(u.peek().computerwin),l(r(n),"underline"),l(`
				${r(i.name)} 
				(${i.property.value})
				beats 
				${r(e)}
				(${t})
			`)),i.property.value===t&&(v.value="tie",l(u.peek().tie),l(r(n),"underline"),l(`
				${r(i.name)} 
				(${i.property.value})
				matches 
				${r(e)}
				(${t})
			`)),x.value=!0}if(o==="computer"){l("Computer to play. ");const i=ye(n);t>i.property.value&&(v.value="computer",l(u.peek().computerwin),l(r(n),"underline"),l(`
				${r(e)} 
				(${t})
				beats 
				${r(i.name)}
				(${i.property.value})
			`)),i.property.value>t&&(v.value="human",l(u.peek().humanwin),l(r(n),"underline"),l(`
				${r(i.name)} 
				(${i.property.value})
				beats 
				${r(e)}
				(${t})
			`)),i.property.value===t&&(v.value="tie",l(u.peek().tie),l(r(n),"underline"),l(`
				${r(i.name)} 
				(${i.property.value})
				matches 
				${r(e)}
				(${t})
			`)),x.value=!0}}function ke(){if(w(),v.value==="human"&&(c.value=[c.value.at(-1),m.value.at(-1),...g.value,...c.value.slice(0,-1)],m.value=m.value.slice(0,-1),g.value=[],h.value=!1,x.value=!1,b.value=!0,l(u.value.humanadded),l(u.value.clickstat)),v.value==="computer"){m.value=[m.value.at(-1),c.value.at(-1),...g.value,...m.value.slice(0,-1)],c.value=c.value.slice(0,-1),g.value=[],h.value=!0,x.value=!1,b.value=!1,l(u.value.computeradded),l(u.value.computerplay);const e=m.value.at(-1),n=e.name,t=xe(e.properties,1),{name:o,value:i}=t[0];B(n,o,Number(i),"computer")}v.value==="tie"&&(g.value=[c.value.at(-1),m.value.at(-1),...g.value],m.value=m.value.slice(0,-1),c.value=c.value.slice(0,-1),h.value=!1,x.value=!1,b.value=!0,l(u.value.boardadded),l(u.value.clickstat)),c.value.length===y.value.length&&(h.value=!1,P.value=!1,w(),l(u.peek().humanwinner)),m.value.length===y.value.length&&(h.value=!1,P.value=!1,w(),l(u.peek().computerwinner))}const Pe="_properties_1nreh_1",ze="_property_1nreh_5",$={properties:Pe,property:ze};function $e(e,n){return e.name.localeCompare(n.name)}function Ce({animal:e,properties:n,interactive:t}){function o(s){if(s.key==="Enter"){const{dataset:{name:d,value:f}}=s.target;d&&f&&B(e,d,Number(f),"human")}}function i(s){const{dataset:{name:d,value:f}}=s.currentTarget;d&&f&&B(e,d,Number(f),"human")}return a.jsx("ul",{className:$.properties,children:n.sort($e).map(s=>{const d=[$.property,t&&$.interactive].join(" ");return a.jsx("li",{className:d,children:a.jsxs("button",{type:"button","data-name":s.name,"data-value":s.value,onClick:i,onKeyDown:o,disabled:!t,children:[a.jsx("span",{children:s.name}),a.jsx("span",{children:s.value})]})},s.id)})})}const Ne="_container_14tnm_1",Be="_card_14tnm_12",Re="_interactive_14tnm_21",Ie="_name_14tnm_31",Te="_invisible_14tnm_46",j={container:Ne,card:Be,interactive:Re,name:Ie,invisible:Te};function O(e){const{name:n,image:t,visible:o=!0,properties:i,interactive:s=!1}=e,d=[j.container].join(" "),f=[j.card,!o&&j.invisible,s&&j.interactive].join(" ");return a.jsx("section",{className:d,children:a.jsxs("section",{className:f,children:[a.jsx("header",{className:j.name,children:a.jsx("h2",{children:n})}),a.jsx(Z,{src:`images/${t.name}`,alt:t.alt}),a.jsx(Ce,{animal:n,properties:i,interactive:s})]})})}const Oe="_grid_fdvew_1",qe="_onlyOneRow_fdvew_10",q={grid:Oe,onlyOneRow:qe};function M({children:e,onlyoneRow:n=!1}){const t=[q.grid,n&&q.onlyOneRow].join(" ");return a.jsx("section",{className:t,children:e})}const De="_nav_1kati_1",Ee="_active_1kati_15",R={nav:De,active:Ee};function C({isActive:e,isPending:n}){return n?R.pending:e?R.active:""}function Le(){return a.jsx("nav",{className:R.nav,children:a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx(z,{to:"/startgame",className:e=>C(e),children:"Start game"})}),a.jsx("li",{children:a.jsx(z,{to:"/instructions",className:e=>C(e),children:"Instructions"})}),a.jsx("li",{children:a.jsx(z,{to:"/viewcards",className:e=>C(e),children:"View Cards"})})]})})}const Me="_header_xen4c_1",Se={header:Me};function He({title:e}){return a.jsxs("header",{className:Se.header,children:[a.jsx("h1",{children:a.jsx(S,{to:"/",children:e})}),a.jsx(Le,{})]})}const Fe="_messageBox_1d17i_1",Ge="_message_1d17i_1",Ve="_underline_1d17i_14",Ue="_nextRound_1d17i_20",k={messageBox:Fe,message:Ge,underline:Ve,nextRound:Ue};function We(){function e(){ke()}return a.jsxs("section",{className:k.messageBox,children:[I.value.map(n=>{const t=[k.message,n.type==="underline"&&k.underline].join(" ");return a.jsx("p",{className:t,children:n.text},n.id)}),x.value&&a.jsx("button",{onClick:e,className:k.nextRound,type:"button",children:"Play next round"})]})}const Ae="_status_12qx0_1",Ye={status:Ae};function Ke({type:e,numberOfCards:n,totalCards:t}){return a.jsxs("section",{className:Ye.status,children:[a.jsx("h3",{children:e}),a.jsx("p",{children:`${n} / ${t} cards`})]})}function D({type:e,deck:n,totalCards:t,interactive:o}){function i(){return e==="computer"&&h.value===!0||e==="human"&&P.value===!0}return a.jsxs("section",{children:[a.jsx(Ke,{type:e,numberOfCards:n.length,totalCards:t}),n.slice(-1).map((s,d)=>a.jsx(O,{id:s.id,visible:i(),name:s.name,image:s.image,properties:s.properties,interactive:o&&b.value===!0,count:d},s.id))]})}const Je="_main_m78lq_1",Qe={main:Je};function Xe(){H.useEffect(()=>{_e()},[]);const e=y.value.length;return a.jsx("main",{className:Qe.main,children:a.jsxs(Y,{children:[a.jsx(D,{type:"computer",totalCards:e,deck:m.value}),a.jsx(We,{}),a.jsx(D,{type:"human",totalCards:e,deck:c.value,interactive:!0})]})})}const Ze="_main_1ds4w_1",ea="_intro_1ds4w_8",E={main:Ze,intro:ea};function aa(){return a.jsxs("main",{className:E.main,children:[a.jsxs("section",{className:E.intro,children:[a.jsx("p",{children:"A fun card game for all the family"}),a.jsx("p",{children:"Play against a deadly computer opponent and win all the cards"})]}),a.jsx(M,{onlyoneRow:!0,children:ge(y.peek(),3).map((e,n)=>a.jsx(O,{id:e.id,name:e.name,image:e.image,properties:e.properties,interactive:!1,count:n},e.id))})]})}const na="_main_pcey4_1",ia="_step_pcey4_9",N={main:na,step:ia};function ta(){return a.jsxs("main",{className:N.main,children:[a.jsxs("section",{className:N.step,children:[a.jsx("header",{children:a.jsx("h2",{children:"The Goal"})}),a.jsx("ul",{children:a.jsx("li",{children:"To collect all the cards."})})]}),a.jsxs("section",{className:N.step,children:[a.jsx("header",{children:a.jsx("h2",{children:"The Game"})}),a.jsxs("ul",{children:[a.jsx("li",{children:"Each card has a set of statistics. Your aim in each round is to choose a statistic higher than the corresponding one on the other player's card."}),a.jsx("li",{children:"If it's higher than the opponent's card the player wins the round and the opponent's card."}),a.jsx("li",{children:"If it's lower the opponent wins the round and the player's card."}),a.jsx("li",{children:"If it's a tie the cards are placed on the board and a new round begins. The winner of the next round gets the winning card and all the cards on the board."})]})]})]})}function sa(){return a.jsx("main",{children:a.jsx(M,{children:be(y.value).map((e,n)=>a.jsx(O,{id:e.id,name:e.name,image:e.image,properties:e.properties,interactive:!1,count:n},e.id))})})}function la(){return a.jsxs(a.Fragment,{children:[a.jsx(He,{title:"Ferocious Beasts Top Trumps"}),a.jsxs(F,{children:[a.jsx(_,{path:"/",element:a.jsx(aa,{})}),a.jsx(_,{path:"/startgame",element:a.jsx(Xe,{})}),a.jsx(_,{path:"/instructions",element:a.jsx(ta,{})}),a.jsx(_,{path:"/viewcards",element:a.jsx(sa,{})})]})]})}G.createRoot(document.querySelector("#root")).render(a.jsx(V.StrictMode,{children:a.jsx(U,{children:a.jsx(la,{})})}));
//# sourceMappingURL=index-4613989e.js.map