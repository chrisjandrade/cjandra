import React from 'react';
import { Card } from '@blueprintjs/core';

export default class Resume extends React.Component {

	render() {
		return (
			<Card className="resume">
        <div className="header">
          <h1>Chris John Andrade</h1>
        </div>
        <div className="body">
          
          <h2>Cleared Software Engineer &#9632; Web Development</h2>
          <br/>

          <p>
          Experienced Software Engineer specialized in Web Development. I work primarily with Javascript developing
          the user interface, but am able to work across the full development stack. Also have experience leading
          teams, mentoring and I am a strong proponent of Agile Development Methodologies.
          </p>
          <b>Skills</b><br/>

          <div className="col-md-4">
            <ul>
              <li>Javascript, HTML, CSS, SCSS</li>
              <li>ReactJS, JQuery, AngularJS, ExtJS, Backbone</li>
              <li>NodeJS, Express, NAN</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>Java, Spring, J2EE</li>
              <li>C, C++, C#, Python, Perl, Bash</li>
              <li>GIT, SVN, CVS</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
                <li>Docker</li>
                <li>Elastic Search</li>
                <li>Mongo, MySQL, MariaDB</li>
            </ul>
          </div>
          <div className="clearfix"/>

          <h2>Experience</h2>
          <br/>

          <h4>
            Technology Management Associates &#9632; Chantilly, VA
            <span className="pull-right">Aug 2018 to Present</span>
          </h4>
          <em>Software Engineer</em>
          <p>
            My newest expedition is just getting started...
          </p>

          <h4>
            Blue Ridge Dynamics &#9632; Fairfax, VA
            <span className="pull-right">Oct 2016 to July 2018</span>
          </h4>
          <em>Senior Software Engineer</em>
          <p>
          Supported various DARPA research projects, government projects and commercial development efforts as the
          only front-end developer for a small start-up company (less than 10 employees).
          </p>

          <ul>
            <li>
              Developed project infrastructure using NodeJS and ReactJS for an application used for scheduling signal
              communication resources.
            </li>
            <li>
              Developed search infrastructure (Elastic Search) , user interface, visualizations, back-end, real time
              multimedia transcoding server for Blue Lake . Blue Lake allowed Terabytes of data to be processed, analyzed
              and triaged by analysts.
            </li>
            <li>
              Developed the user-interface for various Darpa research efforts.
            </li>
            <li>
              Introduced Book Club, and Brown Bag lunches for technical topics.
            </li>
            <li>
              Created user-interface interview packet, and intern interview packet.
            </li>
          </ul>

          <h4>
            Probity &#9632; Herndon, VA
            <span className="pull-right">Oct 2015 to Oct 2016</span>
          </h4>
          <em>Senior Software Engineer SME</em>
          <p>
            The principle engineer responsible for developing <strong>Acacia</strong> an audio focused analytical tool. Worked converting
            the legacy C# application to NodeJS and Node Native (NAN).
          </p>
          <ul>
            <li>
              Developed a faster than realtime audio pipeline which transcodes audio media to PCM16.
            </li>
            <li>
              Developed C/C++ Node Native Addons to support USB foot pedal input, and perform audio stretch (tempo
              adjustment without pitch distortion) using soundtouch.
            </li>
            <li>
              Developed libraries for adjusting audio-gain on the fly, muting of individual audio channels, dual-mono audio
              interleaving (combining 2 mono audio files into a single audio), and generating SVG images representing the
              audio energy waveform.
            </li>
            <li>
              Development was requested to be done with only Vanilla Javascript, so I authored a jQuery substitute
              library.
            </li>
            <li>
              Developed the user-interface for all Acacia products.
            </li>
            <li>
              Integrated with voice activity detection and voice filtering libraries provided by a third party.
            </li>
          </ul>

          <h4>
            CACI/Six3Systems &#9632; Sterling, VA
            <span className="pull-right">Jan 2014 to Oct 2015</span>
          </h4>
          <em>Development Lead</em>
          <p>
            Lead the DCTC Bedrock-Tasking Team. Our team was responsible for converting the legacy Ruby application.
          </p>
          <ul>
            <li>Directed and focused the team’s development efforts.</li>
            <li>Planned sprint releases and schedule.</li>
            <li>Coordinated with other development leads on the overall Bedrock effort.</li>
          </ul>
          
          <em>Software Engineer</em>
          <ul>
            <li>Developed pluggable architecture for Advanced Search in the Bedrock Application.</li>
            <li>Developed Role-based access control for Taskers application.</li>
            <li>Developed initialization and error handling framework for the user interface.</li>
            <li>Introduced Karma and Jasmine unit testing into the applications.</li>
          </ul>

          <h4>
            NISC - IBM Global Business Systems &#9632; Fairfax, VA
            <span className="pull-right">Jan 2009 to Jan 2014</span>
          </h4>
          <em>UI Development Lead</em>
          <p>
            Lead development effort for user interface across the LATCH family of products. LATCH was an audio
            transcription tool used to allow analysts to quickly triage multimedia.
          </p>

          <ul>
            <li>Conducted code reviews for user interface related development.</li>
            <li>Developed and enforced user interface best practices.</li>
            <li>Developed visualizations for human language analytics, pattern of life, and user meta-data.</li>
            <li>Developed framework for synchronizing a large set of data and metadata by time (10,000+ items) .</li>
            <li>Introduced Jasmine unit testing.</li>
            <li>Presenter for GBS Technical Book Club. Presented on the topics of usability, basic/advanced Javascript.</li>
          </ul>
          
          <h4>
            PowerTest - Verizon &#9632; Reston, VA
            <span className="pull-right">Feb 2007 to Mar 2010</span>
          </h4>
          <em>Software Engineer</em>
          <p>
            Supported the Verizon CPE/CNT laboratory in development related efforts.
          </p>
          
          <ul>
            <li>Developed a platform for performance testing of Verizon supported devices.</li>
            <li>Developed inventory management web application integrated with WASP.</li>
          </ul>

          <h3>Education</h3>
          <h4>George Mason University</h4>
          
          <em><strong>Master of Science</strong>, Computer Science</em><span className="pull-right">2007 to 2012</span>
          <div className="clearfix"/>

          <em><strong>Graduate Certificate</strong>, Web Based Software Engineering</em><span className="pull-right">2007 to 2012</span>
          <div className="clearfix"/>

          <em><strong>Bachelor of Science</strong>, Computer Science</em><span className="pull-right">2002 to 2006</span>
          <div className="clearfix"/>
          
        </div>
			</Card>
		);
	}

}
