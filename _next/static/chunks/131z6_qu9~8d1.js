(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42700,e=>{"use strict";var t=e.i(95204),a=e.i(44116),r=e.i(40620),i=e.i(6842),s=e.i(79745),l=e.i(91276),n=e.i(9393),o=e.i(61018);e.s(["default",0,function(){let[e,d]=(0,s.useState)(!0);(0,s.useEffect)(()=>{document.title="Adham Nadim"},[]);let[c,x]=(0,s.useState)(!1),[m,p]=(0,s.useState)("");(0,s.useEffect)(()=>{let e=localStorage.getItem("nadim-theme");e?d("dark"===e):d(window.matchMedia("(prefers-color-scheme: dark)").matches),x(!0)},[]),(0,s.useEffect)(()=>{c&&localStorage.setItem("nadim-theme",e?"dark":"light")},[e,c]),(0,s.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{localStorage.getItem("nadim-theme")||d(e.matches)};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);let h=e=>{p(e),setTimeout(()=>{p("")},2200)},b=async()=>{navigator.share?await navigator.share({title:"Adham Nadim",url:window.location.href}):(navigator.clipboard.writeText(window.location.href),h("Link copied"))};return c?(0,t.jsxs)("main",{className:`
        relative
        min-h-screen
        overflow-hidden
        transition-all
        duration-700
        ${e?"bg-[#07181D] text-[#F5F1E8]":"bg-[#F4F1E8] text-[#1A1A1A]"}
      `,children:[(0,t.jsxs)("div",{className:"relative h-[54vh] min-h-[520px] overflow-hidden",children:[(0,t.jsx)("div",{className:`
            absolute
            inset-0
            ${e?"bg-[#07181D]":"bg-[#F4F1E8]"}
          `}),(0,t.jsx)("div",{className:"absolute inset-0 pointer-events-none",children:(0,t.jsx)("div",{className:`
              absolute
              inset-0
              ${e?"opacity-[0.035]":"opacity-[0.05]"}
            `,style:{backgroundImage:`url('${e?"/nadim-industries/pattern-light.svg":"/nadim-industries/pattern-dark.svg"}')`,backgroundSize:"120px 120px",backgroundRepeat:"repeat",backgroundPosition:"center"}})}),(0,t.jsx)("div",{className:"absolute top-0 left-0 w-full z-20",children:(0,t.jsx)("div",{className:"w-full px-3 md:px-6 py-8 flex items-center",children:(0,t.jsxs)("div",{className:"flex items-center gap-5",children:[(0,t.jsx)("div",{className:"relative w-[74px] h-[74px]",children:(0,t.jsx)(a.default,{src:e?"/nadim-industries/logo-light.png":"/nadim-industries/logo-dark.png",alt:"NADIM",fill:!0,priority:!0,sizes:"74px",className:"object-contain"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-[20px] font-semibold tracking-tight",children:o.COMPANY.name}),(0,t.jsx)("p",{className:`
                    text-[11px]
                    uppercase
                    tracking-[0.28em]
                    mt-1
                    ${e?"text-white/55":"text-black/45"}
                  `,children:"Since 1978"})]})]})})}),(0,t.jsx)("div",{className:" absolute inset-0 z-10 flex items-center justify-center -translate-y-10 ",children:(0,t.jsxs)(r.motion.div,{initial:{opacity:0,y:35},animate:{opacity:1,y:0},transition:{duration:1.2},className:"text-center px-6",children:[(0,t.jsx)("div",{className:"flex justify-center mb-1",children:(0,t.jsx)("div",{className:"relative w-[150px] h-[150px] md:w-[190px] md:h-[190px]",children:(0,t.jsx)(a.default,{src:e?"/nadim-industries/logo-light.png":"/nadim-industries/logo-dark.png",alt:"NADIM",fill:!0,priority:!0,sizes:"190px",className:"object-contain opacity-95"})})}),(0,t.jsx)("h1",{className:" text-[58px] md:text-[96px] leading-[0.92] tracking-[-0.06em] font-black mb-5 ",children:"Adham Nadim"}),(0,t.jsxs)("div",{className:"flex items-center justify-center gap-5 mb-6",children:[(0,t.jsx)("div",{className:"w-[120px] h-px bg-[#C6A46A]/60"}),(0,t.jsx)("div",{className:"w-[8px] h-[8px] rotate-45 bg-[#C6A46A]"}),(0,t.jsx)("div",{className:"w-[120px] h-px bg-[#C6A46A]/60"})]}),(0,t.jsx)("p",{className:`
                uppercase
                tracking-[0.34em]
                text-[14px]
                md:text-[19px]
                font-medium
                ${e?"text-white/58":"text-black/45"}
              `,children:o.COMPANY.position})]})})]}),(0,t.jsx)("section",{className:"relative z-20 -mt-10 pb-28 px-6",children:(0,t.jsxs)("div",{className:"max-w-5xl mx-auto",children:[(0,t.jsx)("div",{className:"grid md:grid-cols-2 gap-5 mb-20 md:mb-24",children:o.socials.map((a,r)=>{let i=a.icon;return(0,t.jsxs)("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",className:`
                        group
                        relative
                        overflow-hidden
                        rounded-[26px] md:rounded-[30px]
                        border
                        transition-all
                        duration-500
                        hover:-translate-y-[4px]
                        active:scale-[0.985]
                        backdrop-blur-2xl

                        ${e?`
                              bg-[rgba(255,255,255,0.03)]
                              border-white/[0.05]

                              hover:bg-[rgba(255,255,255,0.055)]
                              hover:border-white/[0.08]
                            `:`
                              bg-[rgba(255,255,255,0.55)]
                              border-black/[0.04]

                              hover:bg-[rgba(255,255,255,0.74)]
                              hover:border-black/[0.06]
                            `}

                        shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                        hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]
                      `,children:[(0,t.jsx)("div",{className:" absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none bg-[linear-gradient(120deg,rgba(255,255,255,0.10),transparent_40%,rgba(255,255,255,0.04))] "}),(0,t.jsxs)("div",{className:"relative z-10 p-7 md:p-10",children:[(0,t.jsx)("div",{className:"mb-10 md:mb-14",children:(0,t.jsx)("div",{className:" text-[28px] md:text-[34px] transition-all duration-500 group-hover:text-[#C6A46A] group-hover:scale-110 ",children:(0,t.jsx)(i,{})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-[24px] md:text-[28px] font-semibold mb-2 md:mb-3 tracking-tight",children:a.title}),(0,t.jsx)("p",{className:`
                              text-[14px] md:text-[15px]
                              leading-relaxed
                              ${e?"text-white/55":"text-black/50"}
                            `,children:a.value})]})]}),(0,t.jsx)("div",{className:" absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6A46A] transition-all duration-500 group-hover:w-full "})]},r)})}),(0,t.jsxs)("div",{className:`
              overflow-hidden
              rounded-[36px]
              border
              ${e?"border-white/[0.05]":"border-black/[0.05]"}
            `,children:[(0,t.jsxs)("div",{className:`
                px-10
                py-10
                ${e?"bg-[rgba(255,255,255,0.025)]":"bg-white/70"}
              `,children:[(0,t.jsx)("p",{className:"uppercase tracking-[0.28em] text-[11px] text-[#C6A46A] mb-4",children:"Headquarters"}),(0,t.jsx)("h2",{className:"text-[28px] md:text-[40px] leading-tight font-semibold max-w-3xl tracking-tight",children:o.COMPANY.address})]}),(0,t.jsx)("iframe",{src:"https://www.google.com/maps?q=30.0914416,31.0241968&z=15&output=embed",className:"w-full h-[420px] border-0",loading:"lazy"})]})]})}),(0,t.jsxs)("div",{className:`
    fixed
    bottom-7
    left-1/2
    -translate-x-1/2
    z-50
    flex
    items-center
    gap-2
    px-3
    py-3
    rounded-full
    backdrop-blur-xl
    border
    shadow-2xl
    ${e?`
          bg-[rgba(10,22,25,0.78)]
          border-white/[0.05]
        `:`
          bg-[rgba(255,255,255,0.82)]
          border-black/[0.05]
        `}
  `,children:[(0,t.jsxs)("div",{className:"relative group",children:[(0,t.jsx)("button",{onClick:b,className:" w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:text-[#C6A46A] hover:scale-110 ",children:(0,t.jsx)(l.FaShareAlt,{className:"text-[15px]"})}),(0,t.jsx)("div",{className:" absolute bottom-[135%] left-1/2 -translate-x-1/2 px-3 py-2 rounded-full text-[10px] uppercase tracking-[0.22em] whitespace-nowrap opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-xl border shadow-xl bg-[rgba(10,22,25,0.92)] border-white/[0.06] text-white ",children:"Share"})]}),(0,t.jsxs)("div",{className:"relative group",children:[(0,t.jsx)("button",{onClick:()=>{let t=!e;d(t),localStorage.setItem("nadim-theme",t?"dark":"light")},className:" w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:text-[#C6A46A] hover:scale-110 ",children:e?(0,t.jsx)(n.FiSun,{className:"text-[18px]"}):(0,t.jsx)(n.FiMoon,{className:"text-[18px]"})}),(0,t.jsx)("div",{className:" absolute bottom-[135%] left-1/2 -translate-x-1/2 px-3 py-2 rounded-full text-[10px] uppercase tracking-[0.22em] whitespace-nowrap opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-xl border shadow-xl bg-[rgba(10,22,25,0.92)] border-white/[0.06] text-white ",children:"Theme"})]}),(0,t.jsxs)("div",{className:"relative group",children:[(0,t.jsx)("button",{onClick:()=>{let e=new Blob([`BEGIN:VCARD
VERSION:3.0
FN:Adham Nadim
ORG:NADIM Industries
TITLE:Chairman & Managing Director
TEL:+201222133775
EMAIL:adham@nadim.org
ADR:;;Abu Rawash Industrial Zone,Cairo-Alex Desert Road;Giza;;;Egypt
END:VCARD`],{type:"text/vcard"}),t=window.URL.createObjectURL(e),a=document.createElement("a");a.href=t,a.download="adham-nadim.vcf",a.click(),window.URL.revokeObjectURL(t),h("Contact saved")},className:" w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:text-[#C6A46A] hover:scale-110 ",children:(0,t.jsx)(l.FaDownload,{className:"text-[15px]"})}),(0,t.jsx)("div",{className:" absolute bottom-[135%] left-1/2 -translate-x-1/2 px-3 py-2 rounded-full text-[10px] uppercase tracking-[0.22em] whitespace-nowrap opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-xl border shadow-xl bg-[rgba(10,22,25,0.92)] border-white/[0.06] text-white ",children:"Save Contact"})]})]}),(0,t.jsx)(i.AnimatePresence,{children:m&&(0,t.jsx)(r.motion.div,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},exit:{opacity:0,y:18},className:`
              fixed
              top-6
              left-1/2
              -translate-x-1/2
              z-[120]
              px-6
              py-3
              rounded-full
              backdrop-blur-xl
              border
              text-[11px]
              uppercase
              tracking-[0.18em]
              ${e?`
                    bg-[rgba(10,22,25,0.9)]
                    border-white/[0.05]
                    text-white
                  `:`
                    bg-white/90
                    border-black/[0.05]
                    text-black
                  `}
            `,children:m})})]}):null}])}]);