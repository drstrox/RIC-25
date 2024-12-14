import React from 'react';
import './Teams.css';

const Team = ({ teamName, headImg, headName, members }) => {
  return (
    <div className="team-card-professional">
      <div className="team-head-section">
        <div className="team-title">{teamName}</div>
        <div className="team-head-content">
          <div className="team-row">
            {/* Team Head Image wrapped with "HEAD" tag */}
            <div className="team-head-tag">
              <div className="team-head-image-container">
                <img
                  src={headImg}
                  alt={`${teamName} Head`}
                  className="team-head-image"
                />
              </div>
              <p className="team-head-name">{headName}</p> {/* Name of the Team Head */}
            </div>

            {/* Team Members */}
            <div className="team-members-row">
              {members.map((member, index) => (
                <div key={index} className="member-card">
                  <div className="member-image-container">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="member-image"
                    />
                  </div>
                  <p className="member-name">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Teams = () => {
  const teamsData = [
    {
      teamName: 'Web Design',
      headImg: '/team_members/Aayush Yadav.jpg',
      headName: 'Aayush Yadav',
      members: [
        { imgSrc: '/team_members/Ashish Donth.jpg', name: 'Ashish Donth' },
        { imgSrc: '/team_members/Nidarsana M.jpg', name: 'Nidarsana M' },
        { imgSrc: '/team_members/Rachakonda Chandrahasa.jpg', name: 'Rachakonda Chandrahasa' },
        { imgSrc: '/team_members/Additional Member.jpg', name: 'Additional Member' }
      ]
    },
    {
      teamName: 'Event Management',
      headImg: '/team_members/Sri Varsha Dodda.jpg',
      headName: 'Sri Varsha Dodda',
      members: [
        { imgSrc: '/team_members/Budireddy Devi.jpeg', name: 'Devi Sri Prasad' },
        { imgSrc: '/team_members/Vansh Gupta.jpg', name: 'Vansh Gupta' },
        { imgSrc: '/team_members/Karanam Venkata Lakshmi Sarath Chandra.jpg', name: 'Sarath Chandra' },
        { imgSrc: '/team_members/Additional Event Member.jpg', name: 'Additional Member' }
      ]
    },
    {
      teamName: 'Marketing',
      headImg: 'marketing-head.jpg',
      headName: 'Marketing Head',
      members: [
        { imgSrc: 'Aman Choudhary.jpg', name: 'Aman Choudhary' },
        { imgSrc: 'Aniket Goyal.jpg', name: 'Aniket Goyal' },
        { imgSrc: 'Sudhishna Ravichandran.jpg', name: 'Sudhishna Ravichandran' },
        { imgSrc: 'Additional Marketing Member.jpg', name: 'Additional Member' }
      ]
    },
    {
      teamName: 'Content',
      headImg: 'content-head.jpg',
      headName: 'Content Head',
      members: [
        { imgSrc: 'Poorvansh Dashore.jpg', name: 'Poorvansh Dashore' },
        { imgSrc: 'Nekkanti Vedh.jpeg', name: 'Vedh Nekkanti' },
        { imgSrc: 'Devanshi Kawlani.jpg', name: 'Devanshi Kawlani' },
        { imgSrc: 'Additional Content Member.jpg', name: 'Additional Member' }
      ]
    },
    {
      teamName: 'Outreach',
      headImg: 'outreach-head.jpg',
      headName: 'Outreach Head',
      members: [
        { imgSrc: '/team_members/Vanshika Gupta.jpeg', name: 'Member 1' },
        { imgSrc: 'Member2.jpg', name: 'Member 2' },
        { imgSrc: 'Member3.jpg', name: 'Member 3' },
        { imgSrc: 'Additional Outreach Member.jpg', name: 'Additional Member' }
      ]
    }
  ];

  return (
    
    <section className="teams-section">
      <div className="container">
        
      <div className="positions-section">
    <h2 className="positions-title">Our Key Positions</h2>
    <div className="positions-grid">
        {/* GS Acads Card */}
        <div className="position-card">
            <div className="position-image-container">
                <img className="position-image" src="/path/to/gs-acads-image.jpg" alt="GS Acads" />
            </div>
            <h3 className="position-title">GS Acads</h3>
            <p className="position-name">Rithvik</p> 
            <p className="position-description">
                Leading the academic affairs for the students, ensuring a smooth academic journey.
            </p>
        </div>

        {/* OC-PG Card */}
        <div className="position-card">
            <div className="position-image-container">
                <img className="position-image" src="/path/to/oc-pg-image.jpg" alt="OC-PG" />
            </div>
            <h3 className="position-title">OC-PG</h3>
            <p className="position-name">Mohit Tiwari</p> 
            <p className="position-description">
                Oversee the postgraduate students and represent their academic interests in all forums.
            </p>
        </div>

        {/* OC-UG Card */}
        <div className="position-card">
            <div className="position-image-container">
                <img className="position-image" src="/path/to/oc-ug-image.jpg" alt="OC-UG" />
            </div>
            <h3 className="position-title">OC-UG</h3>
            <p className="position-name">Keerthan Pragnay</p> 
            <p className="position-description">
                Represent undergraduate students, manage their queries, and act as a bridge between them and administration.
            </p>
        </div>
    </div>
</div>


        <h2 className="teams-title">Our Teams</h2>
        <div className="teams-grid">
          {teamsData.map((team, index) => (
            <Team
              key={index}
              teamName={team.teamName}
              headImg={team.headImg}
              headName={team.headName}
              members={team.members}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
