import Navbar from "@/components/NavBar"

export default function Home() {
  return (
    <>
    <Navbar/>
  <div id="indexCont">
    <div id="leftDiv">
      <h1>Portfolio</h1>
      <div id="personalIntroDiv">
        <p>Hello, welcome to my website, I am Joel(@joipoi on github).</p>

        <p>I plan on using this site to show off my latest projects and also hopefully write a blog with what 
          I have learned in programming/IT, maybe it could help someone.
        </p>
        <p>
          Reach me at: joel@ekne.com
        </p>
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill">
            <i className="devicon-html5-plain colored"></i>
            <span>HTML5</span>
          </div>
          <div className="skill">
            <i className="devicon-css3-plain colored"></i>
            <span>CSS3</span>
          </div>
          <div className="skill">
            <i className="devicon-javascript-plain colored"></i>
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <i className="devicon-csharp-plain colored"></i>
            <span>C#</span>
          </div>
          <div className="skill">
            <i className="devicon-java-plain colored"></i>
            <span>Java</span>
          </div>
          <div className="skill">
            <i className="devicon-linux-plain colored"></i>
            <span>Linux</span>
          </div>
         
        </div>
        

        <div id="socialLinksDiv">
          <h2>Socials</h2>
          <div className="skills-container">
            <a href="https://github.com/joipoi">
            <div className="skill">
              <i className="devicon-github-original"></i>
              <span>Github</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/joel-ekne-95b847211/">
            <div className="skill">
              <i className="devicon-linkedin-plain"></i>
              <span>LinkedIn</span>
            </div>
          </a>
          </div>

        
        
        </div>
      </div>
    </div>
    <div id="rightDiv">
        <h2>Latest News</h2>
        <div className="news">
          <h2>Added this page to the website</h2>
          <span>2025-04-15</span>
          <p>I wanted a homepage for the website but I have been too lazy to make one. I finally got around to it now.
            I think it is not perfect and could be styled a little bit better, but it's ok.
            I also now have to manually update it which is pain
          </p>
        </div>
  
      <div className="news">
        <h2>Added Games to this website</h2>
        <span>2025-02-01</span>
        <p>As you can see there is a link to "Games" in the navmenu at the top. I realized even though there
          is no server on this site, I can host frontend javascript projects. So I took some stuff I had made and
          put it up. I hope to do more games in the future.
        </p>
      </div>

  
    </div>
    <div>
      <h2>Blog Preview</h2>
      <ul>
      <li className="postLI">
        <h2 className="postTitle"><a href="/2025/01/23/browser-extension-intro.html">Intro to Browser Extension Development</a></h2>
        <span className="postDate">23 Jan 2025</span>
          <a className="postTag" href="/archive.html#javascript">
              javascript
          </a>
      
          <a className="postTag" href="/archive.html#front-end">
              front-end
          </a>
      
          <a className="postTag" href="/archive.html#html">
              html
          </a>
      </li>
      <li className="postLI">
        <h2 className="postTitle"><a href="/2025/01/20/github-pages-jekyll.html">Github Pages and jekyll</a></h2>
        <span className="postDate">20 Jan 2025</span>
          <a className="postTag" href="/archive.html#github">
              github
          </a>
      
          <a className="postTag" href="/archive.html#front-end">
              front-end
          </a>
      
          <a className="postTag" href="/archive.html#html">
              html
          </a>
      </li>
      <li className="postLI">
        <h2 className="postTitle"><a href="/2025/01/15/Modern-Javascript.html">Modern Javascript Landscape</a></h2>
        <span className="postDate">15 Jan 2025</span>
          <a className="postTag" href="/archive.html#javascript">
              javascript
          </a>
      
          <a className="postTag" href="/archive.html#node">
              node
          </a>
      
          <a className="postTag" href="/archive.html#react">
              react
          </a>
      
          <a className="postTag" href="/archive.html#programming">
              programming
          </a>
      </li>
    </ul>
    </div>
  </div>
  </>
  );
}
