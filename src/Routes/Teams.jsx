import React, { useState } from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Teams.css';

const PositionCard = ({ name, title, description, image, socials }) => {
  return (
    <div className="position-card">
      <div className="position-image-container">
        <img
          src={image}
          alt={name}
          className="position-image"
        />
        <div className="position-social-overlay">
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
          )}
          {socials.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
      <div className="position-info">
        <h3 className="position-title">{title}</h3>
        <p className="position-name">{name}</p>
        <p className="position-description">{description}</p>
      </div>
    </div>
  );
};

const KeyPositions = ({ year }) => {
  const keyPositions2024 = [
    {
      name: 'Keerthan Pragnay',
      title: 'Overall Coordinator (UG)',
      description: 'Represent undergraduate students, manage their queries, and act as a bridge between them and administration.',
      image: '/team_members/Keerthan Pragnay.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/keerthan-pragnay-a4368b289',
        instagram: 'https://www.instagram.com/k1728__/profilecard/'
      }
    },
    {
      name: 'Mohit Tiwari',
      title: 'Overall Coordinator (PG)',
      description: 'Oversee the postgraduate students and represent their academic interests in all forums.',
      image: '/team_members/mohit.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/mohit-tiwari-oc-pg',
        instagram: 'https://www.instagram.com/mohit_tiwari_oc_pg'
      }
    },
    {
      name: 'Rithvik',
      title: 'General Secretary Academics UG',
      description: 'Leading the academic affairs for the students, ensuring a smooth academic journey.',
      image: '/team_members/Rithvik.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/rithvik-gs-acads',
        instagram: 'https://www.instagram.com/rithvik_gs_acads'
      }
    },
    {
      name: 'Adi Raj',
      title: 'General Secretary Academics PG',
      description: 'Leading the academic affairs for the students, ensuring a smooth academic journey.',
      image: '/team_members/Adi_Raj.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/rithvik-gs-acads',
        instagram: 'https://www.instagram.com/rithvik_gs_acads'
      }
    }
  ];

  const keyPositions2023 = [
    {
      name: 'Sanket Panigrahi',
      title: 'Overall Coordinator (UG)',
      description: 'Represent undergraduate students, manage their queries, and act as a bridge between them and administration.',
      image: '/team_members/Sanket_Panigrahi.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/vishak-kumar',
        instagram: 'https://www.instagram.com/vishak_kumar'
      }
    },
    {
      name: 'Harsh vardhan singh',
      title: 'Overall Coordinator (PG)',
      description: 'Oversee the postgraduate students and represent their academic interests in all forums.',
      image: '/team_members/Harsh_Vardhan.jpeg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/hrishikesh-hiremath',
        instagram: 'https://www.instagram.com/hrishikesh_hiremath'
      }
    },
    {
      name: 'Shashant Kumar',
      title: 'General Secretary Academics UG',
      description: 'Leading the academic affairs for the students, ensuring a smooth academic journey.',
      image: '/team_members/shashant.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/ohm-kumar',
        instagram: 'https://www.instagram.com/ohm_kumar'
      }
    },
    {
      name: 'Shubham Jain',
      title: 'General Secretary Academics PG',
      description: 'Leading the academic affairs for the students, ensuring a smooth academic journey.',
      image: '/team_members/Shubham_Jain.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/rao-dheeraj',
        instagram: 'https://www.instagram.com/rao_dheeraj'
      }
    }
  ];

  const positions = year === 2024 ? keyPositions2024 : keyPositions2023;

  return (
    <div className="key-positions-section">
      <h2 className="key-positions-title">Key Leadership Positions</h2>
      <div className="key-positions-grid">
        {positions.map((position, index) => (
          <PositionCard
            key={index}
            name={position.name}
            title={position.title}
            description={position.description}
            image={position.image}
            socials={position.socials}
          />
        ))}
      </div>
    </div>
  );
};
// Rest of the Teams component remains the same as in the previous implementation


