import{_ as a,c as n,V as o,o as l}from"./chunks/framework.e4e74dcf.js";const B=JSON.parse('{"title":"Synchronization server","description":"Instructions for installing the synchronization server.","frontmatter":{"title":"Synchronization server","description":"Instructions for installing the synchronization server.","footer":false},"headers":[],"relativePath":"dev/sync-server/index.md","filePath":"dev/sync-server/index.md","lastUpdated":1727630206000,"breadcrumbs":[{"text":"For developers","items":[{"text":"Contribute","link":"/dev/contribute/"},{"text":"Parsers library","link":"/dev/parsers-library/"},{"text":"Synchronization server","link":"/dev/sync-server/"},{"text":"External plugins SDK","link":"/dev/plugin-sdk/"}]},{"text":"Synchronization server","link":"/dev/sync-server/"}]}'),e={name:"dev/sync-server/index.md"};function p(t,s,r,c,y,i){return l(),n("div",null,s[0]||(s[0]=[o(`<h1 id="synchronization-server" tabindex="-1">Synchronization server <a class="header-anchor" href="#synchronization-server" aria-label="Permalink to &quot;Synchronization server&quot;">​</a></h1><p>Instructions for installing the synchronization server.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h3><p>Build image container:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">build</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">github.com/KotatsuApp/kotatsu-syncserver.git</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-t</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">kotatsuapp/syncserver</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github.com/KotatsuApp/kotatsu-syncserver.git</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kotatsuapp/syncserver</span></span></code></pre></div><p>Run container:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">run</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-d</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-p</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">8081</span><span style="color:#98C379;">:8080</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">DATABASE_HOST=your_db_host</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">DATABASE_USER=your_db_user</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">DATABASE_PASSWORD=your_db_password</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">DATABASE_NAME=your_db_name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">DATABASE_PORT=your_db_port</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">JWT_SECRET=your_secret</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">--restart </span><span style="color:#98C379;">always</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">--name </span><span style="color:#98C379;">kotatsu-sync</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">kotatsuapp/syncserver</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8081</span><span style="color:#032F62;">:8080</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-e </span><span style="color:#032F62;">DATABASE_HOST=your_db_host</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-e </span><span style="color:#032F62;">DATABASE_USER=your_db_user</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-e </span><span style="color:#032F62;">DATABASE_PASSWORD=your_db_password</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-e </span><span style="color:#032F62;">DATABASE_NAME=your_db_name</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-e </span><span style="color:#032F62;">DATABASE_PORT=your_db_port</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-e </span><span style="color:#032F62;">JWT_SECRET=your_secret</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">--restart </span><span style="color:#032F62;">always</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">--name </span><span style="color:#032F62;">kotatsu-sync</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kotatsuapp/syncserver</span></span></code></pre></div><h3 id="systemd" tabindex="-1">Systemd <a class="header-anchor" href="#systemd" aria-label="Permalink to &quot;Systemd&quot;">​</a></h3><p>Requirements:</p><ul><li>JDK 11+</li><li>Gradle 7.0+</li></ul><p>Commands:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">clone</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">https://github.com/KotatsuApp/kotatsu-syncserver.git</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">kotatsu-syncserver</span><span style="color:#ABB2BF;"> &amp;&amp; </span><span style="color:#61AFEF;">./gradlew</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">shadowJar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/KotatsuApp/kotatsu-syncserver.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kotatsu-syncserver</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">./gradlew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shadowJar</span></span></code></pre></div><p>Then edit file <code>kotatsu-sync.service</code>, change <code>replaceme</code> fields with your values and specify the <code>kotatsu-syncserver-0.0.1.jar</code> file location (it can be found in <code>build/libs</code> directory after buliding)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#61AFEF;">cp</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">kotatsu-sync.service</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">/etc/systemd/system</span></span>
<span class="line"><span style="color:#61AFEF;">systemctl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">enable</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">kotatsu-sync</span></span>
<span class="line"><span style="color:#61AFEF;">systemctl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">daemon-reload</span></span>
<span class="line"><span style="color:#61AFEF;">systemctl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">start</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">kotatsu-sync</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kotatsu-sync.service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/systemd/system</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kotatsu-sync</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">daemon-reload</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kotatsu-sync</span></span></code></pre></div><p>For any questions, please, contact us in <a href="https://t.me/kotatsuapp" target="_blank" rel="noreferrer">Telegram group</a> or write an issue, thanks.</p>`,16)]))}const u=a(e,[["render",p]]);export{B as __pageData,u as default};