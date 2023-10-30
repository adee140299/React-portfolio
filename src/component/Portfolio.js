import React, { useEffect, useState } from 'react';
// import './Style1.css';
// import './Responsive.css';

export default function Portfolio() {

    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    const handleScroll = () => {
      if (window.scrollY >= sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    function toggleMenu() {
        const menuList = document.getElementById("menu-list");
        menuList.classList.toggle("open");
      }
    
  return (
    <>


          <div id="hero-image" className="hero-image">
            {/* <img src='media/hero-image.jpeg'></img> */}
              <div className="hero-text">
                  <h3>HELLO,I AM</h3>
                  <h1>PRADEEP YADAV</h1>
                  <h4>FULLSTACK DEVELOPER</h4>
                  <a href="/media/pradeep resume-1.pdf" download>Download Resume</a>
              </div>
          </div>

          {/* <div className="menu-btn">
              <div className="menu-icon" onClick={toggleMenu}>
                  <div className="menu-line"></div>
                  <div className="menu-line"></div>
                  <div className="menu-line"></div>
              </div>


              <ul className="menu-list" id="menu-list">
                      <li><a href="#hero-image">Home</a></li>
                      <li><a href="#container1">about</a></li>
                      <li><a href="#division4">Resume</a></li> 

              </ul>
          </div> */}

          {/* <nav className="nav1" id="navbar"> */}
          <nav id="navbar" className={`nav1 ${isSticky ? 'sticky' : ''}`}>
              <div className="container">
                  <ul className="first_ul">
                      <li><a href="#hero-image">Home</a></li>
                      <li><a href="#container1">about</a></li>
                      <li><a href="#division4">Resume</a></li>
                  </ul>

                  <img id="scrollImage" src="https://adee140299.github.io/React-portfolio/media/nav-img.jpeg" alt="Image1"/>
                      <div className="content-text">
                          <h5> PRADEEP YADAV</h5>
                          <p>FULLSTACK DEVELOPER</p>
                      </div>
                      <ul className="second_ul">
                          <li><a href="#division7">Portfolio</a></li>
                          <li><a href="#division8">Blog</a></li>
                          <li><a href="#container1">contact</a></li>
                      </ul>
                  </div>
          </nav>

          <div id="container1" className="container1">
              <div className="division1">
                  <h1 className="division1_content" id="division1_h1">Who am I?</h1>
                  <span className="line"></span>
                  <h2 className="division1_content">A Fullstack Developer</h2>
                  <p className="division1_content" id="division1_para1">MSc IT(2023) FRESHER PASSED WITH 8.18/10 CGPA LOOKING FOR JOB OPPORTUNITY IN IT SECTOR <br/>TO GAIN MY KNOWLEDGE.</p>
              <a id="division1_a" href="/media/pradeep resume-1.pdf" download>Download Resume</a>

          </div>
          <div className="division2">
              <h1 className="division2_content">Personal Information</h1>
              <span className="line2"></span>
              <p className="division2_content"><b>Birthday:</b>14/02/1999</p>
              <p className="division2_content"><b>Email:</b>pray14299@gmail.com</p>
              <p className="division2_content"><b>Phone:</b>(+91)9920143789</p>
              <p className="division2_content" id="division_linkedin"><b>linkedin:</b></p>
              <a href="https://www.linkedin.com/in/pradeep-yadav-544235163/" className="division2_content">linkedin Link</a>
              <p className="division2_content"><b>Address:</b>Mumbai(Andheri East)</p>
              
              <a href="https://www.facebook.com/profile.php?id=100025619687021" className="fa-brands fa-facebook social-icon"></a>
              <a href="https://twitter.com/Pradeep33023180" className="fa-brands fa-twitter social-icon"></a>

              <a href="https://www.linkedin.com/in/pradeep-yadav-544235163/" className="fa-brands fa-linkedin social-icon"></a>
              <a href="#" className="fa-brands fa-youtube social-icon"></a>
              <a href="#" className="fa-brands fa-instagram social-icon"></a>


          </div>
          <div className="division3">
              <h1 className="division3_content">My Experiance</h1>
              <span className="line3"></span>
              <h3 className="division3_content">Web Development:</h3>
              <p className="division3_content">3 Months Industrial Internship(PHP)</p>

          </div>
          </div>
      <div id="division4" className="division4">
              <h1 className="division4_h1">My Resume</h1>
              <div className="container2">
                  <div className="first_half">

                      <h3 className="division4_h3">Technical Skill</h3>
                      <p className="border"></p>
                      <ul className="division4_unorderd_list">
                          <li><b>Frontend:-</b></li>
                          <li>HTML5,CSS,Bootstrap,javascript,React</li>
                          <li><b>Backend:-</b></li>
                          <li>javascript,core java,node.js,Express.js,Mysql,MongoDB</li>
                          
                      </ul>
                      <h3 className="division4_h3">Soft Skill</h3>
                      <p className="border"></p>
                      <ul className="division4_unorderd_list">
                          <li><u>Observation</u></li>
                          <li><u>Decision Making</u></li>
                          <li><u>Communication</u></li>
                          <li><u>Multi-Tasking</u></li>
                      </ul>
                      <h3 className="division4_h3">Educational Background</h3>
                      <p className="border"></p>
                      <ul className="division4_unorderd_list">
                          <li>Ramniranjan jhunjhunwala college<br/>
                              (Mumbai university)<br/>Msc(Information Technology)<br/><b>CGPA:-8.18/10 (A Grade)</b><br/>Completed in MAY 2023</li><br/>
                                  <li>chandrabhan sharma college<br/>(Mumbai university)<br/>BSC(Information Technology)<br/><b>CGPI:-8.29/10 (A Grade)</b><br/>Completed in FEB 2021</li><br/>
                                      <li>Ramniranjan jhunjhunwala college<br/>(Maharashtra Board)<br/><b>XII STD (49.85%)</b><br/>Completed in 2017</li><br/>
                                          <li id="list_hindi_high">Hindi High School<br/>(Maharashtra Board)<br/><b>X STD (85.80%)</b><br/>Completed in 2015</li>
                                          </ul>
                                          </div>

                                              <div className="second_half">
                                                  <h3 className="division4_h3">Career objective</h3>
                                                  <p className="border"></p>
                                                  <p className="thoda_left">To be associated with a progressive organization that
                                                      allows me to utilize my skills and to be a part of the
                                                      team that dynamically works towards the growth of
                                                      the organization and achieve the desired goals.</p>
                                                  <h3 className="division4_h3">Academic Project</h3>
                                                  <p className="border"></p>
                                                  <h4 className="thoda_left"><b>Title:-Music Web App</b></h4>
                                                  <p className="thoda_left"><span><b>Description:- </b></span>I have created an web app by using
                                                      html css and javascript. In this website my ten
                                                      most loved songs are there.basically it is an list of
                                                      my songs.frontend is created by using html and
                                                      css and for backend i used javascript.for
                                                      reference i used youtube video.</p>
                                                  <h4 className="thoda_left" style={{display: "inline"}}>Website link:-</h4>
                                                  <a href="https://adee140299.github.io/My-music-app/my%20music%20app/index.html" alt="mymusic">MUSIC WEB APP</a>
                                                  <h3 className="division4_h3">Achievements</h3>
                                                  <p className="border"></p>
                                                  <ul className="division4_unorderd_list">
                                                      <li><b>3 Months internship</b> with imperial overseas as a
                                                          programmer intern in php.</li><br/>
                                                          <li>Completed Certification course in PYTHON
                                                              PROGRAMMING with EducateIndia and chandrabhan
                                                              sharma college.</li><br/>
                                                              <li>WIN 2nd prize in website designing in creative corner
                                                                  organized by chandrabhan sharma college.</li><br/>
                                                                  <li>Participated in Lifelong learning & Extension(DLLE) in
                                                                      Mumbai university.</li><br/>
                                                                      <li>Pursuing fullstack development certificate course
                                                                          from Ntech Global Solutions (offline).</li>

                                                                  </ul>
                                                                  <h3 className="division4_h3">Work Experience</h3>
                                                                  <p className="border"></p>
                                                                  <p className="thoda_left" style={{marginBottom: "20px"}}>Fresher (3 Months internship Experience).</p>


                                                              </div>
                                                          </div>


                                                      </div>
                                                      <div className="division5">
                                                          <div className="container3">
                                                              <div className="division5_div1">
                                                                  <i id="clock" className="fa-regular fa-clock"></i>
                                                                  <div className="division5_line "></div>
                                                                  <h1 className="division5_h1-1">3</h1>
                                                                  <h3 className="division5_h3-1">Months Worked</h3>
                                                              </div>
                                                              <div className="division5_div2">
                                                                  <i id="layer" className="fa-solid fa-layer-group"></i>
                                                                  <div className="division5_line2 "></div>
                                                                  <h1 className="division5_div2_h1">5</h1>
                                                                  <h3 className="division5_div2_h3">Project Done</h3>
                                                              </div>
                                                              <div className="division5_div3">
                                                                  <i id="face" className="fa-regular fa-face-smile"></i>
                                                                  <div className="division5_line3 "></div>
                                                                  <h1 className="division5_div3_h1">ME</h1>
                                                                  <h3 className="division5_div3_h3">Happy Client</h3>
                                                              </div>
                                                              <div className="division5_div4">
                                                                  <i id="heart" className="fa-solid fa-heart-pulse"></i>
                                                                  <div className="division5_line4 "></div>
                                                                  <h1 className="division5_div4_h1">500</h1>
                                                                  <h3 className="division5_div4_h3">Coffee Drinked</h3>
                                                              </div>


                                                          </div>
                                                      </div>
                                                      <div className="division6">
                                                          <h1 className="division6_h1">My Services:-</h1>
                                                          <div className="container4">
                                                              <div className="division6_div1">
                                                                  <h2 className="division6_div1_h2">Frontend Developer</h2>
                                                                  <p className="division6_div1_prar1">Highly skilled Frontend Developer proficient in HTML5, CSS3, and JavaScript. Experienced in building responsive and visually appealing user interfaces. Strong eye for design, committed to creating seamless and engaging digital experiences. Detail-oriented, dedicated to writing clean and efficient code for optimized performance. Passionate about crafting impactful web solutions.</p>
                                                              </div>
                                                              <div className="division6_div2">
                                                                  <h2 className="division6_div2_h2">Backend Developer</h2>
                                                                  <p className="division6_div2_prar1">Experienced backend developer with expertise in Node.js, Express.js, and MySQL. Proficient in designing and developing robust server-side applications. Skilled in creating RESTful APIs, handling data storage, and ensuring seamless communication between frontend and backend systems. Committed to delivering efficient and scalable solutions for diverse projects.</p>
                                                              </div>
                                                              <div className="division6_div3">
                                                                  <h2 className="division6_div3_h2">Fullstack Developer</h2>
                                                                  <p className="division6_div3_prar1">Versatile Fullstack Developer proficient in both frontend and backend technologies. Skilled in HTML5, CSS3, JavaScript, Node.js, Express.js, and MySQL. Expertise in building end-to-end web applications, from conceptualization to implementation. Strong problem-solving abilities, ensuring seamless integration between frontend and backend systems. Committed to delivering high-quality, user-centric solutions that drive business growth.</p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div id="division7" className="division7">
                                                          <h1 className="division7_h1">Portfolio/Projects</h1>
                                                          <div className="container5">
                                                              <div className="flip-box">
                                                                  <div className="inner">
                                                                      <div className="front">
                                                                          <img src="/media/Resume.jpeg" alt="resume" style={{width:"300px",height:"200px"}}/>
                                                                          </div>
                                                                      <div className="back">
                                                                          <h2>My Resume</h2>
                                                                          <a href="https://adee140299.github.io/my_resume/">Have A Look</a>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div className="flip-box2">
                                                                  <div className="inner">
                                                                      <div className="front">
                                                                          <img src="/media/mini_project.jpg" alt="mini_project" style={{width: "300px",height: "200px"}}/>
                                                                          </div>
                                                                      <div className="back">
                                                                          <h2>Mini Project</h2>
                                                                          <a href="https://adee140299.github.io/html-css-website/">Have A Look</a>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div className="flip-box3">
                                                                  <div className="inner">
                                                                      <div className="front">
                                                                          <img src="/media/music web app.png" alt="music web app" style={{width: "300px",height: "200px"}}/>
                                                                          </div>
                                                                      <div className="back">
                                                                          <h2>Music Web App</h2>
                                                                          <a href="https://adee140299.github.io/My-music-app/my%20music%20app/index.html">Have A Look</a>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div className="flip-box4">
                                                                  <div className="inner">
                                                                      <div className="front">
                                                                          <img src="/media/language_classification.jpg" alt="language_classNameification" style={{width: "300px",height: "200px"}}/>
                                                                          </div>
                                                                      <div className="back">
                                                                          <h2>Language classNameification</h2>
                                                                          <a href="https://adee140299-language-classNameification-app-pnya72.streamlit.app/">Have A Look</a>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div id="division8" className="division8">
                                                          <h1 className="division8_h1">BLOG</h1>
                                                          <div className="division8_div1">
                                                              <h1 className="division8_div_h1">The Journey of a Fullstack Developer:</h1>
                                                              <p className="division8_div_para">As the digital landscape continues to evolve, the demand for versatile professionals who can seamlessly navigate both frontend and backend development has skyrocketed. Enter the world of fullstack developers, the architects of modern web applications. In this blog, we embark on a journey to understand the role and significance of a fullstack developer, exploring the skills, challenges, and opportunities they encounter in their dynamic career path.</p>
                                                              <h1 className="division8_div_h1">What is a Fullstack Developer?</h1>
                                                              <p className="division8_div_para">A fullstack developer is a multi-faceted professional who possesses expertise in both frontend and backend technologies. They are proficient in designing and implementing fully functional web applications from end to end. Their ability to code the client-facing user interface (frontend) and the server-side logic (backend) enables them to bridge the gap between these two critical components, fostering seamless communication and efficient application performance.</p>

                                                          </div>
                                                          <div className="division8_div2">
                                                              <h1 className="division8_div_h1">The Skill Set of a Fullstack Developer</h1>
                                                              <p className="division8_div_para">&nbsp;&nbsp;&nbsp;&nbsp;Being a fullstack developer requires a diverse skill set that combines proficiency in various programming languages, frameworks, databases, and development tools. At the frontend, they excel in HTML, CSS, and JavaScript, often leveraging modern libraries like React, Angular, or Vue.js to build captivating user interfaces. On the backend, they master languages such as Node.js, Python, or Ruby, and are well-versed in server-side frameworks like Express.js, Django, or Ruby on Rails.<br/>

                                                                  &nbsp;&nbsp;&nbsp;&nbsp;In addition to technical prowess, fullstack developers possess strong problem-solving skills and an understanding of software architecture. They are adept at implementing RESTful APIs, handling data storage through databases like MySQL, MongoDB, or PostgreSQL, and ensuring application security to safeguard against potential vulnerabilities.</p>

                                                          </div>
                                                          <div className="division8_div3">
                                                              <h1 className="division8_div_h1">The Joys of Creating from Scratch</h1>
                                                              <p className="division8_div_para">One of the most rewarding aspects of being a fullstack developer is the ability to create fully functional applications from scratch. From conceptualization to deployment, they witness the transformation of an idea into a tangible product that impacts users' lives. This creative power brings immense satisfaction and pride in their work, driving them to push boundaries and constantly improve their craft.</p>
                                                              <h1 className="division8_div_h1">The Ongoing Learning Journey</h1>
                                                              <p className="division8_div_para">Technology is a never-ending adventure, and fullstack developers are the adventurers of the digital realm. Embracing the learning journey is fundamental to staying ahead in this fast-paced industry. Fullstack developers thrive on exploring new frameworks, libraries, and development methodologies. Continuous learning not only enhances their skill set but also empowers them to tackle complex projects and make informed decisions.</p>


                                                          </div>
                                                          <div className="division8_div4">
                                                              <h1 className="division8_div_h1">Conclusion</h1>
                                                              <p className="division8_div_para">The role of a fullstack developer is not merely that of a programmer; it is that of a visionary who connects the dots between frontend aesthetics and backend functionality. Their versatility, adaptability, and eagerness to learn make them indispensable assets in the world of web development. As the digital landscape continues to evolve, fullstack developers will continue to lead the way, shaping the future of web applications and revolutionizing the online experience for users worldwide.</p>


                                                          </div>


                                                      </div>
                                                      <div className="division9">
                                                          <h1 className="division9_h1">I AM Available For Fulltime Job</h1>
                                                          <input className="division9_input" type="button" value="Hire Me"/>
                                                          </div>
                                                      <div className="division10">
                                                          <h1 className="division10_h1">My Location</h1>
                                                          <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.779540342835!2d72.86852617428974!3d19.117325082095753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c97ab85edfab%3A0xa38d914165449364!2sArpit%20building!5e0!3m2!1sen!2sin!4v1690209995869!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}}allowfullscreen="" loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                      </div>
                                                  
                                          </>
                                          );
                                          }
                                      