const TeamMember = ({ member, isHead = false }) => {
  return (
    <div
      className={`
        team-member-card 
        ${isHead ? 'team-head-card' : 'team-regular-card'}
      `}
    >
      <div className="member-image-container">
        <img
          src={member.imgSrc}
          alt={member.name}
          className="member-image"
        />
        {member.socials && (
          <div className="member-social-overlay">
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
      <div className="member-info">
        <h3 className={`member-name ${isHead ? 'head-name' : ''}`}>
          {member.name}
        </h3>
        {isHead && <p className="head-tag">Domain Head</p>}
      </div>
    </div>
  );
};

const TeamSection = ({ team, year }) => {
  const hasHead = team.headImg && team.headName;
  const hasCoHead = team.coHeadImg && team.coHeadName;

  return (
    <div className={`team-section-card ${team.members.length < 4 ? 'few-members' : ''}`}>
      <h2 className="team-section-title">{team.teamName}</h2>

      <div className="team-members-grid">
        {hasHead && (
          <TeamMember
            member={{
              imgSrc: team.headImg,
              name: team.headName,
              socials: team.headSocials
            }}
            isHead={true}
          />
        )}
        {hasCoHead && (
          <TeamMember
            member={{
              imgSrc: team.coHeadImg,
              name: team.coHeadName,
              socials: team.coHeadSocials
            }}
            isHead={true}
          />
        )}

        {team.members.map((member, index) => (
          <TeamMember
            key={index}
            member={member}
            isHead={false}
          />
        ))}
      </div>
    </div>
  );
};


const Teams = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  // ... (previous teamsData2024 and teamsData2023 remain the same)
  const teamsData2024 = [
    {
      teamName: 'Web Design',
      headImg: '/team_members/Aayush Yadav.png',
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
            linkedin: 'https://www.linkedin.com/in/chandrahasa-rachakonda-3201a92a6',
            instagram: 'https://www.instagram.com/chandrahasa_206',
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
            linkedin: 'http://www.linkedin.com/in/pratul-pan-156090338',
            instagram: 'https://www.instagram.com/pratulpan/?__pwa=1',
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
      coHeadImg: '/team_members/Aman Choudhary.jpg',
      coHeadName: 'Aman Choudhary',
      coHeadSocials: {
        linkedin: 'https://www.linkedin.com/in/aman-choudhary-954833292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/_aman.chou_/profilecard/?igsh=MXVxdjV2ZGsxZW9kdA==',
      },
      members: [
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
            linkedin: 'https://in.linkedin.com/in/vijayagiri-sudhiksha-93b88b340',
            instagram: 'https://www.instagram.com/sudhiksha_vijayagiri/profilecard/?igsh=cW9wdG5jbzJwZW1r',
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
            linkedin: 'https://www.linkedin.com/in/devanshi-kawlani-21967b330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/_.devanshii12/profilecard/?igsh=MXdzZnBpY3VodTAwbQ==',
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
      coHeadImg: '/team_members/Akash Kumar Singh.jpg',
      coHeadName: 'Akash Singh',
      coHeadSocials: {
        linkedin: 'https://www.linkedin.com/in/akashsingh68/',
        instagram: 'https://www.instagram.com/vanshika_gupta',

      },
      members: [
        {
          imgSrc: '/team_members/Vanshika Gupta.jpeg',
          name: 'Vanshika Gupta',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta-836006321',
            instagram: 'https://www.instagram.com/iitz_vanshika',
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
        {
          imgSrc: '/team_members/Sohil Dangi.jpg',
          name: 'Sohil Dangi ',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          }
        },
        {
          imgSrc: '/team_members/Kumar Subham.webp',
          name: 'Kumar Subham Barik',
          socials: {
            linkedin: 'https://www.linkedin.com/in/kumar-subham-barik-b24733281/',
            instagram: 'https://www.instagram.com/kumarsubhambarik/',
          }
        },
        {
          imgSrc: '/team_members/Madasi Benin.jpeg',
          name: 'M Benin',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          }
        },
        {
          imgSrc: '/team_members/Arnav Verma.jpg',
          name: 'Arnav Verma',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          }
        }
      ]
    },
    {
      teamName: 'Logistics and Hospitality',
      headImg: '/team_members/Rajeev.jpeg',
      headName: 'RAJEEV KADALI',
      headSocials: {
        linkedin: 'https://www.linkedin.com/in/rajeev-kadali-900287327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        instagram: 'https://www.instagram.com/rajeev._.kadali/profilecard/?igsh=MWdyNGJtODkxOGk4bw==',
      },
      members: [
        {
          imgSrc: '/team_members/Jairaj Lad.jpg',
          name: 'Jairaj Lad',
          socials: {
            linkedin: 'https://www.linkedin.com/in/jairaj-lad-985b29289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/jairajlad823/profilecard/?igsh=ZXkxc2s3NWo1NWEx',
          }
        },
        {
          imgSrc: '/team_members/Kanakam Abhishek.jpg',
          name: 'Kanakam Abhishek',
          socials: {
            linkedin: 'https://www.linkedin.com/in/abhishek-kanakam-83b649338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/bunny._.1224/profilecard/?igsh=MXRqa2I2cHZqcTJ4dw==',
          }
        },
        {
          imgSrc: '/team_members/Dodiya Monik Dilipbhai.jpg',
          name: 'Monik',
          socials: {
            linkedin: 'https://www.instagram.com/monikdodiyaa/?hl=en',
            instagram: 'https://www.instagram.com/monikdodiyaa/?hl=en',
          }
        },
        {
          imgSrc: '/team_members/prayg.jpg',
          name: 'Prayag Lakhani',
          socials: {
            linkedin: 'https://www.linkedin.com/in/prayag-lakhani-58ab43289/',
            instagram: 'https://www.instagram.com/prayag.lakhani/profilecard/?igsh=eXU5ZGNqcnlhcDZi',
          }
        },
        {
          imgSrc: '/team_members/Banoth Rohith.jpeg',
          name: 'Rohith B',
          socials: {
            linkedin: 'https://www.linkedin.com/in/banoth-rohith-6b59322b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            instagram: 'https://www.instagram.com/_rohith_017/profilecard/?igsh=ZDQ1MGRiY2lrbmly',
          }
        }
      ]
    }
  ];

  const teamsData2023 = [
    {
      teamName: 'Event Management',
      headImg: '/team_members/Hrishikesh_Hiremath.jpg',
      headName: 'Hrishikesh Hiremath',
      headSocials: {
        linkedin: 'https://www.linkedin.com/in/sri-varsha-d-4b709a210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/_ahsrav._?igsh=Z2lxYWdhamRmNmIx',
      },
      members: [
        {
          imgSrc: '/team_members/Kumar_Anmol.jpeg',
          name: 'Kumar Anmol',
          socials: {
            linkedin: 'https://www.linkedin.com/in/budireddy-devi-sri-prasad-b46780341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            instagram: 'https://www.instagram.com/devi_sri_prasad64/profilecard',
          }
        },
        {
          imgSrc: '/team_members/Manik_Bhowmik.jpeg',
          name: 'MAnik Bhowmik',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vansh-gupta',
            instagram: 'https://www.instagram.com/vanshgupta',
          }
        },
        {
          imgSrc: '/team_members/Parth_Jain.jpg',
          name: 'Parth Jain',
          socials: {
            linkedin: 'https://www.linkedin.com/in/sarath-chandra-03ab0a338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/sarathchandra_kvl/profilecard/?igsh=bXl3N2hmMnBrbHlo',
          }
        },
        {
          imgSrc: '/team_members/Sri_Varsha.jpg',
          name: 'Sri Varsha D',
          socials: {
            linkedin: 'https://www.linkedin.com/in/jagruthi-bojja-315bb8334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/jagruthii__/profilecard/?igsh=OGxib3lvb3piaTN0',
          }
        },
      ]
    },
    {
      teamName: 'Content & Creative',
      headImg: '/team_members/Rao_Dheeraj.jpeg',
      headName: 'Rao Dheeraj',
      headSocials: {
        linkedin: 'https://www.linkedin.com/in/praneeth-chitrapu',
        instagram: 'https://www.instagram.com/praneethchitrapu',
      },
      members: [
        {
          imgSrc: '/team_members/Pratik_Prajn.jpg',
          name: 'Pratik Prajn',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vedh-nekkanti',
            instagram: 'https://www.instagram.com/vedh_nekkanti',
          }
        },
        {
          imgSrc: '/team_members/Mrunal.jpeg',
          name: 'Mrunal Nandpure',
          socials: {
            linkedin: 'https://www.linkedin.com/in/devanshi-kawlani-21967b330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/_.devanshii12/profilecard/?igsh=MXdzZnBpY3VodTAwbQ==',
          }
        },
        {
          imgSrc: '/team_members/Gaurav_Rajput.jpg',
          name: 'Gaurav Rajput',
          socials: {
            linkedin: 'https://www.linkedin.com/in/eshika-pawar',
            instagram: 'https://www.instagram.com/eshika_pawar',
          }
        },
        {
          imgSrc: '/team_members/Kaushal_Raj.jpg',
          name: 'Kaushal Raj Soni',
          socials: {
            linkedin: 'https://www.linkedin.com/in/eshika-pawar',
            instagram: 'https://www.instagram.com/eshika_pawar',
          }
        },
        {
          imgSrc: '/team_members/Tamanna_Singh.jpg',
          name: 'Tamanna Singh',
          socials: {
            linkedin: 'https://www.linkedin.com/in/eshika-pawar',
            instagram: 'https://www.instagram.com/eshika_pawar',
          }
        },
        {
          imgSrc: '/team_members/Utkarsh_Singh.jpg',
          name: 'Utkarsh Singh',
          socials: {
            linkedin: 'https://www.linkedin.com/in/eshika-pawar',
            instagram: 'https://www.instagram.com/eshika_pawar',
          }
        }
      ]
    },
    {
      teamName: 'Logistics and Hospitality',
      headImg: '/team_members/Rabadiya_Ridhamkumar.jpg',
      headName: 'Ridhamkumar Rabadiya',
      headSocials: {
        linkedin: 'https://www.linkedin.com/in/rajeev-kadali-900287327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        instagram: 'https://www.instagram.com/rajeev._.kadali/profilecard/?igsh=MWdyNGJtODkxOGk4bw==',
      },
      members: [
        {
          imgSrc: '/team_members/Atharvakant_Chandorikar.jpg',
          name: 'Atharvakant Chandorikar',
          socials: {
            linkedin: 'https://www.linkedin.com/in/jairaj-lad-985b29289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/jairajlad823/profilecard/?igsh=ZXkxc2s3NWo1NWEx',
          }
        },
        {
          imgSrc: '/team_members/Aditya_Girge.jpg',
          name: 'Aditya Girge',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshika-gupta',
            instagram: 'https://www.instagram.com/vanshika_gupta',
          }
        },
        {
          imgSrc: '/team_members/Adi_Raj.jpg',
          name: 'Adi Raj',
          socials: {
            linkedin: 'https://www.instagram.com/monikdodiyaa/?hl=en',
            instagram: 'https://www.instagram.com/monikdodiyaa/?hl=en',
          }
        },
        {
          imgSrc: '/team_members/Rohit_Kumar.jpg',
          name: 'Rohit Kumar',
          socials: {
            linkedin: 'https://www.linkedin.com/in/prayag-lakhani-58ab43289/',
            instagram: 'https://www.instagram.com/prayag.lakhani/profilecard/?igsh=eXU5ZGNqcnlhcDZi',
          }
        },
        {
          imgSrc: '/team_members/Krish_Pathak.jpg',
          name: 'Krish Pathak',
          socials: {
            linkedin: 'https://www.linkedin.com/in/banoth-rohith-6b59322b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            instagram: 'https://www.instagram.com/_rohith_017/profilecard/?igsh=ZDQ1MGRiY2lrbmly',
          }
        },
        {
          imgSrc: '/team_members/Yogesh_Patidar.jpg',
          name: 'Yogesh Patidar',
          socials: {
            linkedin: 'https://www.linkedin.com/in/banoth-rohith-6b59322b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            instagram: 'https://www.instagram.com/_rohith_017/profilecard/?igsh=ZDQ1MGRiY2lrbmly',
          }
        },

      ]
    },
    {
      teamName: 'Marketing and Outreach',
      headImg: '/team_members/ohm.jpg',
      headName: 'Ohm Kumar',
      headSocials: {
        linkedin: 'https://www.linkedin.com/in/praneeth-chitrapu',
        instagram: 'https://www.instagram.com/praneethchitrapu',
      },
      members: [
        {
          imgSrc: '/team_members/Sri_Varsha (1).jpg',
          name: 'Sri Varsha D',
          socials: {
            linkedin: 'https://www.linkedin.com/in/aman-choudhary-954833292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/_aman.chou_/profilecard/?igsh=MXVxdjV2ZGsxZW9kdA==',
          }
        },
        {
          imgSrc: '/team_members/Rajshree.jpg',
          name: 'Rajshree',
          socials: {
            linkedin: 'https://www.linkedin.com/in/aniket-goyal',
            instagram: 'https://www.instagram.com/aniketgoyal',
          }
        },
        {
          imgSrc: '/team_members/akshat_sharma.jpg',
          name: 'Akshat Sharma',
          socials: {
            linkedin: 'https://www.linkedin.com/in/sudhishna-ravichandran-7b9279340',
            instagram: 'https://www.instagram.com/emokaradi/profilecard/?igsh=MWE0dHgxZzZmZG12aw==',
          }
        }
      ]
    },
    {
      teamName: 'Web Design',
      headImg: '/team_members/Vishal_Kumar.jpg',
      headName: 'Vishak Kumar',
      headSocials: {
        linkedin: 'https://www.linkedin.com/in/aayush-yadav-7a0b40282/',
        instagram: 'https://www.instagram.com/drstrox/?hl=en',
      },
      members: [
        {
          imgSrc: '/team_members/Aadarsh_Ranjan.jpg',
          name: 'Aadarsh Ranjan',
          socials: {
            linkedin: 'https://www.linkedin.com/in/ashish-donth',
            instagram: 'https://www.instagram.com/ashishdonth',
          }
        },
      ]
    },
  ];

  return (
    <div className="teams-page">
      <div className="teams-container">
        <div className="teams-header">
          <h1 className="page-title">Our Teams</h1>
          <div className="year-selector">
            <button
              onClick={() => setSelectedYear(2024)}
              className={`year-btn ${selectedYear === 2024 ? 'active' : ''}`}
            >
              2024
            </button>
            <button
              onClick={() => setSelectedYear(2023)}
              className={`year-btn ${selectedYear === 2023 ? 'active' : ''}`}
            >
              2023
            </button>
          </div>
        </div>

        {/* New Key Positions Section */}
        <KeyPositions year={selectedYear} />

        <div className="teams-grid">
          {(selectedYear === 2024 ? teamsData2024 : teamsData2023).map((team, index) => (
            <TeamSection
              key={index}
              team={team}
              year={selectedYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;