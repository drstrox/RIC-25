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
        { imgSrc: '/team_members/Vansh Gupta.jpg', name: 'Vansh Gupta' },
        { imgSrc: '/team_members/Bojja Jagruthi.jpg', name: 'Jagruthi' },
        { imgSrc: '/team_members/Pratul Pan.jpg', name: 'Pratul Pan' },
        { imgSrc: '/team_members/Bhasuru Nikhil.jpg', name: 'Bhasuru Nikhil ' },
        { imgSrc: '/team_members/Mannepalli Sai Adithya.jpeg', name: 'Sai Adithya Mannepalli'}
      ]
    },
    {
      teamName: 'Marketing',
      headImg: '/team_members/Praneeth.jpg',
      headName: 'Praneeth Chitrapu',
      members: [
        { imgSrc: '/team_members/Aman Choudhary.jpg', name: 'Aman Choudhary' },
        { imgSrc: '/team_members/Aniket Goyal.jpg', name: 'Aniket Goyal' },
        { imgSrc: '/team_members/Sudhishna Ravichandran.jpg', name: 'Sudhishna Ravichandran' },
        { imgSrc: '/team_members/Vijayagiri Sudhiksha.jpg', name: 'Vijayagiri Sudhiksha' },
        { imgSrc: '/team_members/Arnav Nitin Birari.jpg', name: 'Arnav Nitin Birari' },
        { imgSrc: '/team_members/Yadavalli Akshay Kumar.jpeg', name: 'Akshay' }
      ]
    },
    {
      teamName: 'Creatives and Content',
      // headImg: 'content-head.jpg',
      // headName: 'Content Head',
      members: [
        { imgSrc: '/team_members/Poorvansh Dashore.jpg', name: 'Poorvansh Dashore' },
        { imgSrc: '/team_members/Nekkanti Vedh.jpeg', name: 'Vedh Nekkanti' },
        { imgSrc: '/team_members/Devanshi Kawlani.jpg', name: 'Devanshi Kawlani' },
        { imgSrc: '/team_members/Eshika Pawar.jpg', name: 'Eshika Pawar' }
      ]
    },
    {
      teamName: 'Outreach',
      headImg: '/team_members/Aditi.jpg',
      headName: 'ADITI LUNIYA',
      members: [
        { imgSrc: '/team_members/Vanshika Gupta.jpeg', name: 'Vanshika Gupta' },
        { imgSrc: '/team_members/Yash Brijesh Modi.jpeg', name: 'Yash Modi' },
        { imgSrc: '/team_members/Sohil Dangi.jpg', name: 'Sohil Dangi ' },
        { imgSrc: '/team_members/Kumar Subham.webp', name: 'Kumar Subham Barik' },
        { imgSrc: '/team_members/Madasi Benin.jpeg', name: 'M Benin' },
        { imgSrc: '/team_members/Arnav Verma.jpg', name: 'Arnav Verma' },
        { imgSrc: '/team_members/Akash Kumar Singh.jpg', name: 'Akash Kumar Singh' }
      ]
    },
    {
      teamName: 'Logistics and Hospitality',
      headImg: '/team_members/Rajeev.jpg',
      headName: 'RAJEEV KADALI',
      members: [
        { imgSrc: '/team_members/Jairaj Lad.jpg', name: 'Jairaj Lad' },
        { imgSrc: '/team_members/Kanakam Abhishek.jpg', name: 'Kanakam Abhishek' },
        { imgSrc: '/team_members/Dodiya Monik Dilipbhai.jpg', name: 'Monik' },
        { imgSrc: '/team_members/Banoth Rohith.jpeg', name: 'Rohith'}
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
                <img className="position-image" src="/team_members/Rithvik.jpg" alt="GS Acads" />
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
