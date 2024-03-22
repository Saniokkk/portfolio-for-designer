"use strict";(()=>{var e={};e.id=717,e.ids=[717],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7914:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>x,originalPathname:()=>M,patchFetch:()=>$,requestAsyncStorage:()=>v,routeModule:()=>g,serverHooks:()=>h,staticGenerationAsyncStorage:()=>w,staticGenerationBailout:()=>A});var n={};r.r(n),r.d(n,{default:()=>f});var o={};r.r(o),r.d(o,{GET:()=>y});var a=r(5419),i=r(9108),l=r(9678),s=r(9647);let u="https://my-site.com.ua";function f(){return[{url:u,lastModified:new Date,changeFrequency:"weekly",priority:1},{url:`${u}`,lastModified:new Date,changeFrequency:"weekly",priority:.8},{url:`${u}`,lastModified:new Date,changeFrequency:"weekly",priority:.8},{url:`${u}`,lastModified:new Date,changeFrequency:"weekly",priority:.8}]}var p=r(7252);let c={...n},d=c.default,m=c.generateSitemaps;if("function"!=typeof d)throw Error('Default export is missing in "E:\\freelance\\portfolio-for-designer\\app\\sitemap.js"');async function y(e,t){let r;let{__metadata_id__:n=[],...o}=t.params||{},a=n[0],i=m?await m():null;if(i&&null==(r=i.find(e=>e.id.toString()===a)?.id))return new s.NextResponse("Not Found",{status:404});let l=await d({id:r}),u=(0,p.resolveRouteData)(l,"sitemap");return new s.NextResponse(u,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}let g=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&isDynamic=1!E:\\freelance\\portfolio-for-designer\\app\\sitemap.js?__next_metadata_route__",nextConfigOutput:"",userland:o}),{requestAsyncStorage:v,staticGenerationAsyncStorage:w,serverHooks:h,headerHooks:x,staticGenerationBailout:A}=g,M="/sitemap.xml/route";function $(){return(0,l.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:w})}},7252:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{resolveRobots:function(){return o},resolveSitemap:function(){return a},resolveManifest:function(){return i},resolveRouteData:function(){return l}});let n=r(9926);function o(e){let t="";for(let r of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,n.resolveArray)(r.userAgent||["*"]))t+=`User-Agent: ${e}
`;if(r.allow)for(let e of(0,n.resolveArray)(r.allow))t+=`Allow: ${e}
`;if(r.disallow)for(let e of(0,n.resolveArray)(r.disallow))t+=`Disallow: ${e}
`;r.crawlDelay&&(t+=`Crawl-delay: ${r.crawlDelay}
`),t+="\n"}return e.host&&(t+=`Host: ${e.host}
`),e.sitemap&&(0,n.resolveArray)(e.sitemap).forEach(e=>{t+=`Sitemap: ${e}
`}),t}function a(e){let t="";for(let r of(t+='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n',e)){if(t+=`<url>
<loc>${r.url}</loc>
`,r.lastModified){let e=r.lastModified instanceof Date?r.lastModified.toISOString():r.lastModified;t+=`<lastmod>${e}</lastmod>
`}r.changeFrequency&&(t+=`<changefreq>${r.changeFrequency}</changefreq>
`),"number"==typeof r.priority&&(t+=`<priority>${r.priority}</priority>
`),t+="</url>\n"}return t+"</urlset>\n"}function i(e){return JSON.stringify(e)}function l(e,t){return"robots"===t?o(e):"sitemap"===t?a(e):"manifest"===t?i(e):""}},9926:(e,t)=>{function r(e){return Array.isArray(e)?e:[e]}function n(e){if(null!=e)return r(e)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{resolveAsArrayOrUndefined:function(){return n},resolveArray:function(){return r}})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,266],()=>r(7914));module.exports=n})();