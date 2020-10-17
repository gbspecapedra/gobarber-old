<div id="readme" class="Box-body readme blob js-code-block-container">
  <article class="markdown-body entry-content p-3 p-md-6" itemprop="text">
    <p align="center"><img alt="logo-gobarber-purple" src=""></p>
    <p align="center">Beauty service scheduling application</p>
    <p align="center">
      <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gisabernardess/gobarber-old">
      <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gisabernardess/gobarber-old">
      <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/gisabernardess/gobarber-old">
      <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gisabernardess/gobarber-old">
      <img alt="Github license" src="https://img.shields.io/github/license/gisabernardess/gobarber-old">
    </p>
    <p align="center">
      <img alt="gobarber-web" src="" style="max-width:100%;">
    </p>
    <h2>:speech_balloon: Project</h2>
    <p>GoBarber is an application that allows appointments for beauty services. This project was developed at the <a href="https://rocketseat.com.br/bootcamp" rel="nofollow">GoStack
        Bootcamp</a>, which is a complete application (backend, frontend and mobile).</p>
    <h2>:rocket: Technologies</h2>
    <ul>
      <li><a href="https://nodejs.org/" rel="nofollow">Node.js</a></li>
      <li><a href="https://reactjs.org/" rel="nofollow">React.js</a></li>
      <li><a href="https://reactnative.dev/" rel="nofollow">React Native</a></li>
    </ul>
    <h2>:bookmark: Layout</h2>
    <p>You can view the layout of the project in the <a href="https://www.figma.com/file/U57uzB0AN2Q00TFKffY7Pt/GoBarberOld" rel="nofollow">web</a> version. You need to have a <a href="https://www.figma.com/" rel="nofollow">Figma</a> account to access it.</p>
    <h2>:information_source: How To Use</h2>
    <p>To clone and run this application, you'll need <a href="https://git-scm.com" rel="nofollow">Git</a> + <a href="https://legacy.yarnpkg.com" rel="nofollow">Yarn</a> + <a
        href="https://nodejs.org/" rel="nofollow">Node.js</a> + <a href="https://docs.docker.com/install/linux/docker-ce/ubuntu/" rel="nofollow">Docker</a> with <a href="https://hub.docker.com/_/postgres" rel="nofollow">PostgreSQL</a> + <a href="https://hub.docker.com/_/mongo" rel="nofollow">MongoDB</a> + <a href="https://hub.docker.com/_/redis" rel="nofollow">Redis:alpine</a>. From your command line:</p>
    <div class="highlight highlight-source-shell">
      <pre><span class="pl-c"><span class="pl-c">#</span> Clone this repository</span>
$ git clone https://github.com/gisabernardess/gobarber-old</pre>
    </div>
  <h4>:gear: Backend</h4>
    <div class="highlight highlight-source-shell">
      <pre><span class="pl-c"><span class="pl-c"><span class="pl-c">#</span> Go into the repository</span>
$ <span class="pl-c1">cd</span> gobarber-old/server <br/>
<span class="pl-c"><span class="pl-c">#</span> Install dependencies</span>
$ yarn <br/>
<span class="pl-c"><span class="pl-c">#</span> Start docker container for Postgres</span>
$ docker start database <br/>
<span class="pl-c"><span class="pl-c">#</span> Start docker container for MongoDB</span>
$ docker start mongobarber <br/>
<span class="pl-c"><span class="pl-c">#</span> Start docker container for Redis</span>
$ docker start redisbarber <br/>
<span class="pl-c"><span class="pl-c">#</span> Create the .env file in the repository using the sample file .env.example</span><br/>
<span class="pl-c"><span class="pl-c">#</span> Run the development server</span>
$ yarn start <br/>
<span class="pl-c"><span class="pl-c">#</span> Run the mail jobs</span>
$ yarn queue <br/>
<span class="pl-c"><span class="pl-c">#</span> Run the migrations</span>
$ yarn sequelize db:migrate <br/>
<span class="pl-c"><span class="pl-c">#</span> The app will automatically reload if you change any of the source files.</span></pre>
    </div>
      <h4>:desktop_computer: Frontend </h4>
    <div class="highlight highlight-source-shell">
      <pre><span class="pl-c"><span class="pl-c">#</span> Go into the repository</span> 
$ <span class="pl-c1">cd</span> gobarber-old/web <br/>
<span class="pl-c"><span class="pl-c">#</span> Install dependencies</span>
$ yarn <br/>
<span class="pl-c"><span class="pl-c">#</span> Run the development server</span>
$ yarn start <br/>
<span class="pl-c"><span class="pl-c">#</span> Navigate to http://localhost:3000</span>
<span class="pl-c"><span class="pl-c">#</span> The app will automatically reload if you change any of the source files.</span></pre>
</div>
    <h4>:iphone: Mobile</h4>
    <p>-</p>
    <h2>:pencil: License</h2>
    <p>This project is under the MIT license. See the <a href="" rel="nofollow">LICENSE</a> for more information.</p>
    <hr>
    <p>Made with ♥ by Gisele Silva :wave: <a href="https://www.linkedin.com/in/gisabernardess/" rel="nofollow">Get in touch!</a></p>
  </article>
</div>
