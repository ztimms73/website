import{_ as a,c as e,V as n,o}from"./chunks/framework.e4e74dcf.js";const h=JSON.parse('{"title":"Parsers library","description":"Instructions for using the Kotatsu parser library.","frontmatter":{"title":"Parsers library","description":"Instructions for using the Kotatsu parser library.","footer":false},"headers":[],"relativePath":"dev/parsers-library/index.md","filePath":"dev/parsers-library/index.md","lastUpdated":1727630206000,"breadcrumbs":[{"text":"For developers","items":[{"text":"Contribute","link":"/dev/contribute/"},{"text":"Parsers library","link":"/dev/parsers-library/"},{"text":"Synchronization server","link":"/dev/sync-server/"},{"text":"External plugins SDK","link":"/dev/plugin-sdk/"}]},{"text":"Parsers library","link":"/dev/parsers-library/"}]}'),t={name:"dev/parsers-library/index.md"};function r(l,s,p,i,c,d){return o(),e("div",null,s[0]||(s[0]=[n(`<h1 id="kotatsu-parsers" tabindex="-1">Kotatsu parsers <a class="header-anchor" href="#kotatsu-parsers" aria-label="Permalink to &quot;Kotatsu parsers&quot;">​</a></h1><p>This library provides manga sources.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add it to your root <code>build.gradle</code> at the end of repositories:</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki one-dark-pro has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">allprojects {</span></span>
<span class="line"><span style="color:#ABB2BF;">	repositories {</span></span>
<span class="line"><span style="color:#ABB2BF;">		...</span></span>
<span class="line has-focus highlighted"><span style="color:#ABB2BF;">		maven { url </span><span style="color:#98C379;">&#39;https://jitpack.io&#39;</span><span style="color:#ABB2BF;"> }  </span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">allprojects {</span></span>
<span class="line"><span style="color:#24292E;">	repositories {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">		maven { url </span><span style="color:#032F62;">&#39;https://jitpack.io&#39;</span><span style="color:#24292E;"> }  </span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Add the dependency</p><div class="tip custom-block"><p class="custom-block-title">For Java/Kotlin project:</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">dependencies {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">implementation</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;com.github.KotatsuApp:kotatsu-parsers:</span><span style="color:#E06C75;">$parsers_version</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dependencies {</span></span>
<span class="line"><span style="color:#24292E;">    implementation(</span><span style="color:#032F62;">&quot;com.github.KotatsuApp:kotatsu-parsers:</span><span style="color:#24292E;">$parsers_version</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">For Android project:</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">dependencies {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">implementation</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;com.github.KotatsuApp:kotatsu-parsers:</span><span style="color:#E06C75;">$parsers_version</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        exclude </span><span style="color:#D19A66;">group</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;org.json&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">module</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;json&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dependencies {</span></span>
<span class="line"><span style="color:#24292E;">    implementation(</span><span style="color:#032F62;">&quot;com.github.KotatsuApp:kotatsu-parsers:</span><span style="color:#24292E;">$parsers_version</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        exclude </span><span style="color:#005CC5;">group</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;org.json&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">module</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;json&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div><p>Versions are available on <a href="https://jitpack.io/#KotatsuApp/kotatsu-parsers" target="_blank" rel="noreferrer">JitPack</a></p><p>When used in Android projects, <a href="https://developer.android.com/studio/write/java8-support#library-desugaring" target="_blank" rel="noreferrer">core library desugaring</a> with the <a href="https://developer.android.com/studio/write/java11-nio-support-table" target="_blank" rel="noreferrer">NIO specification</a> should be enabled to support Java 8+ features.</p><div class="tip custom-block"><p class="custom-block-title">Usage in code</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">val</span><span style="color:#ABB2BF;"> parser </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> mangaLoaderContext.</span><span style="color:#61AFEF;">newParserInstance</span><span style="color:#ABB2BF;">(MangaParserSource.MANGADEX)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">val</span><span style="color:#24292E;"> parser </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mangaLoaderContext.</span><span style="color:#6F42C1;">newParserInstance</span><span style="color:#24292E;">(MangaParserSource.MANGADEX)</span></span></code></pre></div></div><p><code>mangaLoaderContext</code> is an implementation of the <code>MangaLoaderContext</code> class.</p><p>See examples of <a href="https://github.com/KotatsuApp/Kotatsu/blob/devel/app/src/main/kotlin/org/koitharu/kotatsu/core/parser/MangaLoaderContextImpl.kt" target="_blank" rel="noreferrer">Android</a> and <a href="https://github.com/KotatsuApp/kotatsu-dl/blob/master/src/jvmMain/kotlin/org/koitharu/kotatsu_dl/logic/MangaLoaderContextImpl.kt" target="_blank" rel="noreferrer">Non-Android</a> implementation.</p><p>Note that the <code>MangaParserSource.DUMMY</code> parsers cannot be instantiated.</p><h2 id="projects-that-use-the-library" tabindex="-1">Projects that use the library <a class="header-anchor" href="#projects-that-use-the-library" aria-label="Permalink to &quot;Projects that use the library&quot;">​</a></h2><ul><li><a href="https://github.com/KotatsuApp/Kotatsu" target="_blank" rel="noreferrer">Kotatsu</a></li><li><a href="https://github.com/KotatsuApp/kotatsu-dl" target="_blank" rel="noreferrer">kotatsu-dl</a></li><li><a href="https://github.com/ztimms73/shirizu" target="_blank" rel="noreferrer">Shirizu (WIP)</a></li><li><a href="https://github.com/jakepurple13/OtakuWorld" target="_blank" rel="noreferrer">OtakuWorld</a></li></ul><h2 id="contribution" tabindex="-1">Contribution <a class="header-anchor" href="#contribution" aria-label="Permalink to &quot;Contribution&quot;">​</a></h2><p>Check <a href="/dev/contribute/#parsers-contribution-guidelines">here</a> for the guidelines.</p><h2 id="dmca-disclaimer" tabindex="-1">DMCA disclaimer <a class="header-anchor" href="#dmca-disclaimer" aria-label="Permalink to &quot;DMCA disclaimer&quot;">​</a></h2><p>The developers of this application have no affiliation with the content available in the app. It is collected from sources freely available through any web browser.</p>`,20)]))}const y=a(t,[["render",r]]);export{h as __pageData,y as default};