import{_ as s,c as n,o as a,a as o}from"./app.7a3cca95.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u5E94\u7528/\u6269\u5C55\u7A0B\u5E8F","slug":"\u521B\u5EFA\u5E94\u7528-\u6269\u5C55\u7A0B\u5E8F","link":"#\u521B\u5EFA\u5E94\u7528-\u6269\u5C55\u7A0B\u5E8F","children":[{"level":3,"title":"1. \u6784\u5EFA\u5E94\u7528/\u6269\u5C55\u7A0B\u5E8F","slug":"_1-\u6784\u5EFA\u5E94\u7528-\u6269\u5C55\u7A0B\u5E8F","link":"#_1-\u6784\u5EFA\u5E94\u7528-\u6269\u5C55\u7A0B\u5E8F","children":[]}]}],"relativePath":"chrome/extension/start.md","lastUpdated":1669627001000}'),l={name:"chrome/extension/start.md"},p=o(`<h2 id="\u521B\u5EFA\u5E94\u7528-\u6269\u5C55\u7A0B\u5E8F" tabindex="-1">\u521B\u5EFA\u5E94\u7528/\u6269\u5C55\u7A0B\u5E8F <a class="header-anchor" href="#\u521B\u5EFA\u5E94\u7528-\u6269\u5C55\u7A0B\u5E8F" aria-hidden="true">#</a></h2><p><a href="https://developer.chrome.com/docs/extensions/" target="_blank" rel="noreferrer">Chrome Documentation</a></p><h3 id="_1-\u6784\u5EFA\u5E94\u7528-\u6269\u5C55\u7A0B\u5E8F" tabindex="-1">1. \u6784\u5EFA\u5E94\u7528/\u6269\u5C55\u7A0B\u5E8F <a class="header-anchor" href="#_1-\u6784\u5EFA\u5E94\u7528-\u6269\u5C55\u7A0B\u5E8F" aria-hidden="true">#</a></h3><ul><li>\u521B\u5EFAJSON\u6587\u4EF6<br> \u4F8B\uFF1AHello Extensions manifest.json</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">manifest_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello Extensions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Base Level Extension</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">action</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">default_popup</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">default_icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello_extensions.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u521B\u5EFA128*128\u50CF\u7D20\u5FBD\u6807</li><li>\u6269\u5C55\u7A0B\u5E8F\u4E2D\u9009\u62E9\u5F00\u53D1\u8005\u6A21\u5F0F\uFF0C\u52A0\u8F7D\u5DF2\u89E3\u538B\u7684\u6269\u5C55\u7A0B\u5E8F\u5373\u53EF\u4F7F\u7528\u63D2\u4EF6</li><li>\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B</li></ul><blockquote><p>HelloExtensions</p><blockquote><p>hello.html<br> hello_extensions.png<br> manifest.json</p></blockquote></blockquote>`,7),e=[p];function t(c,r,D,F,y,i){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{u as __pageData,A as default};
