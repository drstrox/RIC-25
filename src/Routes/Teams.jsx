import React from "react";
import "./Cards.css";

const TeamMember = ({ imgSrc, name }) => (
  <div className="member">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
  </div>
);

const Team = ({ teamName, teamHead, headImg, members }) => (
  <div className="team">
    <h3>{teamName}</h3>
    <div className="team-layout">
      <div className="team-head">
        <img src={headImg} alt={`${teamName} Head`} />
        <p>
          {teamHead.name}
          <br />
          <span>{teamHead.role}</span>
        </p>
      </div>
      <div className="team-members">
        <div className="members-carousel">
          {members.map((member, index) => (
            <TeamMember key={index} imgSrc={member.imgSrc} name={member.name} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Teams = () => {
  const teamsData = [
    {
      teamName: "Web Development Team",
      teamHead: { name: "Aayush Yadav", role: "Web Dev Head" },
      headImg: "webdesign-head.jpg",
      members: [
        { imgSrc: "wMember1.jpg", name: "Aashish Donth" },
        { imgSrc: "wMember2.jpg", name: "Nidarsana M" },
        { imgSrc: "wMember3.jpg", name: "Rachakonda Chandrahasa" },
      ],
    },
    {
      teamName: "Event Management and Publicity Team",
      teamHead: { name: "Sri Varsha", role: "Event Management and Publicity Head" },
      headImg: "webdesign-head.jpg",
      members: [
        { imgSrc: "wMember1.jpg", name: "Devi Sri Prasad" },
        { imgSrc: "wMember2.jpg", name: "Vansh Gupta" },
        { imgSrc: "wMember3.jpg", name: "Sarath Chandra" },
        { imgSrc: "wMember1.jpg", name: "Sai Adithya Mannepalli" },
        { imgSrc: "wMember2.jpg", name: "Pratul Pan" },
        { imgSrc: "wMember3.jpg", name: "Jagruthi" },
        { imgSrc: "wMember3.jpg", name: "Bhasuru Nikhil" },

      ],
    },
    {
      teamName: "Marketing",
      teamHead: { name: "Praneeth Chitrapu", role: "Marketing Head" },
      headImg: "marketing-head.jpg",
      members: [
        { imgSrc: "mkMember1.jpg", name: "Aman Choudhary" },
        { imgSrc: "mkMember2.jpg", name: "Aniket Goyal" },
        { imgSrc: "mkMember3.jpg", name: "Sudhishna Ravichandran " },
        { imgSrc: "mkMember4.jpg", name: "Akash Kumar Singh" },
        { imgSrc: "mkMember4.jpg", name: "Sathvik Rathod" },
        { imgSrc: "mkMember4.jpg", name: "Vijaygiri Sudhiksha" },
        { imgSrc: "mkMember4.jpg", name: "Arnav Birari" },
      ],
    },
    {
      teamName: "Outreach",
      teamHead: { name: "Aditi Luniya", role: "Outreach Head" },
      headImg: "Outreach-head.jpg",
      members: [
        { imgSrc: "oMember1.jpg", name: "Yash Modi" },
        { imgSrc: "oMember2.jpg", name: "Kumar Subham Barik " },
        { imgSrc: "oMember3.jpg", name: "Vanshika Gupta" },
        { imgSrc: "oMember4.jpg", name: "Kesavarapu Deepak Reddy" },
        { imgSrc: "oMember5.jpg", name: "Sohil Dangi" },
        { imgSrc: "oMember6.jpg", name: "Arnav Verma" },
        { imgSrc: "oMember7.jpg", name: "Jay Vyas" },
      ],
    },
    {
      teamName: "Content and Creative Team",
      teamHead: { name: "K Brahmisree", role: "Content and Creative Head" },
      headImg: "webdesign-head.jpg",
      members: [
        { imgSrc: "wMember1.jpg", name: "Poorvansh Dashore" },
        { imgSrc: "wMember2.jpg", name: "Vedh Nekkanti" },
        { imgSrc: "wMember3.jpg", name: "Devanshi Kawlani" },
        { imgSrc: "wMember3.jpg", name: "Gnanadeep" },
      ],
    },
  ];

  return (
    <section className="teams">
      <h2>Teams</h2>
      {teamsData.map((team, index) => (
        <Team
          key={index}
          teamName={team.teamName}
          teamHead={team.teamHead}
          headImg={team.headImg}
          members={team.members}
        />
      ))}
    </section>
  );
};

export { Teams };