(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},121:function(e,t,a){e.exports=a(160)},129:function(e,t,a){},133:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){},154:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(42),r=a.n(l),c=(a(129),a(109),a(30)),i=a(2),m=a(21),s=a(3),u=(a(110),a(133),a(111),a(196)),d=a(197),f=a(188),g=a(192),E=a(190),h=a(182),p=a(193),v=a(186),b=a(183),y=a(145),j=a(189),I=a(195),S=a(113),O=a(191),w=a(26),N=a(22),k=a(95),C=a(96);var x=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),c=Object(s.a)(r,2),x=c[0],T=c[1],P=Object(n.useState)(""),L=Object(s.a)(P,2),R=L[0],A=L[1],z=Object(n.useState)(""),F=Object(s.a)(z,2),D=F[0],M=F[1],q=Object(n.useState)(!1),B=Object(s.a)(q,2),_=B[0],J=B[1],U=Object(n.useState)([]),G=Object(s.a)(U,2),H=G[0],V=G[1],W=Array.from(new Set(H)),Y=Object(n.useRef)(null),K=Object(i.o)(),Q=Object(n.useState)(!1),X=Object(s.a)(Q,2),Z=X[0],$=X[1],ee=Object(n.useState)(""),te=Object(s.a)(ee,2),ae=te[0],ne=te[1];Object(n.useEffect)(function(){var e=localStorage.getItem("email");e&&ne(e)},[]);var oe=localStorage.getItem("email"),le=localStorage.getItem("id"),re=localStorage.getItem("name");fetch("http://localhost:8080/player/email/".concat(oe)).then(function(e){return e.json()}).then(function(e){console.log(e),localStorage.setItem("id",e.id_player),localStorage.setItem("name",e.name)}).catch(function(e){console.error("Error retrieving user data:",e)});var ce=Object(n.useState)({}),ie=Object(s.a)(ce,2),me=ie[0],se=ie[1];Object(n.useEffect)(function(){var e=localStorage.getItem("email"),t=localStorage.getItem("id"),a=localStorage.getItem("name");e&&!me.id?fetch("http://localhost:8080/player/email/".concat(e)).then(function(e){return e.json()}).then(function(e){console.log(e),localStorage.setItem("id",e.id_player),localStorage.setItem("name",e.name),se(e)}).catch(function(e){console.error("Error retrieving user data:",e)}):se({id_player:t,name:a})},[]),localStorage.getItem("recipientid");var ue=function(){J(!1)};Object(n.useEffect)(function(){var e=localStorage.getItem("id");fetch("http://localhost:8080/invitations/".concat(e,"/recent")).then(function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(function(e){console.log("we",e),V(e)}).catch(function(e){console.error("Error retrieving invitation data:",e)})},[]);var de=[{name:"Classe 1",icon:N.b},{name:"Classe 2",icon:N.b},{name:"Classe 3",icon:N.b}].filter(function(e){return e.name.toLowerCase().includes(R.toLowerCase())}),fe=[{name:"Randoop",icon:N.d},{name:"Evosuite",icon:N.d}];return ae?o.a.createElement("div",null,o.a.createElement(E.a,{bg:"primary",variant:"dark",expand:"lg"},o.a.createElement(h.a,null,o.a.createElement(E.a.Brand,{href:"#"},"Scelta configurazione"),o.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(p.a,{className:"ms-auto"},o.a.createElement(p.a.Item,{style:{display:"flex",alignItems:"center",marginRight:"-4.5rem"}},o.a.createElement(v.a,null,o.a.createElement(v.a.Toggle,{variant:"light",id:"dropdown-basic",style:{background:"none",border:"none",padding:"0",color:"black"}},o.a.createElement(w.a,{icon:N.e,style:{marginRight:"0.3rem",color:"black"}}),ae),o.a.createElement(v.a.Menu,null,o.a.createElement(v.a.Item,{style:{color:"black"},href:"#/action-1"},"Profilo"),o.a.createElement(v.a.Item,{style:{color:"black"},href:"#/action-2"},"Impostazioni"),o.a.createElement(v.a.Divider,null),o.a.createElement(v.a.Item,{style:{color:"black"},onClick:function(){localStorage.removeItem("id"),localStorage.removeItem("email"),localStorage.removeItem("token"),K("/")}},"Esci")))))))),o.a.createElement(h.a,{className:"mt-4"},o.a.createElement(b.a,null,o.a.createElement(y.a,{md:3},o.a.createElement("h4",null,"Classi disponibili"),o.a.createElement(j.a,{className:"d-flex"},o.a.createElement(j.a.Control,{type:"text",placeholder:"Cerca classe",value:R,onChange:function(e){return A(e.target.value)}})),o.a.createElement(I.a,{style:{height:"400px",overflowY:"auto",marginTop:"1rem"}},de.map(function(e){return o.a.createElement(I.a.Item,{key:e.name,action:!0,active:a===e.name,onClick:function(){return t=e.name,void l(t);var t},className:"d-flex align-items-center",style:{paddingRight:"0.5rem"}},a===e.name?o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(w.a,{icon:N.a,style:{color:"blue",marginRight:"0.5rem"}}),o.a.createElement("span",{style:{marginLeft:"0.5rem"}},e.name)):o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{icon:e.icon,style:{marginRight:"0.5rem"}}),o.a.createElement("span",{style:{marginLeft:"0.5rem"}},e.name)))}))),o.a.createElement(y.a,{md:6,className:"d-flex justify-content-center"},o.a.createElement("div",{className:"circle-container",style:{marginBottom:"105rem"}},Z&&o.a.createElement("div",{className:"search-container position-relative "},o.a.createElement("div",{className:"input-container"},o.a.createElement("input",{type:"text",placeholder:"Inserisci Id amico",value:D,onChange:function(e){M(e.target.value)}}),function(){var e=W.slice(0,4);return o.a.createElement(u.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper",position:"absolute",zIndex:1,overflow:"auto",maxHeight:300,marginTop:2},subheader:o.a.createElement("li",null)},o.a.createElement("li",null,o.a.createElement("ul",null,o.a.createElement(d.a,null,"Amici Suggeriti"),e.map(function(e){return o.a.createElement(f.a,{key:e,button:!0,onClick:function(){return M(e)}},o.a.createElement(g.a,{primary:e}))}))))}()),o.a.createElement("button",{className:"invite-button",onClick:function(){return D&&fetch("http://localhost:8080/player/exists/".concat(D)).then(function(e){return e.text()}).then(function(e){"Trovato"===e?(J(!0),V([].concat(Object(m.a)(H),[D])),localStorage.setItem("recipientemail",D),fetch("http://localhost:8080/player/email/".concat(D)).then(function(e){return e.json()}).then(function(e){localStorage.setItem("recipientid",e.id_player)}).catch(function(e){console.error("Error retrieving player data:",e)})):(alert("L'account non esiste."),localStorage.removeItem("recipientid"))}).catch(function(e){console.error("Error checking email existence:",e)}),void $(!1)}},"Invita")),o.a.createElement("div",{className:"circle ".concat(Z?"open":""," ").concat(Z?"hide":""),onClick:function(){$(!Z)}},o.a.createElement("span",{className:"invite-friends"},"Invita Amici")))),o.a.createElement(y.a,{md:3},o.a.createElement("h4",null,"Robot disponibili"),o.a.createElement(I.a,{style:{height:"400px",overflowY:"auto",maxWidth:"400px"},ref:Y},fe.map(function(e){return o.a.createElement(I.a.Item,{key:e.name,action:!0,active:x===e.name,onClick:function(){return t=e.name,void T(t);var t},className:"d-flex align-items-center ".concat(x===e.name?"robot-selected":""),"data-robot-name":e.name,style:{paddingRight:"0.5rem"}},x===e.name?o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(w.a,{icon:N.a,style:{color:"blue",marginRight:"0.5rem"}}),o.a.createElement("span",{style:{marginLeft:"0.5rem"}},e.name)):o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{icon:e.icon,style:{marginRight:"0.5rem"}}),o.a.createElement("span",{style:{marginLeft:"0.5rem"}},e.name)))}))))),o.a.createElement("footer",{className:"mt-4 py-3 bg-light text-center"},o.a.createElement("div",{className:"navigation"},o.a.createElement("a",{href:"/mod"},o.a.createElement(w.a,{icon:k.faArrowLeft,style:{color:"black"}})),o.a.createElement(S.a,{variant:"primary",size:"md",className:"confirm-button",onClick:function(){var e=localStorage.getItem("selectedMode"),t=localStorage.getItem("selectedTurn"),n=localStorage.getItem("recipientid"),o={classe:a,robot:x,modalita:e,turni:t,id:le,name:re};a&&x&&""!==D?n?fetch("http://localhost:8080/game/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(function(e){return e.json()}).then(function(e){console.log(e),localStorage.setItem("gameidentificativo",e);var t={game_id:localStorage.getItem("gameidentificativo"),senderid:le,recipientid:n,accepted:"false"};return fetch("http://localhost:8080/invitations/newadd",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}).then(function(e){return e.json()}).then(function(e){console.log("id eccolo",e.id),localStorage.setItem("invtoId",e.id),K("/Casa")}).catch(function(e){console.error("Error sending invitation data:",e)}):alert("Devi inserire un ID valido per l'amico invitato."):alert("Devi selezionare una classe, un robot e inserire un ID amico nel invito.")}},"Conferma selezione"),o.a.createElement("a",{href:"/about"},o.a.createElement(w.a,{icon:C.faArrowRight,style:{color:"black"}})))),o.a.createElement(O.a,{show:_,onHide:ue},o.a.createElement(O.a.Header,{closeButton:!0},o.a.createElement(O.a.Title,null,"Invita amico")),o.a.createElement(O.a.Body,null,"Hai inviato un invito all'amico con ID: ",o.a.createElement("strong",null,D)),o.a.createElement(O.a.Footer,null,o.a.createElement(S.a,{variant:"secondary",onClick:ue},"Chiudi")))):o.a.createElement("div",null,"Accesso proibito. Esegui il login per accedere a questa pagina.")},T=a(184),P=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)(function(){var e=setInterval(function(){a<100&&l(a+10)},500);return function(){return clearInterval(e)}},[a]),o.a.createElement(h.a,{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"}},o.a.createElement(T.a,{now:a,label:"".concat(a,"%"),style:{width:"50%"}}))};a(146);var L=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),c=Object(s.a)(r,2),m=c[0],u=c[1],d=Object(n.useState)(!1),f=Object(s.a)(d,2),g=f[0],p=f[1],k=Object(i.o)(),C=localStorage.getItem("gameId"),x=localStorage.getItem("inviteId");console.log("Valore di gameId nel LocalStorage:",C),console.log("Valore di inviteId nel LocalStorage:",x);var T=function(e){l(e),localStorage.setItem("gameMode",e)},P=Object(n.useState)([]),L=Object(s.a)(P,2),R=L[0],A=L[1],z=Object(n.useState)([]),F=Object(s.a)(z,2),D=F[0],M=F[1],q=Object(n.useState)(!0),B=Object(s.a)(q,2),_=(B[0],B[1]),J=Object(n.useState)(null),U=Object(s.a)(J,2),G=(U[0],U[1]),H=Object(n.useState)([]),V=Object(s.a)(H,2),W=V[0],Y=V[1],K=Object(n.useState)([]),Q=Object(s.a)(K,2),X=Q[0],Z=Q[1],$=Object(n.useState)(null),ee=Object(s.a)($,2),te=(ee[0],ee[1]),ae=Object(n.useState)([]),ne=Object(s.a)(ae,2),oe=ne[0],le=ne[1],re=Object(n.useState)({}),ce=Object(s.a)(re,2),ie=ce[0],me=ce[1];Object(n.useEffect)(function(){var e=localStorage.getItem("email"),t=localStorage.getItem("id"),a=localStorage.getItem("name");e&&!ie.id?fetch("http://localhost:8080/player/email/".concat(e)).then(function(e){return e.json()}).then(function(e){console.log(e),localStorage.setItem("id",e.id_player),localStorage.setItem("name",e.name),me(e),fetch("http://localhost:8080/invitations/recuperoinviti/".concat(e.id_player)).then(function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(function(e){console.log(e);var t=e.map(function(e){return e.id}),a=e.map(function(e){return e.senderid});Z(a),M(t),A(e.map(function(e){return e.game_id})),_(!1)}).catch(function(e){console.error("Error retrieving invitation data:",e),G(e),_(!1)})}).catch(function(e){console.error("Error retrieving user data:",e)}):(me({id_player:t,name:a}),fetch("http://localhost:8080/invitations/recuperoinviti/".concat(t)).then(function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(function(e){console.log(e);var t=e.map(function(e){return e.id}),a=e.map(function(e){return e.senderid});Z(a),M(t),A(e.map(function(e){return e.game_id})),_(!1)}).catch(function(e){console.error("Error retrieving invitation data:",e),G(e),_(!1)}))},[]);var se=localStorage.getItem("gameMode"),ue=localStorage.getItem("numTurns"),de=localStorage.getItem("email");Object(n.useEffect)(function(){se&&l(se),ue&&u(ue)},[]);var fe=function(){p(!1)};return Object(n.useEffect)(function(){Promise.all(R.map(function(e){return fetch("http://localhost:8080/game/".concat(e)).then(function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})})).then(function(e){Y(e),console.log("waglio",e)}).catch(function(e){console.error("Error retrieving game data:",e),Y([])})},[R]),de?o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{bg:"primary",variant:"dark"},o.a.createElement(E.a.Brand,{href:"#"},"Configura nuova partita"),o.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(E.a.Collapse,{className:"justify-content-end"},o.a.createElement(E.a.Text,{style:{marginRight:"2rem"}},o.a.createElement(v.a,null,o.a.createElement(v.a.Toggle,{variant:"light",id:"dropdown-basic",style:{background:"none",border:"none",padding:"0",color:"black"}},o.a.createElement(w.a,{icon:N.e,style:{marginRight:"0.3rem",color:"black"}}),de),o.a.createElement(v.a.Menu,null,o.a.createElement(v.a.Item,{style:{color:"black"},href:"#/action-1"},"Profilo"),o.a.createElement(v.a.Item,{style:{color:"black"},onClick:function(){return e=X,p(!0),te(e),void Promise.all(e.map(function(e){return fetch("http://localhost:8080/player/".concat(e,"/email")).then(function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})})).then(function(e){var t=e.map(function(e){return{email:e.email,isValid:e.valid||null}});le(t)}).catch(function(e){console.error("Error retrieving email data:",e),le([])});var e}},"Inviti ricevuti ",o.a.createElement(w.a,{icon:N.c,style:{marginLeft:"0.3rem"}})),o.a.createElement(v.a.Divider,null),o.a.createElement(v.a.Item,{style:{color:"black"},onClick:function(){localStorage.removeItem("id"),localStorage.removeItem("email"),localStorage.removeItem("token"),k("/")}},"Esci")))))),o.a.createElement(h.a,{className:"mt-4"},o.a.createElement(b.a,null,o.a.createElement(y.a,{md:4},o.a.createElement("h4",null,"Modalit\xe0 di gioco"),o.a.createElement("ul",{className:"list-group"},o.a.createElement("li",{className:"list-group-item ".concat("singolo"===a?"active":""),onClick:function(){return T("singolo")}},"Singolo giocatore"),o.a.createElement("li",{className:"list-group-item ".concat("multigiocatore"===a?"active":""),onClick:function(){return T("multigiocatore")}},"Multigiocatore"))),o.a.createElement(y.a,{md:4},o.a.createElement("h4",null,"Seleziona numero di turni"),o.a.createElement(j.a,null,o.a.createElement(j.a.Group,{controlId:"selectTurn"},o.a.createElement(j.a.Control,{as:"select",value:m,onChange:function(e){return t=e.target.value,u(t),void localStorage.setItem("numTurns",t);var t}},o.a.createElement("option",{value:"1"},"1 Turno"),o.a.createElement("option",{value:"2"},"2 Turni"),o.a.createElement("option",{value:"3"},"3 Turni"),o.a.createElement("option",{value:"4"},"4 Turni"))))),o.a.createElement(y.a,{md:4,className:"d-flex align-items-end justify-content-center"})),o.a.createElement(b.a,{className:"mt-4"},o.a.createElement(y.a,{md:{span:4,offset:4},className:"text-center"},o.a.createElement(S.a,{variant:"primary",className:"mt-4",onClick:function(){localStorage.setItem("selectedTurn",m),localStorage.setItem("selectedMode",a),"singolo"===a?k("/Single"):"multigiocatore"===a&&k("/Multi")}},"Avvia gioco")))),o.a.createElement(O.a,{show:g,onHide:fe,className:"custom-modal"},o.a.createElement(O.a.Header,{closeButton:!0},o.a.createElement(O.a.Title,null,"Inviti ricevuti")),o.a.createElement(O.a.Body,null,o.a.createElement(I.a,null)),o.a.createElement("h2",null,"Emails"),o.a.createElement("ul",null,oe.map(function(e,t){return o.a.createElement("li",{key:e.email},o.a.createElement("span",null,"Email: ",e.email),o.a.createElement("span",null," - IDinvito: ",D[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"btn btn-danger ",style:{marginTop:"0rem",padding:"-3rem 0rem"},onClick:function(){return e=W[t].id_partita,a=D[t],localStorage.setItem("gameId",e),localStorage.setItem("inviteId",a),console.log("Valore di gameId nel LocalStorage:",localStorage.getItem("gameId")),console.log("Valore di inviteId nel LocalStorage:",localStorage.getItem("inviteId")),void fetch("http://localhost:8080/game/".concat(e)).then(function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(function(e){var t={robot:e.robot,classe:e.classe,turni:e.turni,modalita:e.modalita,name:localStorage.getItem("name"),id:localStorage.getItem("id")};fetch("http://localhost:8080/invitations/accept/".concat(a),{method:"PUT"}).then(function(e){if(!e.ok)throw new Error("Network response was not ok");console.log("Invito accettato con successo.")}).catch(function(e){console.error("Errore durante l'accettazione dell'invito:",e)}),fetch("http://localhost:8080/game/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(function(e){console.log("Dati del gioco inviati al server:",e),k("/join")}).catch(function(e){console.error("Errore durante la chiamata API per aggiungere il gioco:",e)})}).catch(function(e){console.error("Errore durante la conferma dell'email:",e)});var e,a}},"Accetta"),o.a.createElement("button",{className:"btn btn-danger",onClick:function(){return function(e){var t=localStorage.getItem("id");fetch("http://localhost:8080/invitations/delete/".concat(e),{method:"DELETE"}).then(function(e){if(!e.ok)throw new Error("Network response was not ok");return console.log("Invito eliminato con successo."),_(!0),fetch("http://localhost:8080/invitations/recuperoinviti/".concat(t))}).then(function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(function(e){var t=e.map(function(e){return e.id}),a=e.map(function(e){return e.senderid});Z(a),M(t),A(e.map(function(e){return e.game_id})),_(!1)}).catch(function(e){console.error("Errore durante la cancellazione dell'invito:",e)})}(D[t])}},"Rifiuta")))})),o.a.createElement(O.a.Footer,null,o.a.createElement(S.a,{variant:"secondary",onClick:fe},"Chiudi")))):o.a.createElement("div",null,"Accesso proibito. Esegui il login per accedere a questa pagina.")},R=a(7),A=a(5),z=a(187);a(148);var F=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),m=Object(s.a)(r,2),u=m[0],d=m[1],f=Object(n.useState)(!1),g=Object(s.a)(f,2),E=g[0],p=g[1],v=function(e){l(function(t){return Object(A.a)({},t,Object(R.a)({},e.target.name,e.target.value))})};return E?o.a.createElement(i.a,{to:"/mod"}):o.a.createElement(h.a,{className:"login-container"},o.a.createElement("div",{className:"login-box"},o.a.createElement("h1",{className:"text-center"},"Login"),o.a.createElement(j.a,{onSubmit:function(e){e.preventDefault(),z.a.post("http://localhost:8080/player/login",a).then(function(e){console.log(e.data),d(""),l({email:"",password:""}),p(!0),localStorage.setItem("email",e.data)}).catch(function(e){console.error(e);var t=e.response.data;d("Email not verified."===t?"Email not verified":"Invalid username or password")})}},o.a.createElement(j.a.Group,{controlId:"formBasicEmail"},o.a.createElement(j.a.Label,null,"Indirizzo email"),o.a.createElement(j.a.Control,{type:"email",name:"email",value:a.email,required:!0,onChange:v})),o.a.createElement(j.a.Group,{controlId:"formBasicPassword"},o.a.createElement(j.a.Label,null,"Password"),o.a.createElement(j.a.Control,{type:"password",name:"password",value:a.password,required:!0,onChange:v})),u&&o.a.createElement("p",{className:"text-danger"},u),o.a.createElement(S.a,{variant:"primary",type:"submit",className:"login-button"},"Login"),o.a.createElement(c.b,{to:"/via",className:"forgot-password-link"},"Password dimenticata?"),o.a.createElement(c.b,{to:"/Signup",className:"btn btn-secondary register-button"},"Registrati"))))};var D=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),c=Object(s.a)(r,2),m=c[0],u=c[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),g=f[0],O=f[1],x=Object(i.o)(),T=Object(n.useRef)(null),P=Object(n.useState)(!1),L=Object(s.a)(P,2),R=(L[0],L[1],Object(n.useState)("")),A=Object(s.a)(R,2),z=A[0],F=A[1];Object(n.useEffect)(function(){var e=localStorage.getItem("email");e&&F(e)},[]);var D=localStorage.getItem("email"),M=localStorage.getItem("id"),q=localStorage.getItem("name");fetch("http://localhost:8080/player/email/".concat(D)).then(function(e){return e.json()}).then(function(e){console.log(e),localStorage.setItem("id",e.id_player),localStorage.setItem("name",e.name)}).catch(function(e){console.error("Error retrieving user data:",e)});var B=[{name:"Classe 1",icon:N.b},{name:"Classe 2",icon:N.b},{name:"Classe 3",icon:N.b}].filter(function(e){return e.name.toLowerCase().includes(g.toLowerCase())}),_=[{name:"Randoop",icon:N.d},{name:"Evosuite",icon:N.d}];return z?o.a.createElement("div",null,o.a.createElement(E.a,{bg:"primary",variant:"dark",expand:"lg"},o.a.createElement(h.a,null,o.a.createElement(E.a.Brand,{href:"#"},"Scelta configurazione"),o.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(p.a,{className:"ms-auto"},o.a.createElement(p.a.Item,{style:{display:"flex",alignItems:"center",marginRight:"-4.5rem"}},o.a.createElement(v.a,null,o.a.createElement(v.a.Toggle,{variant:"light",id:"dropdown-basic",style:{background:"none",border:"none",padding:"0",color:"black"}},o.a.createElement(w.a,{icon:N.e,style:{marginRight:"0.3rem",color:"black"}}),z),o.a.createElement(v.a.Menu,null,o.a.createElement(v.a.Item,{style:{color:"black"},href:"#/action-1"},"Profilo"),o.a.createElement(v.a.Item,{style:{color:"black"},href:"#/action-2"},"Impostazioni"),o.a.createElement(v.a.Divider,null),o.a.createElement(v.a.Item,{style:{color:"black"},onClick:function(){localStorage.removeItem("email"),localStorage.removeItem("token"),x("/")}},"Esci")))))))),o.a.createElement(h.a,{className:"mt-4"},o.a.createElement(b.a,null,o.a.createElement(y.a,{md:3},o.a.createElement("h4",null,"Classi disponibili"),o.a.createElement(j.a,{className:"d-flex"},o.a.createElement(j.a.Control,{type:"text",placeholder:"Cerca classe",value:g,onChange:function(e){return O(e.target.value)}})),o.a.createElement(I.a,{style:{height:"400px",overflowY:"auto",marginTop:"1rem"}},B.map(function(e){return o.a.createElement(I.a.Item,{key:e.name,action:!0,active:a===e.name,onClick:function(){return t=e.name,l(t),void localStorage.setItem("selectedClass",t);var t},className:"d-flex align-items-center",style:{paddingRight:"0.5rem"}},a===e.name?o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(w.a,{icon:N.a,style:{color:"blue",marginRight:"0.5rem"}}),o.a.createElement("span",{style:{marginLeft:"0.5rem"}},e.name)):o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{icon:e.icon,style:{marginRight:"0.5rem"}}),o.a.createElement("span",{style:{marginLeft:"0.5rem"}},e.name)))}))),o.a.createElement(y.a,{md:6}),o.a.createElement(y.a,{md:3},o.a.createElement("h4",null,"Robot disponibili"),o.a.createElement(I.a,{style:{height:"400px",overflowY:"auto",maxWidth:"400px"},ref:T},_.map(function(e){return o.a.createElement(I.a.Item,{key:e.name,action:!0,active:m===e.name,onClick:function(){return t=e.name,void u(t);var t},className:"d-flex align-items-center ".concat(m===e.name?"robot-selected":""),"data-robot-name":e.name,style:{paddingRight:"0.5rem"}},m===e.name?o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(w.a,{icon:N.a,style:{color:"blue",marginRight:"0.5rem"}}),o.a.createElement("span",{style:{marginLeft:"0.5rem"}},e.name)):o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{icon:e.icon,style:{marginRight:"0.5rem"}}),o.a.createElement("span",{style:{marginLeft:"0.5rem"}},e.name)))}))))),o.a.createElement("div",{className:"navigation"},o.a.createElement(S.a,{variant:"link",href:"/mod",className:"navigation-button"},o.a.createElement(w.a,{icon:k.faArrowLeft,style:{color:"black"}})),o.a.createElement(S.a,{variant:"primary",size:"md",className:"confirm-button",onClick:function(){var e=localStorage.getItem("selectedMode"),t=localStorage.getItem("selectedTurn"),n={classe:a,robot:m,modalita:e,turni:t,id:M,name:q};fetch("http://localhost:8080/game/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){console.log("Game data sent to server:",e),x("/about")}).catch(function(e){console.error("Error sending game data:",e),console.log("json",n)})}},"Conferma selezione"),o.a.createElement(S.a,{variant:"link",href:"/about",className:"navigation-button"},o.a.createElement(w.a,{icon:C.faArrowRight,style:{color:"black"}})))):o.a.createElement("div",null,"Accesso proibito. Esegui il login per accedere a questa pagina.")};a(154);var M=function(){var e=Object(i.o)(),t=Object(n.useState)({name:"",surname:"",email:"",password:"",courseofstudy:""}),a=Object(s.a)(t,2),l=a[0],r=a[1],c=function(e){r(function(t){return Object(A.a)({},t,Object(R.a)({},e.target.name,e.target.value))})};return o.a.createElement("section",{className:"vh-100",style:{backgroundColor:"#eee"}},o.a.createElement(h.a,{className:"h-100"},o.a.createElement("div",{className:"row d-flex justify-content-center align-items-center h-100"},o.a.createElement("div",{className:"col-lg-12 col-xl-11"},o.a.createElement("div",{className:"card text-black",style:{borderRadius:"25px"}},o.a.createElement("div",{className:"card-body p-md-5"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"},o.a.createElement("p",{className:"text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"},"Sign up"),o.a.createElement(j.a,{onSubmit:function(t){t.preventDefault();var a={name:l.name,surname:l.surname,email:l.email,password:l.password,courseofstudy:l.courseofstudy};fetch("http://localhost:8080/player/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.text()}).then(function(t){"Email gi\xe0 presente"===t?alert("Email gi\xe0 presente. Si prega di utilizzare altra email."):(console.log("Player data sent to server:",t),e("/"))}).catch(function(e){console.error("Error sending player data:",e)})},className:"mx-1 mx-md-4"},o.a.createElement("div",{className:"form-floating mb-4"},o.a.createElement("input",{type:"text",id:"name",className:"form-control",name:"name",value:l.name,onChange:c,required:!0}),o.a.createElement("label",{className:"form-label",htmlFor:"name"},"Name")),o.a.createElement("div",{className:"form-floating mb-4"},o.a.createElement("input",{type:"text",id:"surname",className:"form-control",name:"surname",value:l.surname,onChange:c,required:!0}),o.a.createElement("label",{className:"form-label",htmlFor:"surname"},"Surname")),o.a.createElement("div",{className:"form-floating mb-4"},o.a.createElement("input",{type:"email",id:"email",className:"form-control",name:"email",value:l.email,onChange:c,required:!0}),o.a.createElement("label",{className:"form-label",htmlFor:"email"},"Email")),o.a.createElement("div",{className:"form-floating mb-4"},o.a.createElement("input",{type:"password",id:"password",className:"form-control",name:"password",value:l.password,onChange:c,required:!0}),o.a.createElement("label",{className:"form-label",htmlFor:"password"},"Password")),o.a.createElement("div",{className:"form-floating mb-4"},o.a.createElement("select",{id:"courseofstudy",className:"form-select",name:"courseofstudy",value:l.courseofstudy,onChange:c,required:!0},o.a.createElement("option",{value:""},"Seleziona un corso di studi"),o.a.createElement("option",{value:"triennale"},"Triennale"),o.a.createElement("option",{value:"magistrale"},"Magistrale"),o.a.createElement("option",{value:"altro"},"Altro")),o.a.createElement("label",{className:"form-label",htmlFor:"courseofstudy"},"Course of study")),o.a.createElement("div",{className:"form-check d-flex justify-content-center mb-5"},o.a.createElement("input",{className:"form-check-input me-2",type:"checkbox",value:"",id:"form2Example3c",required:!0}),o.a.createElement("label",{className:"form-check-label",htmlFor:"form2Example3"},"I agree all statements in ",o.a.createElement("a",{href:"#!"},"Terms of service"))),o.a.createElement("div",{className:"d-flex justify-content-center mx-4 mb-3 mb-lg-4"},o.a.createElement(S.a,{type:"submit",className:"btn btn-primary btn-lg"},"Register")))),o.a.createElement("div",{className:"col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"},o.a.createElement("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp",className:"img-fluid",alt:"Sample image"})))))))))};var q=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),c=Object(s.a)(r,2),m=c[0],u=c[1],d=Object(n.useState)(0),f=Object(s.a)(d,2),g=f[0],E=f[1],h=Object(n.useState)(!1),p=Object(s.a)(h,2),v=p[0],b=p[1],y=Object(i.o)(),j=Object(n.useState)(!0),I=Object(s.a)(j,2),O=I[0],w=(I[1],localStorage.getItem("invtoId")),N=Object(n.useState)(!1),k=Object(s.a)(N,2),C=k[0],x=k[1];return Object(n.useEffect)(function(){var e=function(){fetch("http://localhost:8080/invitations/".concat(w,"/offbyid"),{method:"PUT"}).then(function(e){console.log("API call successful")}).catch(function(e){console.log("API call failed",e)})},t=function(){fetch("http://localhost:8080/invitations/".concat(w,"/offbyid"),{method:"PUT"}).then(function(e){console.log("API call successful")}).catch(function(e){console.log("API call failed",e)})};return window.addEventListener("beforeunload",e),window.addEventListener("unload",t),function(){window.removeEventListener("beforeunload",e),window.removeEventListener("unload",t)}},[w]),Object(n.useEffect)(function(){return function(){fetch("http://localhost:8080/invitations/".concat(w,"/offbyid"),{method:"PUT"}).then(function(e){console.log("API call successful")}).catch(function(e){console.log("API call failed",e)})}},[]),Object(n.useEffect)(function(){if(C){var e=setInterval(function(){var e=localStorage.getItem("invtoId");if(!e)return u("ID invito non trovato nel localStorage"),void l(!1);fetch("http://localhost:8080/invitations/checkAccepted/".concat(e)).then(function(e){return e.json()}).then(function(t){u(t.message),l(!1),t.message==="Invitation with ID ".concat(e," has been accepted")&&b(!0)}).catch(function(e){console.error("Errore durante la chiamata API:",e),u("Errore durante la chiamata API"),l(!1)})},2e3);return function(){return clearInterval(e)}}},[C]),Object(n.useEffect)(function(){v&&C&&y("/about")},[v,y]),Object(n.useEffect)(function(){var e=setInterval(function(){E(function(e){return(e+1)%4})},1e3);return function(){return clearInterval(e)}},[]),a?o.a.createElement("div",{className:"loading-container",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},O&&o.a.createElement(S.a,{variant:"primary",onClick:function(){fetch("http://localhost:8080/invitations/".concat(w,"/onbyid"),{method:"PUT",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e.message),x(!0)}).catch(function(e){console.log(e)})}},"Crea Lobby")):"Invitation not found"!==m&&m!=="Invitation with ID ".concat(localStorage.getItem("invtoId")," has been accepted")?o.a.createElement("div",{className:"loading-container",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},[0,1,2,3].map(function(e){return o.a.createElement("span",{key:e,style:{marginRight:5,fontSize:40,color:"#ccc"}},e===g?o.a.createElement("span",{style:{color:"black",fontSize:"100px"}},"."):"")})),o.a.createElement("div",null,O)):null};var B=function(){var e=Object(i.o)(),t=Object(i.m)(),a=new URLSearchParams(t.search).get("token"),l=Object(n.useState)(""),r=Object(s.a)(l,2),c=r[0],m=r[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),f=d[0],g=d[1],E=Object(n.useState)(""),p=Object(s.a)(E,2),v=p[0],I=p[1];return Object(n.useEffect)(function(){a||g("Invalid token")},[a]),o.a.createElement(h.a,{className:"d-flex flex-column justify-content-center align-items-center min-vh-100"},o.a.createElement(b.a,{className:"justify-content-center"},o.a.createElement(y.a,{md:6},o.a.createElement(j.a,{onSubmit:function(t){if(t.preventDefault(),c.length<8)g("Password must be at least 8 characters long");else{var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:a,password:c})};fetch("http://localhost:8080/preset/reset",n).then(function(e){return e.text()}).then(function(t){"password-reset-error"===t?g("Token non valido"):(I("Password reset successful"),g(""),e("/"))}).catch(function(e){g(e.message),I("")})}}},o.a.createElement(j.a.Group,{controlId:"formPassword"},o.a.createElement(j.a.Label,null,"New Password"),o.a.createElement(j.a.Control,{type:"password",value:c,onChange:function(e){m(e.target.value)},style:{width:"215%"}})),o.a.createElement(S.a,{variant:"primary",type:"submit",className:"mt-3"},"Reset Password")),f&&o.a.createElement("div",{className:"text-danger mt-3"},f),v&&o.a.createElement("div",{className:"text-success mt-3"},v))))};var _=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),c=Object(s.a)(r,2),i=c[0],m=c[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),f=d[0],g=d[1];return o.a.createElement("div",{className:"d-flex flex-column align-items-center mt-5"},o.a.createElement("div",{className:"w-30"},o.a.createElement("h1",null,"Password Reset"),f&&o.a.createElement("p",{className:"text-success"},f),i&&o.a.createElement("p",{className:"text-danger"},i),o.a.createElement(j.a,{onSubmit:function(e){e.preventDefault(),z.a.post("http://localhost:8080/preset/request",{email:a}).then(function(e){"Not Found"===e.data?alert("Non esiste un account con questa email"):(g("Password reset link sent to your email"),m(""))}).catch(function(e){console.error(e),e.response&&404===e.response.status&&"Not Found"===e.response.data?m("L'indirizzo email non esiste."):m("Si \xe8 verificato un errore durante la richiesta di ripristino password.")})}},o.a.createElement(j.a.Group,{controlId:"formBasicEmail"},o.a.createElement(j.a.Label,null,"Email address"),o.a.createElement(j.a.Control,{type:"email",placeholder:"Enter email",size:"md",value:a,onChange:function(e){l(e.target.value)}})),o.a.createElement(S.a,{variant:"primary",type:"submit",className:"mt-3"},"Submit"))))};var J=function(){var e=localStorage.getItem("selectedClass");console.log(e);var t="http://localhost:8190/myapp?myParam=".concat(e);return o.a.createElement("iframe",{src:t,title:"Editor",style:{border:"none",height:"100vh",width:"100vw"},allowFullScreen:!0})};var U=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],l=(t[1],Object(i.o)(),localStorage.getItem("invtoId"));return Object(n.useEffect)(function(){var e=function(e){fetch("http://localhost:8080/invitations/".concat(l,"/offbyid"),{method:"PUT"}).then(function(e){console.log("API call successful")}).catch(function(e){console.log("API call failed",e)})};return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}},[l]),o.a.createElement("div",null,a&&o.a.createElement("button",{onClick:function(){fetch("http://localhost:8080/invitations/".concat(l,"/onbyid"),{method:"PUT",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e.message)}).catch(function(e){console.log(e)})}},"Conferma"))};var G=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],l=t[1],r=localStorage.getItem("inviteId");console.log("Valore di inviteId nel LocalStorage:",r);var c=Object(i.o)();return Object(n.useEffect)(function(){var e=setInterval(function(){fetch("http://localhost:8080/invitations/invitations/".concat(r,"/onpagebyid")).then(function(e){return e.json()}).then(function(e){l(e.onpage)}).catch(function(e){console.log(e)})});return function(){return clearInterval(e)}},[a]),Object(n.useEffect)(function(){!0===a&&c("/about")},[a,c]),o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}},!0===a?o.a.createElement("div",{style:{fontSize:"2em",fontFamily:"Arial, sans-serif",fontWeight:"bold",color:"green"}},"Ingresso in lobby"):o.a.createElement("div",{style:{fontSize:"2em",fontFamily:"Arial, sans-serif",fontWeight:"bold",color:"red"}},"Il player non \xe8 nella partita"))};var H=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,null,o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/join",element:o.a.createElement(G,null)}),o.a.createElement(i.b,{path:"/controllo",element:o.a.createElement(U,null)}),o.a.createElement(i.b,{path:"/about",element:o.a.createElement(P,null)}),o.a.createElement(i.b,{path:"/mod",element:o.a.createElement(L,null)}),o.a.createElement(i.b,{path:"/Signup",element:o.a.createElement(M,null)}),o.a.createElement(i.b,{path:"/Multi",element:o.a.createElement(x,null)}),o.a.createElement(i.b,{path:"/Single",element:o.a.createElement(D,null)}),o.a.createElement(i.b,{path:"/",element:o.a.createElement(F,null)}),o.a.createElement(i.b,{path:"/casa",element:o.a.createElement(q,null)}),o.a.createElement(i.b,{path:"/elem",element:o.a.createElement(B,null)}),o.a.createElement(i.b,{path:"/via",element:o.a.createElement(_,null)}),o.a.createElement(i.b,{path:"/password-reset/reset",element:o.a.createElement(B,null)}),o.a.createElement(i.b,{path:"/about2",element:o.a.createElement(J,null)}))))},V=(a(156),function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,185)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),l(e),r(e)})});a(158);r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(H,null))),V()}},[[121,3,2]]]);
//# sourceMappingURL=main.cbaf3f23.chunk.js.map