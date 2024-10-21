"use strict";(self.webpackChunkdoku=self.webpackChunkdoku||[]).push([[1714],{159:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=i(4848),s=i(8453);const r={date:new Date("2023-09-19T00:00:00.000Z"),authors:"b-bastian",title:"Exceptions"},l="Exceptions",c={permalink:"/blog/2023/09/19/exceptions",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-09-19-exceptions.md",source:"@site/blog/2023-09-19-exceptions.md",title:"Exceptions",description:"Allgemeines",date:"2023-09-19T00:00:00.000Z",tags:[],readingTime:2.145,hasTruncateMarker:!0,authors:[{name:"Brugger Bastian",title:"Sch\xfcler an der BHAK Zell am See",url:"https://github.com/b-bastian",page:{permalink:"/blog/authors/b-bastian"},socials:{github:"https://github.com/b-bastian"},imageURL:"https://github.com/b-bastian.png",key:"b-bastian"}],frontMatter:{date:"2023-09-19T00:00:00.000Z",authors:"b-bastian",title:"Exceptions"},unlisted:!1,prevItem:{title:"Arbeitsauftrag 17.10.2023",permalink:"/blog/2023/10/17/arbeitsauftrag"}},o={authorsImageUrls:[void 0]},a=[{value:"Allgemeines",id:"allgemeines",level:2},{value:"Keine Exception",id:"keine-exception",level:2},{value:"Exception bei der Umwandlung von Zeichen",id:"exception-bei-der-umwandlung-von-zeichen",level:2},{value:"try &amp; catch",id:"try--catch",level:2},{value:"Mehrere catch-Bereiche",id:"mehrere-catch-bereiche",level:2},{value:"finally",id:"finally",level:2},{value:"Eigene Exceptions erstellen",id:"eigene-exceptions-erstellen",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"allgemeines",children:"Allgemeines"}),"\n",(0,t.jsxs)(n.p,{children:["Sollte ein unvorhergesehenes Ereignis auftreten, so wird eine ",(0,t.jsx)(n.em,{children:"Exception"})," ausgel\xf6st."]}),"\n",(0,t.jsx)(n.h2,{id:"keine-exception",children:"Keine Exception"}),"\n",(0,t.jsx)(n.p,{children:"Bei folgendem Beispiel wird keine Exception ausgel\xf6st. Folgende F\xe4lle werden ber\xfccksichtigt:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"leere Eingabe"}),"\n",(0,t.jsx)(n.li,{children:"Texteingabe"}),"\n",(0,t.jsx)(n.li,{children:"Eingabe von Zahlen"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",children:'Console.Write("Username: ");\nstring username = Console.ReadLine();\nConsole.WriteLine($"Username: {username}");\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exception-bei-der-umwandlung-von-zeichen",children:"Exception bei der Umwandlung von Zeichen"}),"\n",(0,t.jsxs)(n.p,{children:["Wird eine Zeichenkette fehlerhaft in eine Zahl umgewandelt, so tritt eine ",(0,t.jsx)(n.code,{children:"Exception"})," auf."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Exception",src:i(781).A+"",width:"780",height:"96"})}),"\n",(0,t.jsx)(n.h2,{id:"try--catch",children:"try & catch"}),"\n",(0,t.jsxs)(n.p,{children:["Ausgel\xf6ste ",(0,t.jsx)(n.code,{children:"Exceptions"})," k\xf6nnen mittels ",(0,t.jsx)(n.code,{children:"try"})," und ",(0,t.jsx)(n.code,{children:"catch"})," bearbeitet werden."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",children:'Console.Write("Zahl: ");\nstring eingabe = Console.ReadLine();\n\n\ntry {\n\tint zahl = Convert.ToInt32(eingabe);\n\tConsole.WriteLine($"Zahl: {zahl}");\n} catch (FormatException ex) {\n\tConsole.WriteLine("Bitte kontrollieren Sie die eingegebene Zahl!");\n\tConsole.WriteLine(ex.Message);\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"ACHTUNG",type:"danger",children:(0,t.jsxs)(n.p,{children:["Die Bearbeitung wird im ",(0,t.jsx)(n.code,{children:"try"}),"-Bereich bis zum Auftritt eines Fehlers ersucht. Beim Auftreten eines Fehlers wird ",(0,t.jsx)(n.strong,{children:"sofort"})," in den ",(0,t.jsx)(n.code,{children:"catch"}),"-Bereich gewechselt."]})}),"\n",(0,t.jsxs)(n.p,{children:["Durch die Angabe der genauen ",(0,t.jsx)(n.code,{children:"Exception"})," kann gezielt auf den Fehler reagiert werden. Mittels ",(0,t.jsx)(n.code,{children:"ex.Message"})," kann die Fehlermeldung ausgelesen werden."]}),"\n",(0,t.jsx)(n.h2,{id:"mehrere-catch-bereiche",children:"Mehrere catch-Bereiche"}),"\n",(0,t.jsxs)(n.p,{children:["Falls mehrere ",(0,t.jsx)(n.code,{children:"catch"}),"-Bereiche ben\xf6tigt werden, k\xf6nnen diese an die zuvor erstellten Bl\xf6cke gereiht werden."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",children:'Console.Write("Zahl: ");\nstring eingabe = Console.ReadLine();\n\nint[] zahlen = { 17, 20, 15, 11, 9, 5, 0 };\n\ntry {\n\tint position = Convert.ToInt32(eingabe);\n\tConsole.WriteLine($"Zahl: {zahlen[position]}");\n} catch (FormatException ex) {\n\tConsole.WriteLine("Bitte kontrollieren Sie die eingegebene Zahl!");\n\tConsole.WriteLine(ex.Message);\n} catch (IndexOutOfRangeException) {\n\tConsole.WriteLine($"Bitte geben Sie eine Zahl zwischen 0 & {zahlen.Length - 1} ein!");\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Wird im ",(0,t.jsx)(n.code,{children:"catch"}),"-Bereich ",(0,t.jsx)(n.code,{children:"Exception"})," angegeben, so handelt es sich um die ",(0,t.jsx)(n.strong,{children:"Oberklasse"})," und diese ber\xfccksichtigt ",(0,t.jsx)(n.strong,{children:"alle"})," Exceptions."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",children:'Console.Write("Zahl: ");\nstring eingabe = Console.ReadLine();\n\nint[] zahlen = { 17, 20, 15, 11, 9, 5, 0 };\n\ntry {\n\tint position = Convert.ToInt32(eingabe);\n\tConsole.WriteLine($"Zahl: {zahlen[position]}");\n} catch (FormatException ex) {\n\tConsole.WriteLine("Bitte kontrollieren Sie die eingegebene Zahl!");\n\tConsole.WriteLine(ex.Message);\n} catch (IndexOutOfRangeException) {\n\tConsole.WriteLine($"Bitte geben Sie eine Zahl zwischen 0 & {zahlen.Length - 1} ein!");\n} catch (Exception ex) {\n\tConsole.WriteLine(ex.Message);\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"finally",children:"finally"}),"\n",(0,t.jsxs)(n.p,{children:["Wird ein ",(0,t.jsx)(n.code,{children:"finally"}),"-Block verwendet, so wird dieser Block ",(0,t.jsx)(n.strong,{children:"stets"})," aufgerufen. Dies bedeutet, dass der ",(0,t.jsx)(n.code,{children:"finally"}),"-Block sowohl bei einem Fehler als auch bei einer erfolgreichen Bearbeitung aufgerufen wird."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",children:'Console.Write("Zahl: ");\nstring eingabe = Console.ReadLine();\n\n\ntry {\n\tint zahl = Convert.ToInt32(eingabe);\n\tConsole.WriteLine($"Zahl: {zahl}");\n} catch (FormatException ex) {\n\tConsole.WriteLine("Bitte kontrollieren Sie die eingegebene Zahl!");\n\tConsole.WriteLine(ex.Message);\n}\nfinally {\n\tConsole.WriteLine("Vielen Dank!");\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"eigene-exceptions-erstellen",children:"Eigene Exceptions erstellen"}),"\n",(0,t.jsxs)(n.p,{children:["Eigene Exceptions k\xf6nnen mittels ",(0,t.jsx)(n.code,{children:'throw new Exceptin("Test der Nachricht")'})," ausgel\xf6st werden. Hierbei wird die Oberklasse ",(0,t.jsx)(n.code,{children:"Exception"})," verwendet."]}),"\n",(0,t.jsxs)(n.p,{children:["M\xf6chte man eine ",(0,t.jsx)(n.strong,{children:"eigene Exception"})," verwenden, so muss eine ",(0,t.jsx)(n.strong,{children:"Unterklasse"})," der Exception erstellt werden."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Visual Studio (Windows) erstellt den Inhalt der Unterklasse nach der Angabe der Vererbung automatisch. ","\ud83d\ude09"," ","\ud83d\udcaf"," ","\ud83d\udd25"," ","\ud83c\udf4e"," ","\u263a\ufe0f"," ","\ud83d\ude37"]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},781:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/exception-convert-string-to-int-b76f7859e7a6eb4324f0e80027fc467a.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(6540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);