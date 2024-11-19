import{_ as s,c as a,G as i,b as e}from"./chunks/framework.DttWr7at.js";const n=JSON.parse('{"title":"新玩具 - 部署无名大佬的 VitePress 主题博客","description":"作者的仓库和博客只介绍了本地部署和 vercel 部署两种方式，是否可以部署到 github pages 和 cf pages 呢？答案是可以的！","frontmatter":{"title":"新玩具 - 部署无名大佬的 VitePress 主题博客","filename":110301,"tags":["blog","cloudflare","github"],"categories":["技术分享","前端建站"],"date":"2024-11-03T00:00:00.000Z","description":"作者的仓库和博客只介绍了本地部署和 vercel 部署两种方式，是否可以部署到 github pages 和 cf pages 呢？答案是可以的！","articleGPT":"这段内容提供了一个详细的指南，介绍如何将名为vitepress-theme-curve的VitePress主题博客部署到GitHub Pages和Cloudflare Pages。步骤包括从模板复制仓库、设置仓库名称和权限、配置GitHub Actions以及绑定自定义域名。同时，也提供了关于如何在Cloudflare Pages上部署的两种方法。文档最后提到了一些需要用户自行修改的设置文件，以及提供了作者博客的链接，用户可以查阅更多相关设置的指南。","top":true,"share":true,"delete":false,"head":[["link",{"rel":"canonical","href":"https://blog.24811213.xyz/posts/2024-11/110301"}]]},"headers":[],"relativePath":"posts/2024-11/110301.md","filePath":"posts/2024-11/110301.md","lastUpdated":1732001180000}');const l=s({name:"posts/2024-11/110301.md"},[["render",function(s,n,l,t,p,h){return e(),a("div",null,n[0]||(n[0]=[i('<h1 id="新玩具-部署无名大佬的-vitepress-主题博客" tabindex="-1">新玩具 - 部署无名大佬的 VitePress 主题博客 <a class="header-anchor" href="#新玩具-部署无名大佬的-vitepress-主题博客" aria-label="Permalink to &quot;新玩具 - 部署无名大佬的 VitePress 主题博客&quot;">​</a></h1><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to &quot;相关资源&quot;">​</a></h2><p>官方仓库：<a href="https://github.com/imsyy/vitepress-theme-curve" target="_blank" rel="noreferrer">GitHub - imsyy/vitepress-theme-curve: 一个极简的 VitePress 主题</a></p><p>博客教程：<a href="https://blog.imsyy.top/posts/2024/0320" target="_blank" rel="noreferrer">作者原教程</a></p><p>作者的仓库和博客只介绍了 <code>本地部署</code> 和 <code>vercel 部署</code> 两种方式，是否可以部署到 <code>github pages</code> 和 <code>cf pages</code> 呢？答案是可以的！</p><p>部署完成后的演示站点：<a href="https://blog.24811213.xyz/" target="_blank" rel="noreferrer">九天之上</a></p><h2 id="部署到-git-pages" tabindex="-1">部署到 git pages <a class="header-anchor" href="#部署到-git-pages" aria-label="Permalink to &quot;部署到 git pages&quot;">​</a></h2><h3 id="一-使用模板复制-我的仓库" tabindex="-1">一. 使用模板复制 <a href="https://github.com/yutian81/" target="_blank" rel="noreferrer">我的仓库</a> <a class="header-anchor" href="#一-使用模板复制-我的仓库" aria-label="Permalink to &quot;一. 使用模板复制 [我的仓库](https://github.com/yutian81/)&quot;">​</a></h3><blockquote><p>注意：点击右上角的 <code>use this template</code> ，而不是 fork，fork 后会跟我的仓库同步，我在仓库中推送的文章会更新到你的博客。仓库 <code>必须是公开库</code>，否则构建的站点无法访问。</p></blockquote><p><a class="img-fancybox" href="https://pan.811520.xyz/2024-11/1730619531-image.webp" data-fancybox="gallery" data-caption="image.png"><img class="post-img" src="https://pan.811520.xyz/2024-11/1730619531-image.webp" alt="image.png" loading="lazy"><span class="post-img-tip">image.png</span></a></p><h3 id="二-设置仓库" tabindex="-1">二. 设置仓库 <a class="header-anchor" href="#二-设置仓库" aria-label="Permalink to &quot;二. 设置仓库&quot;">​</a></h3><ul><li>将仓库改名为 <code>你的用户名.github.io</code></li><li>将仓库的 <code>action 权限</code> 设置为 <code>可读写</code>，不清楚的可自行 gpt 解决</li><li>将 <code>.vitepress/theme/assets/themeConfig.mjs</code> 文件复制一份到仓库根目录，这是主题配置文件</li></ul><h3 id="三-配置-github-action" tabindex="-1">三. 配置 github action <a class="header-anchor" href="#三-配置-github-action" aria-label="Permalink to &quot;三. 配置 github action&quot;">​</a></h3><ul><li>打开 <code>.github/workflows/deploy-pages.yml</code> 文件，修改其中两个地方：(如果你是复制我的仓库，已经自带这个文件；如果你是 fork 原作者的仓库，需要手动新建这个文件，文件完整内容 <a href="https://github.com/yutian81/yutian81.github.io/blob/main/.github/workflows/deploy-pages.yml" target="_blank" rel="noreferrer">请看这里</a>)</li></ul><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">   REPO_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yutian81/yutian81.github.io&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 改为你自己的仓库  </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">   BUILD_PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.vitepress/dist&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 构建输出路径，不要改  </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">   CUSTOM_DOMAIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blog.24811213.xyz&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 改为你自己的自定义域名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>手动运行 Deploy to GitHub Pages 工作流</li></ul><p><a class="img-fancybox" href="https://pan.811520.xyz/2024-11/1730620765-image.webp" data-fancybox="gallery" data-caption="image.png"><img class="post-img" src="https://pan.811520.xyz/2024-11/1730620765-image.webp" alt="image.png" loading="lazy"><span class="post-img-tip">image.png</span></a></p><ul><li>运行完成后，会自动在仓库内生成一个 <code>pages 分支</code>，这就是我们部署后的 <code>静态页面</code> 文件。生成了这个分支就证明部署成功了。访问 <code>https://你的用户名.github.io</code> 即可访问博客首页</li></ul><p><a class="img-fancybox" href="https://pan.811520.xyz/2024-11/1730620832-image.webp" data-fancybox="gallery" data-caption="image.png"><img class="post-img" src="https://pan.811520.xyz/2024-11/1730620832-image.webp" alt="image.png" loading="lazy"><span class="post-img-tip">image.png</span></a></p><ul><li>进入仓库的 <code>设置</code> 页，点击左侧 <code>pages</code>，下图序号 <code>3</code> 这里选择 <code>pages 分支</code>，点击 <code>保存</code></li></ul><p><a class="img-fancybox" href="https://pan.811520.xyz/2024-11/1730620958-image.webp" data-fancybox="gallery" data-caption="image.png"><img class="post-img" src="https://pan.811520.xyz/2024-11/1730620958-image.webp" alt="image.png" loading="lazy"><span class="post-img-tip">image.png</span></a></p><ul><li>在这个页面往下拉，绑定你的 <code>自定义域名</code>，这个域名要跟你在上面 <code>action中设定的域名</code> 完全一样。然后在 <code>cf</code> 中新增一个 <code>cname</code> 记录，记录值为 <code>你的用户名.github.io</code> 。等待几分钟，等待 dns 生效，然后访问 <code>https://自定义域名</code> 即可访问博客首页</li></ul><p><a class="img-fancybox" href="https://pan.811520.xyz/2024-11/1730621091-image.webp" data-fancybox="gallery" data-caption="image.png"><img class="post-img" src="https://pan.811520.xyz/2024-11/1730621091-image.webp" alt="image.png" loading="lazy"><span class="post-img-tip">image.png</span></a></p><blockquote><p>git pages 部署方式要求仓库必须为 <code>公开库</code>。如果你对此很介意，那么可以部署到 cf pages，私有仓库也不影响</p></blockquote><h2 id="部署到-cf-pages" tabindex="-1">部署到 cf pages <a class="header-anchor" href="#部署到-cf-pages" aria-label="Permalink to &quot;部署到 cf pages&quot;">​</a></h2><p>首先在 <code>cf</code> 新建一个 <code>pages</code> 项目，链接到你的博客仓库项目，也就是 <code>你的用户名.github.io</code> 仓库。然后有 <code>两种方式</code> 可以实现博客的部署：</p><h3 id="方法一" tabindex="-1">方法一 <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一&quot;">​</a></h3><ul><li>链接到博客仓库项目后，选择仓库的 <code>pages 分支</code>，直接以默认值部署，部署完成后就可以访问了</li><li>部署完成后将公开库 <code>改为私有</code></li></ul><h3 id="方法二" tabindex="-1">方法二 <a class="header-anchor" href="#方法二" aria-label="Permalink to &quot;方法二&quot;">​</a></h3><ul><li>链接到博客仓库项目后，选择仓库的 <code>main 分支</code></li><li>构建命令 ：<code>npm run build</code></li><li>构建输出目录：<code>.vitepress/dist</code></li><li>其他保持默认，点击部署，完成后就可以访问</li><li>部署完成后将公开库 <code>改为私有</code></li></ul><h2 id="博客设置说明" tabindex="-1">博客设置说明 <a class="header-anchor" href="#博客设置说明" aria-label="Permalink to &quot;博客设置说明&quot;">​</a></h2><blockquote><p>以下文件请自行修改（修改前 <code>注意备份</code>）</p></blockquote><ul><li>你复制到根目录的 <code>themeConfig.mjs</code> 为 <code>主题</code> 配置文件</li><li><code>.vitepress/theme/assets/linkData.mjs</code> 是 <code>友链</code> 数据</li><li><code>.vitepress/theme/views/About.vue</code> 是 <code>关于</code> 页面的设置</li><li><code>.vitepress/theme/views/Project.vue</code> 我的 <code>项目</code> 页面设置</li><li><code>.vitepress/theme/views/</code> 内的 <code>vue</code> 文件都可以自行修改</li></ul><p>更多设置请去 <code>无名大佬</code> 的 <a href="https://blog.imsyy.top/" target="_blank" rel="noreferrer">博客</a> 查阅相关文章</p><ul><li>md 头部 <code>front matter</code> 信息示例</li></ul><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 文章标题  </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你使用 ob 的 Github Publisher 插件，则需要定义 filename 字段  </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 它表示的是文件名，即：110301.md，该博客只能使用纯数字的文件名，否则发布会失败  </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># filename 字段的优点：即便你在ob中定义的文件名是 中文名.md，发布到 git 时会自动变为 数字.md  </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">110301</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:    </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">blog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cloudflare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">github</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">categories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:    </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">前端建站</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024-11-03</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">作者的仓库和博客只介绍了本地部署和 vercel 部署两种方式，是否可以部署到 github pages 和 cf pages 呢？答案是可以的！</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">articleGPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">这段内容提供了一个详细的指南，介绍如何将名为vitepress-theme-curve的VitePress主题博客部署到GitHub Pages和Cloudflare Pages。步骤包括从模板复制仓库、设置仓库名称和权限、配置GitHub Actions以及绑定自定义域名。同时，也提供了关于如何在Cloudflare Pages上部署的两种方法。文档最后提到了一些需要用户自行修改的设置文件，以及提供了作者博客的链接，用户可以查阅更多相关设置的指南。</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 参考文档，非必须。title是参考文档的标题，url是链接  </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:     </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:     </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 置顶参数  </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">share</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # ob 的 Github Publisher 插件需要的字段，true 即为需要发布  </span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # ob 的 Github Publisher 插件需要的字段，false 表示不删除  </span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',36)]))}]]);export{n as __pageData,l as default};
