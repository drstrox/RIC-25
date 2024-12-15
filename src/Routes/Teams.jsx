import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Teams.css';

const Team = ({ teamName, headImg, headName, headSocials, members }) => {
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
                {headSocials && (
                  <div className="team-head-social-icons">
                    {headSocials.linkedin && (
                      <a 
                        href={headSocials.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                      >
                        <FaLinkedin />
                      </a>
                    )}
                    {headSocials.instagram && (
                      <a 
                        href={headSocials.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                      >
                        <FaInstagram />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <p className="team-head-name">{headName}</p>
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
                    {member.socials && (
                      <div className="member-social-icons">
                        {member.socials.linkedin && (
                          <a 
                            href={member.socials.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon"
                          >
                            <FaLinkedin />
                          </a>
                        )}
                        {member.socials.instagram && (
                          <a 
                            href={member.socials.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon"
                          >
                            <FaInstagram />
                          </a>
                        )}
                      </div>
                    )}
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
      headSocials: {
        linkedin: 'https://www.linkedin.com/in/aayush-yadav-7a0b40282/',
        instagram: 'https://www.instagram.com/drstrox/?hl=en',
      },
      members: [
        { 
          imgSrc: '/team_members/Ashish Donth.jpg', 
          name: 'Ashish Donth',
          socials: {
            linkedin: 'https://www.linkedin.com/in/ashish-donth',
            instagram: 'https://www.instagram.com/ashishdonth',
          }
        },
        { 
          imgSrc: '/team_members/Nidarsana M.jpg', 
          name: 'Nidarsana M',
          socials: {
            linkedin: 'https://www.linkedin.com/in/nidarsana-m/',
          }
        },
        { 
          imgSrc: '/team_members/Rachakonda Chandrahasa.jpg', 
          name: 'Rachakonda Chandrahasa',
          socials: {
            linkedin: 'https://www.linkedin.com/in/chandrahasa',
            instagram: 'https://www.instagram.com/chandrahasa',
          }
        },
      ]
    },
    {
      teamName: 'Event Management',
      headImg: '/team_members/Sri Varsha Dodda.jpg',
      headName: 'Sri Varsha Dodda',
      headSocials: {
        linkedin: 'https://www.linkedin.com/in/sri-varsha-d-4b709a210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/_ahsrav._?igsh=Z2lxYWdhamRmNmIx',
      },
      members: [
        { 
          imgSrc: '/team_members/Budireddy Devi.jpeg', 
          name: 'Devi Sri Prasad',
          socials: {
            linkedin: 'https://www.linkedin.com/in/budireddy-devi-sri-prasad-b46780341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            instagram: 'https://www.instagram.com/devi_sri_prasad64/profilecard',
          }
        },
        { 
          imgSrc: '/team_members/Vansh Gupta.jpg', 
          name: 'Vansh Gupta',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vansh-gupta',
            instagram: 'https://www.instagram.com/vanshgupta',
          }
        },
        { 
          imgSrc: '/team_members/Karanam Venkata Lakshmi Sarath Chandra.jpg', 
          name: 'Sarath Chandra',
          socials: {
            linkedin: 'https://www.linkedin.com/in/sarath-chandra-03ab0a338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/sarathchandra_kvl/profilecard/?igsh=bXl3N2hmMnBrbHlo',
          }
        },
        { 
          imgSrc: '/team_members/Bojja Jagruthi.jpg', 
          name: 'Jagruthi',
          socials: {
            linkedin: 'https://www.linkedin.com/in/jagruthi-bojja-315bb8334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/jagruthii__/profilecard/?igsh=OGxib3lvb3piaTN0',
          }
        },
        { 
          imgSrc: '/team_members/Pratul Pan.jpg', 
          name: 'Pratul Pan',
          socials: {
            linkedin: 'https://www.linkedin.com/in/pratul-pan',
            instagram: 'https://www.instagram.com/pratulpan',
          }
        },
        { 
          imgSrc: '/team_members/Bhasuru Nikhil.jpg', 
          name: 'Bhasuru Nikhil',
          socials: {
            linkedin: 'https://www.linkedin.com/in/nikhil-bhasuru-2196a6314/',
            instagram: 'https://www.instagram.com/nikhilb_183/',
          }
        },
        { 
          imgSrc: '/team_members/Mannepalli Sai Adithya.jpeg', 
          name: 'Sai Adithya Mannepalli',
          socials: {
            linkedin: 'https://www.linkedin.com/in/sai-adithya-mannepalli',
            instagram: 'https://www.instagram.com/sai_adithya_mannepalli',
          }
        }
      ]
    },
    {
      teamName: 'Marketing',
      headImg: '/team_members/Praneeth.jpg',
      headName: 'Praneeth Chitrapu',
      headSocials: {
        linkedin: 'https://www.linkedin.com/in/praneeth-chitrapu',
        instagram: 'https://www.instagram.com/praneethchitrapu',
      },
      members: [
        { 
          imgSrc: '/team_members/Aman Choudhary.jpg', 
          name: 'Aman Choudhary',
          socials: {
            linkedin: 'https://www.linkedin.com/in/aman-choudhary',
            instagram: 'https://www.instagram.com/amanchoudhary',
          }
        },
        { 
          imgSrc: '/team_members/Aniket Goyal.jpg', 
          name: 'Aniket Goyal',
          socials: {
            linkedin: 'https://www.linkedin.com/in/aniket-goyal',
            instagram: 'https://www.instagram.com/aniketgoyal',
          }
        },
        { 
          imgSrc: '/team_members/Sudhishna Ravichandran.jpg', 
          name: 'Sudhishna Ravichandran',
          socials: {
            linkedin: 'https://www.linkedin.com/in/sudhishna-ravichandran-7b9279340',
            instagram: 'https://www.instagram.com/emokaradi/profilecard/?igsh=MWE0dHgxZzZmZG12aw==',
          }
        },
        { 
          imgSrc: '/team_members/Vijayagiri Sudhiksha.jpg', 
          name: 'Vijayagiri Sudhiksha',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vijayagiri-sudhiksha',
            instagram: 'https://www.instagram.com/sudhiksha_vijayagiri',
          }
        },
        { 
          imgSrc: '/team_members/Arnav Nitin Birari.jpg', 
          name: 'Arnav Nitin Birari',
          socials: {
            linkedin: 'https://www.linkedin.com/in/arnav-birari',
            instagram: 'https://www.instagram.com/arnav_birari',
          }
        },
        { 
          imgSrc: '/team_members/Yadavalli Akshay Kumar.jpeg', 
          name: 'Akshay',
          socials: {
            linkedin: 'https://www.linkedin.com/in/yadavalli-akshay-kumar',
            instagram: 'https://www.instagram.com/akshay_yadavalli',
          }
        }
      ]
    },
    {
      teamName: 'Creatives and Content',
      members: [
        { 
          imgSrc: '/team_members/Poorvansh Dashore.jpg', 
          name: 'Poorvansh Dashore',
          socials: {
            linkedin: 'https://www.linkedin.com/in/poorvansh-dashore',
            instagram: 'https://www.instagram.com/poorvansh_dashore',
          }
        },
        { 
          imgSrc: '/team_members/Nekkanti Vedh.jpeg', 
          name: 'Vedh Nekkanti',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vedh-nekkanti',
            instagram: 'https://www.instagram.com/vedh_nekkanti',
          }
        },
        { 
          imgSrc: '/team_members/Devanshi Kawlani.jpg', 
          name: 'Devanshi Kawlani',
          socials: {
            linkedin: 'https://www.linkedin.com/in/devanshi-kawlani',
            instagram: 'https://www.instagram.com/devanshi_kawlani',
          }
        },
        { 
          imgSrc: '/team_members/Eshika Pawar.jpg', 
          name: 'Eshika Pawar',
          socials: {
            linkedin: 'https://www.linkedin.com/in/eshika-pawar',
            instagram: 'https://www.instagram.com/eshika_pawar',
          }
        }
      ]
    },
    {
      teamName: 'Outreach',
      headImg: '/team_members/Aditi.jpg',
      headName: 'ADITI LUNIYA',
      headSocials: {
        linkedin: 'https://www.linkedin.com/in/aditi-luniya',
        instagram: 'https://www.instagram.com/aditi_luniya',
      },
      members: [
        { 
          imgSrc: '/team_members/Vanshika Gupta.jpeg', 
          name: 'Vanshika Gupta',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          }
        },
        { 
          imgSrc: '/team_members/Yash Brijesh Modi.jpeg', 
          name: 'Yash Modi',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          }
         },
        { imgSrc: '/team_members/Sohil Dangi.jpg', 
          name: 'Sohil Dangi ',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          }
        },
        { imgSrc: '/team_members/Kumar Subham.webp', 
          name: 'Kumar Subham Barik',
          socials: {
            linkedin: 'https://www.linkedin.com/in/kumar-subham-barik-b24733281/',
            instagram: 'https://www.instagram.com/kumarsubhambarik/',
          }
         },
        { imgSrc: '/team_members/Madasi Benin.jpeg', 
          name: 'M Benin',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          }
        },
        { imgSrc: '/team_members/Arnav Verma.jpg', 
          name: 'Arnav Verma',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          }
         },
        { imgSrc: '/team_members/Akash Kumar Singh.jpg', 
          name: 'Akash Kumar Singh',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          } 
        }
      ]
    },
    {
      teamName: 'Logistics and Hospitality',
      headImg: '/team_members/Rajeev.jpg',
      headName: 'RAJEEV KADALI',
      headSocials: {
        linkedin: 'https://www.linkedin.com/in/praneeth-chitrapu',
        instagram: 'https://www.instagram.com/praneethchitrapu',
      },
      members: [
        { imgSrc: '/team_members/Jairaj Lad.jpg', 
          name: 'Jairaj Lad',
          socials: {
            linkedin: 'https://www.linkedin.com/in/jairaj-lad-985b29289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/jairajlad823/profilecard/?igsh=ZXkxc2s3NWo1NWEx',
          }
        },
        { imgSrc: '/team_members/Kanakam Abhishek.jpg', 
          name: 'Kanakam Abhishek',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          }
         },
        { imgSrc: '/team_members/Dodiya Monik Dilipbhai.jpg', 
          name: 'Monik',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          }
         },
        { imgSrc: '/team_members/Banoth Rohith.jpeg',
           name: 'Rohith B',
           socials: {
            linkedin: 'https://www.linkedin.com/in/banoth-rohith-6b59322b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            instagram: 'https://www.instagram.com/_rohith_017/profilecard/?igsh=ZDQ1MGRiY2lrbmly',
          }
        }
      ]
    }
    
  ];

  return (
    
    <section className="teams-section">
      <div className="container">
        
      {/* Key Positions Section */}
<div className="positions-section">
    <h2 className="positions-title">Our Key Positions</h2>
    <div className="positions-grid">
        {/* GS Acads Card */}
        <div className="position-card">
            <div className="position-image-container">
                <img 
                    className="position-image" 
                    src="/team_members/Rithvik.jpg" 
                    alt="GS Acads" 
                />
                <div className="position-social-icons">
                    <a 
                        href="https://www.linkedin.com/in/rithvik-gs-acads" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <FaLinkedin />
                    </a>
                    <a 
                        href="https://www.instagram.com/rithvik_gs_acads" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <FaInstagram />
                    </a>
                    
                </div>
            </div>
            <h3 className="position-title">General Secretary Academics</h3>
            <p className="position-name">Rithvik</p> 
            <p className="position-description">
                Leading the academic affairs for the students, ensuring a smooth academic journey.
            </p>
        </div>

        {/* OC-PG Card */}
        <div className="position-card">
            <div className="position-image-container">
                <img 
                    className="position-image" 
                    src="/team_members/Mohit Tiwari.jpg" 
                    alt="OC-PG" 
                />
                <div className="position-social-icons">
                    <a 
                        href="https://www.linkedin.com/in/mohit-tiwari-oc-pg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <FaLinkedin />
                    </a>
                    <a 
                        href="https://www.instagram.com/mohit_tiwari_oc_pg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <FaInstagram />
                    </a>
                   
                </div>
            </div>
            <h3 className="position-title">Overall Co-ordinator (PG)</h3>
            <p className="position-name">Mohit Tiwari</p> 
            <p className="position-description">
                Oversee the postgraduate students and represent their academic interests in all forums.
            </p>
        </div>

        {/* OC-UG Card */}
        <div className="position-card">
            <div className="position-image-container">
                <img 
                    className="position-image" 
                    src="/team_members/Keerthan Pragnay.jpg" 
                    alt="OC-UG" 
                />
                <div className="position-social-icons">
                    <a 
                        href="https://www.linkedin.com/in/keerthan-pragnay-oc-ug" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <FaLinkedin />
                    </a>
                    <a 
                        href="https://www.instagram.com/keerthan_pragnay_oc_ug" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <FaInstagram />
                    </a>
                   
                </div>
            </div>
            <h3 className="position-title">Overall Co-ordinator (UG)</h3>
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
              headSocials={team.headSocials}
              members={team.members}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;