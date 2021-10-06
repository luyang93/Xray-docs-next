import{r as o,o as n,c as t,a as s,b as a,w as e,F as c,d as p,e as u}from"./app.762e1d31.js";const l={},r=p('<h1 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1><p>路由功能模块可以将入站数据按不同规则由不同的出站连接发出，以达到按需代理的目的。</p><p>如常见用法是分流国内外流量，Xray 可以通过内部机制判断不同地区的流量，然后将它们发送到不同的出站代理。</p><h2 id="routingobject" tabindex="-1"><a class="header-anchor" href="#routingobject" aria-hidden="true">#</a> RoutingObject</h2><p><code>RoutingObject</code> 对应配置文件的 <code>routing</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;balancers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot; | &quot;IPIfNonMatch&quot; | &quot;IPOnDemand&quot;</p></blockquote><p>域名解析策略，根据不同的设置使用不同的策略。</p><ul><li><code>&quot;AsIs&quot;</code>：只使用域名进行路由选择。默认值。</li><li><code>&quot;IPIfNonMatch&quot;</code>：当域名没有匹配任何规则时，将域名解析成 IP（A 记录或 AAAA 记录）再次进行匹配； <ul><li>当一个域名有多个 A 记录时，会尝试匹配所有的 A 记录，直到其中一个与某个规则匹配为止；</li><li>解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名；</li></ul></li><li><code>&quot;IPOnDemand&quot;</code>：当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配；</li></ul><blockquote><p><code>rules</code>: [<a href="#ruleobject">RuleObject</a>]</p></blockquote><p>对应一个数组，数组中每一项是一个规则。</p><p>对于每一个连接，路由将根据这些规则依次进行判断，当一个规则生效时，即将这个连接转发至它所指定的 <code>outboundTag</code>或 <code>balancerTag</code>。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>当没有匹配到任何规则时，流量默认由第一个 outbound 发出。</p></div><blockquote><p><code>balancers</code>: [ <a href="#balancerobject">BalancerObject</a> ]</p></blockquote><p>一个数组，数组中每一项是一个负载均衡器的配置。</p><p>当一个规则指向一个负载均衡器时，Xray 会通过此负载均衡器选出一个 outbound, 然后由它转发流量。</p><h3 id="ruleobject" tabindex="-1"><a class="header-anchor" href="#ruleobject" aria-hidden="true">#</a> RuleObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;baidu.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;qq.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0.0.0.0/8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10.0.0.0/8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fc00::/7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fe80::/10&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;53,443,1000-2000&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;sourcePort&quot;</span><span class="token operator">:</span> <span class="token string">&quot;53,443,1000-2000&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;10.0.0.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tag-vmess&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bittorrent&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;attrs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;attrs[&#39;:method&#39;] == &#39;GET&#39;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;balancerTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balancer&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="custom-container danger"><p class="custom-container-title">警告</p><p>当多个属性同时指定时，这些属性需要<strong>同时</strong>满足，才可以使当前规则生效。</p></div><blockquote><p><code>type</code>: &quot;field&quot;</p></blockquote><p>目前只支持<code>&quot;field&quot;</code>这一个选项。</p><blockquote><p><code>domain</code>: [string]</p></blockquote><p>一个数组，数组每一项是一个域名的匹配。有以下几种形式：</p>',23),i=p('<li>纯字符串：当此字符串匹配目标域名中任意部分，该规则生效。比如 &quot;sina.com&quot; 可以匹配 &quot;sina.com&quot;、&quot;sina.com.cn&quot; 和 &quot;www.sina.com&quot;，但不匹配 &quot;sina.cn&quot;。</li><li>正则表达式：由 <code>&quot;regexp:&quot;</code> 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 &quot;regexp:\\.goo.*\\.com$&quot; 匹配 &quot;www.google.com&quot; 或 &quot;fonts.googleapis.com&quot;，但不匹配 &quot;google.com&quot;。</li><li>子域名（推荐）：由 <code>&quot;domain:&quot;</code> 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 &quot;domain:xray.com&quot; 匹配 &quot;www.xray.com&quot;、&quot;xray.com&quot;，但不匹配 &quot;wxray.com&quot;。</li><li>完整匹配：由 <code>&quot;full:&quot;</code> 开始，余下部分是一个域名。当此域名完整匹配目标域名时，该规则生效。例如 &quot;full:xray.com&quot; 匹配 &quot;xray.com&quot; 但不匹配 &quot;www.xray.com&quot;。</li><li>预定义域名列表：由 <code>&quot;geosite:&quot;</code> 开头，余下部分是一个名称，如 <code>geosite:google</code> 或者 <code>geosite:cn</code>。名称及域名列表参考 <a href="#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E5%88%97%E8%A1%A8">预定义域名列表</a>。</li>',5),d=u("从文件中加载域名：形如 "),q=s("code",null,'"ext:file:tag"',-1),b=u("，必须以 "),k=s("code",null,"ext:",-1),g=u("（小写）开头，后面跟文件名和标签，文件存放在 "),m=u("资源目录"),h=u(" 中，文件格式与 "),f=s("code",null,"geosite.dat",-1),y=u(" 相同，标签必须在文件中存在。"),I=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"提示"),s("p",null,[s("code",null,'"ext:geoip.dat:cn"'),u(" 等价于 "),s("code",null,'"geoip:cn"')])],-1),j=s("blockquote",null,[s("p",null,[s("code",null,"ip"),u(": [string]")])],-1),v=s("p",null,"一个数组，数组内每一项代表一个 IP 范围。当某一项匹配目标 IP 时，此规则生效。有以下几种形式：",-1),x=s("li",null,[u("IP：形如 "),s("code",null,'"127.0.0.1"'),u("。")],-1),E={href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",target:"_blank",rel:"noopener noreferrer"},P=u("CIDR"),w=u("：形如 "),T=s("code",null,'"10.0.0.0/8"',-1),A=u("。"),B=p("<li>预定义 IP 列表：此列表预置于每一个 Xray 的安装包中，文件名为 <code>geoip.dat</code>。使用方式形如 <code>&quot;geoip:cn&quot;</code>，必须以 <code>geoip:</code>（小写）开头，后面跟双字符国家代码，支持几乎所有可以上网的国家。 <ul><li>特殊值：<code>&quot;geoip:private&quot;</code>，包含所有私有地址，如 <code>127.0.0.1</code>。</li></ul></li>",1),O=u("从文件中加载 IP：形如 "),R=s("code",null,'"ext:file:tag"',-1),D=u("，必须以 "),C=s("code",null,"ext:",-1),F=u("（小写）开头，后面跟文件名和标签，文件存放在 "),_=u("资源目录"),G=u(" 中，文件格式与 "),N=s("code",null,"geoip.dat",-1),S=u(" 相同标签必须在文件中存在。"),X=p('<blockquote><p><code>port</code>：number | string</p></blockquote><p>目标端口范围，有三种形式：</p><ul><li><code>&quot;a-b&quot;</code>：a 和 b 均为正整数，且小于 65536。这个范围是一个前后闭合区间，当目标端口落在此范围内时，此规则生效。</li><li><code>a</code>：a 为正整数，且小于 65536。当目标端口为 a 时，此规则生效。</li><li>以上两种形式的混合，以逗号 &quot;,&quot; 分隔。形如：<code>&quot;53,443,1000-2000&quot;</code>。</li></ul><blockquote><p><code>sourcePort</code>：number | string</p></blockquote><p>来源端口，有三种形式：</p><ul><li><code>&quot;a-b&quot;</code>：a 和 b 均为正整数，且小于 65536。这个范围是一个前后闭合区间，当目标端口落在此范围内时，此规则生效。</li><li><code>a</code>：a 为正整数，且小于 65536。当目标端口为 a 时，此规则生效。</li><li>以上两种形式的混合，以逗号 &quot;,&quot; 分隔。形如：<code>&quot;53,443,1000-2000&quot;</code>。</li></ul><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>可选的值有 &quot;tcp&quot;、&quot;udp&quot; 或 &quot;tcp,udp&quot;，当连接方式是指定的方式时，此规则生效。</p><blockquote><p><code>source</code>: [string]</p></blockquote><p>一个数组，数组内每一项代表一个 IP 范围，形式有 IP、CIDR、GeoIP 和从文件中加载 IP。当某一项匹配来源 IP 时，此规则生效。</p><blockquote><p><code>user</code>: [string]</p></blockquote><p>一个数组，数组内每一项是一个邮箱地址。当某一项匹配来源用户时，此规则生效。</p><blockquote><p><code>inboundTag</code>: [string]</p></blockquote><p>一个数组，数组内每一项是一个标识。当某一项匹配入站协议的标识时，此规则生效。</p><blockquote><p><code>protocol</code>: [ &quot;http&quot; | &quot;tls&quot; | &quot;bittorrent&quot; ]</p></blockquote><p>一个数组，数组内每一项表示一种协议。当某一个协议匹配当前连接的协议类型时，此规则生效。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>必须开启入站代理中的 <code>sniffing</code> 选项, 才能嗅探出连接所使用的协议类型.</p></div><blockquote><p><code>attrs</code>: string</p></blockquote><p>一段脚本，用于检测流量的属性值。当此脚本返回真值时，此规则生效。</p>',19),M=u("脚本语言为 "),H={href:"https://github.com/bazelbuild/starlark",target:"_blank",rel:"noopener noreferrer"},L=u("Starlark"),z=u("，它的语法是 Python 的子集。脚本接受一个全局变量 "),$=s("code",null,"attrs",-1),J=u("，其中包含了流量相关的属性。"),K=p('<p>目前只有 http 入站代理会设置这一属性。</p><p>示例：</p><ul><li>检测 HTTP GET：<code>&quot;attrs[&#39;:method&#39;] == &#39;GET&#39;&quot;</code></li><li>检测 HTTP Path：<code>&quot;attrs[&#39;:path&#39;].startswith(&#39;/test&#39;)&quot;</code></li><li>检测 Content Type：<code>&quot;attrs[&#39;accept&#39;].index(&#39;text/html&#39;) &gt;= 0&quot;</code></li></ul><blockquote><p><code>outboundTag</code>: string</p></blockquote><p>对应一个 outbound 的标识。</p><blockquote><p><code>balancerTag</code>: string</p></blockquote><p>对应一个 Balancer 的标识。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>balancerTag</code> 和 <code>outboundTag</code> 须二选一。当同时指定时，<code>outboundTag</code> 生效。</p></div><h3 id="balancerobject" tabindex="-1"><a class="header-anchor" href="#balancerobject" aria-hidden="true">#</a> BalancerObject</h3><p>负载均衡器配置。当一个负载均衡器生效时，它会从指定的 outbound 中，按配置选出一个最合适的 outbound，进行流量转发。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balancer&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>此负载均衡器的标识，用于匹配 <code>RuleObject</code> 中的 <code>balancerTag</code>。</p><blockquote><p><code>selector</code>: [ string ]</p></blockquote><p>一个字符串数组，其中每一个字符串将用于和 outbound 标识的前缀匹配。在以下几个 outbound 标识中：<code>[ &quot;a&quot;, &quot;ab&quot;, &quot;c&quot;, &quot;ba&quot; ]</code>，<code>&quot;selector&quot;: [&quot;a&quot;]</code> 将匹配到 <code>[ &quot;a&quot;, &quot;ab&quot; ]</code>。</p><p>如果匹配到多个 outbound，负载均衡器目前会从中随机选出一个作为最终的 outbound。</p><h3 id="预定义域名列表" tabindex="-1"><a class="header-anchor" href="#预定义域名列表" aria-hidden="true">#</a> 预定义域名列表</h3><p>此列表预置于每一个 Xray 的安装包中，文件名为 <code>geosite.dat</code>。这个文件包含了一些常见的域名，使用方式：<code>geosite:filename</code>，如 <code>geosite:google</code> 表示对文件内符合 <code>google</code> 内包含的域名，进行路由筛选或 DNS 筛选。</p><p>常见的域名有：</p><ul><li><code>category-ads</code>：包含了常见的广告域名。</li><li><code>category-ads-all</code>：包含了常见的广告域名，以及广告提供商的域名。</li><li><code>cn</code>：相当于 <code>geolocation-cn</code> 和 <code>tld-cn</code> 的合集。</li><li><code>apple</code>：包含了 Apple 旗下绝大部分域名。</li><li><code>google</code>：包含了 Google 旗下绝大部分域名。</li><li><code>microsoft</code>：包含了 Microsoft 旗下绝大部分域名。</li><li><code>facebook</code>：包含了 Facebook 旗下绝大部分域名。</li><li><code>twitter</code>：包含了 Twitter 旗下绝大部分域名。</li><li><code>telegram</code>：包含了 Telegram 旗下绝大部分域名。</li><li><code>geolocation-cn</code>：包含了常见的大陆站点域名。</li><li><code>geolocation-!cn</code>：包含了常见的非大陆站点域名，同时包含了 <code>tld-!cn</code>。</li><li><code>tld-cn</code>：包含了 CNNIC 管理的用于中国大陆的顶级域名，如以 <code>.cn</code>、<code>.中国</code> 结尾的域名。</li><li><code>tld-!cn</code>：包含了非中国大陆使用的顶级域名，如以 <code>.hk</code>（香港）、<code>.tw</code>（台湾）、<code>.jp</code>（日本）、<code>.sg</code>（新加坡）、<code>.us</code>（美国）<code>.ca</code>（加拿大）等结尾的域名。</li></ul>',20);l.render=function(p,u){const l=o("RouterLink"),Q=o("OutboundLink");return n(),t(c,null,[r,s("ul",null,[i,s("li",null,[d,q,b,k,g,a(l,{to:"/config/features/env.html#%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84"},{default:e((()=>[m])),_:1}),h,f,y])]),I,j,v,s("ul",null,[x,s("li",null,[s("a",E,[P,a(Q)]),w,T,A]),B,s("li",null,[O,R,D,C,F,a(l,{to:"/config/features/env.html#%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84"},{default:e((()=>[_])),_:1}),G,N,S])]),X,s("p",null,[M,s("a",H,[L,a(Q)]),z,$,J]),K],64)};export default l;
