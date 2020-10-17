<div id="readme" class="Box-body readme blob js-code-block-container">
  <article class="markdown-body entry-content p-3 p-md-6" itemprop="text">
    <p align="center"><img alt="logo-gobarber-purple" src=""></p>
    <h2>:rocket: Technologies </h2>
    <p>Server-side was developed with the following technologies:</p>
    <ul>
      <li><a href="https://nodejs.org/" rel="nofollow">node.js</a></li>
      <li><a href="https://expressjs.com/" rel="nofollow">express</a></li>
      <li><a href="https://nodemon.io/" rel="nofollow">nodemon</a></li>
      <li><a href="https://github.com/alangpierce/sucrase">sucrase</a></li>
      <li><a href="https://www.docker.com/docker-community" rel="nofollow">docker</a></li>
      <li><a href="http://docs.sequelizejs.com/" rel="nofollow">sequelize</a></li>
      <li><a href="https://www.postgresql.org/" rel="nofollow">postgreSQL</a></li>
      <li><a href="https://www.npmjs.com/package/pg" rel="nofollow">node-postgres</a></li>
      <li><a href="https://www.mongodb.com/" rel="nofollow">mongodb</a></li>
      <li><a href="https://mongoosejs.com/" rel="nofollow">mongoose</a></li>
      <li><a href="https://redis.io/" rel="nofollow">redis</a></li>
      <li><a href="https://github.com/bee-queue/bee-queue" rel="nofollow">bee-queue</a></li>
      <li><a href="https://nodemailer.com/about/" rel="nofollow">nodemailer</a></li>
      <li><a href="https://handlebarsjs.com/" rel="nofollow">handlebars</a></li>
      <li><a href="https://jwt.io/" rel="nofollow">JWT</a></li>
      <li><a href="https://github.com/expressjs/multer" rel="nofollow">multer</a></li>
      <li><a href="https://github.com/kelektiv/node.bcrypt.js" rel="nofollow">bcrypt</a></li>
      <li><a href="https://github.com/jquense/yup" rel="nofollow">yup</a></li>
      <li><a href="https://github.com/poppinss/youch" rel="nofollow">youch</a></li>
      <li><a href="https://date-fns.org/" rel="nofollow">date-fns</a></li>
      <li><a href="https://mailtrap.io/" rel="nofollow">mailtrap</a></li>
      <li><a href="https://sentry.io/" rel="nofollow">sentry</a></li>
      <li><a href="https://github.com/motdotla/dotenv" rel="nofollow">dotenv</a></li>
      <li><a href="https://code.visualstudio.com/" rel="nofollow">VS Code</a> with <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" rel="nofollow">ESLint</a> + <a href="https://prettier.io/docs/en/install.html" rel="nofollow">Prettier</a> + <a href="https://editorconfig.org/" rel="nofollow">EditorConfig</a></li>
    </ul>
    <h2>:information_source:</a> How To Use
    </h2>
    <p>To run this API, you'll need <a href="https://git-scm.com" rel="nofollow">Git</a>, <a
        href="https://nodejs.org/" rel="nofollow">Node.js</a> + <a href="https://legacy.yarnpkg.com"
        rel="nofollow">Yarn</a> + <a href="https://docs.docker.com/install/linux/docker-ce/ubuntu/"
        rel="nofollow">Docker</a> with <a href="https://hub.docker.com/_/postgres" rel="nofollow">PostgreSQL</a> + <a href="https://hub.docker.com/_/mongo" rel="nofollow">MongoDB</a> + <a href="https://hub.docker.com/_/redis" rel="nofollow">Redis:alpine</a>. From
      your command line:</p>
    <div class="highlight highlight-source-shell">
      <pre><span class="pl-c"><span class="pl-c">#</span> Be into the repository</span>
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
    <br />
    <p>To test this API, you'll need <a href="https://insomnia.rest/" rel="nofollow">Insomnia REST</a>, or similar.
      Then, create routes:</p>
    <ul>
      <li>
        <p><code>POST /sessions</code>: Route that returns the logged in user. The route must receive <code>name</code> and <code>password</code> inside
          the body request; Be sure to send the attributes in string format with double quotes:
          <code>{ "name": "Gisele Silva", "email": "giiselebernardes@gmail.com" }</code>;</p>
      </li>
      <li>
        <p><code>POST /users</code>: Route that add new users. The route must receive <code>name</code>, <code>email</code> and <code>password</code> inside
          the body request; Don't forget to use Bearer token; Be sure to send the attributes in string format with double quotes:
          <code>{ "name": "Gisele Silva", "email": "giiselebernardes@gmail.com", "password": "123456" }</code>;</p>
      </li>
      <li>
        <p><code>PUT /users</code>: Route that update the user. The route could receive
          <code>name</code>, <code>email</code> and <code>password</code> inside the body request; When <code>password</code>, the route must receive <code>oldPassword</code> and <code>confirmPassword</code>; Don't forget to use Bearer token; Be sure to send the attributes in string format with double
          quotes: <code>{ "name": "Updated Name" }</code>;
      </li>
      <li><a href="https://github.com/gisabernardess/bootcamp-gostack-gobarber-api/wiki/Test-the-API">[see more here!]</a></li>
    </ul>
  <p>Also, you may need <a href="https://www.mongodb.com/download-center/compass" rel="nofollow">Mongo Compass Comunity</a> & <a href="https://mailtrap.io/" rel="nofollow">Mailtrap</a> & <a href="https://sentry.io/welcome/" rel="nofollow">Sentry</a>, or similar.</p>
    <hr>
    <p>Made with ♥ by Gisele Silva :wave: <a href="https://www.linkedin.com/in/gisabernardess/" rel="nofollow">Get in touch!</a></p>
  </article>
</div>
