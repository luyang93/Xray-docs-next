"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[7980],{49484:(o,e,l)=>{l.r(e),l.d(e,{data:()=>n});const n={key:"v-58023ae8",path:"/en/config/outbounds/",title:"Outbounds 可用协议列表",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"协议列表",slug:"协议列表",children:[]}],filePathRelative:"en/config/outbounds/README.md",git:{updatedTime:1622027153e3,contributors:[{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1}]}}},81095:(o,e,l)=>{l.r(e),l.d(e,{default:()=>V});var n=l(66252);const t=(0,n._)("h1",{id:"outbounds-可用协议列表",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#outbounds-可用协议列表","aria-hidden":"true"},"#"),(0,n.Uk)(" Outbounds 可用协议列表")],-1),u=(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n._)("strong",null,"这个章节包含了目前所有可用于 Outbounds 的协议及具体配置细节.")])],-1),r=(0,n._)("h2",{id:"协议列表",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#协议列表","aria-hidden":"true"},"#"),(0,n.Uk)(" 协议列表")],-1),s=(0,n.Uk)("Blackhole"),a=(0,n.Uk)("Blackhole（黑洞）是一个出站数据协议，它会阻碍所有数据的出站，配合 "),k=(0,n.Uk)("路由（Routing）"),c=(0,n.Uk)(" 一起使用，可以达到禁止访问某些网站的效果。"),d=(0,n.Uk)("DNS"),_=(0,n._)("p",null,"DNS 是一个出站协议，主要用于拦截和转发 DNS 查询。此出站协议只能接收 DNS 流量（包含基于 UDP 和 TCP 协议的查询），其它类型的流量会导致错误。",-1),h=(0,n.Uk)("Freedom"),p=(0,n._)("p",null,"Freedom 是一个出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据。",-1),i=(0,n.Uk)("HTTP"),f=(0,n._)("p",null,"HTTP 协议",-1),m=(0,n.Uk)("Socks"),b=(0,n.Uk)("标准 Socks 协议实现，兼容 "),g={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},U=(0,n.Uk)("Socks 4"),w=(0,n.Uk)("、Socks 4a 和 "),S={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},W=(0,n.Uk)("Socks 5"),q=(0,n.Uk)("。"),T=(0,n.Uk)("VLESS"),v=(0,n._)("p",null,"VLESS 是一个无状态的轻量传输协议，可以作为 Xray 客户端和服务器之间的桥梁。",-1),D=(0,n.Uk)("VMess"),P=(0,n.Uk)("VMess"),y=(0,n.Uk)(" 是一个加密传输协议，可以作为 Xray 客户端和服务器之间的桥梁。"),C=(0,n.Uk)("Trojan"),O={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},j=(0,n.Uk)("Trojan"),x=(0,n.Uk)(" 协议。"),E=(0,n.Uk)("Shadowsocks"),L={href:"https://zh.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},N=(0,n.Uk)("Shadowsocks"),R=(0,n.Uk)(" 协议。"),V={render:function(o,e){const l=(0,n.up)("RouterLink"),V=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[t,u,r,(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n.Wm)(l,{to:"/en/config/outbounds/blackhole.html"},{default:(0,n.w5)((()=>[s])),_:1})])]),(0,n._)("p",null,[a,(0,n.Wm)(l,{to:"/en/config/routing.html"},{default:(0,n.w5)((()=>[k])),_:1}),c]),(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n.Wm)(l,{to:"/en/config/outbounds/dns.html"},{default:(0,n.w5)((()=>[d])),_:1})])]),_,(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n.Wm)(l,{to:"/en/config/outbounds/freedom.html"},{default:(0,n.w5)((()=>[h])),_:1})])]),p,(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n.Wm)(l,{to:"/en/config/outbounds/http.html"},{default:(0,n.w5)((()=>[i])),_:1})])]),f,(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n.Wm)(l,{to:"/en/config/outbounds/socks.html"},{default:(0,n.w5)((()=>[m])),_:1})])]),(0,n._)("p",null,[b,(0,n._)("a",g,[U,(0,n.Wm)(V)]),w,(0,n._)("a",S,[W,(0,n.Wm)(V)]),q]),(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n.Wm)(l,{to:"/en/config/outbounds/vless.html"},{default:(0,n.w5)((()=>[T])),_:1})])]),v,(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n.Wm)(l,{to:"/en/config/outbounds/vmess.html"},{default:(0,n.w5)((()=>[D])),_:1})])]),(0,n._)("p",null,[(0,n.Wm)(l,{to:"/en/config/development/protocols/vmess.html"},{default:(0,n.w5)((()=>[P])),_:1}),y]),(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n.Wm)(l,{to:"/en/config/outbounds/trojan.html"},{default:(0,n.w5)((()=>[C])),_:1})])]),(0,n._)("p",null,[(0,n._)("a",O,[j,(0,n.Wm)(V)]),x]),(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n.Wm)(l,{to:"/en/config/outbounds/shadowsocks.html"},{default:(0,n.w5)((()=>[E])),_:1})])]),(0,n._)("p",null,[(0,n._)("a",L,[N,(0,n.Wm)(V)]),R])],64)}}}}]);