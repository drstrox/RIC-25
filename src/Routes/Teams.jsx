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
      teamName: "Marketing",
      teamHead: { name: "John Doe", role: "Marketing Head" },
      headImg: "marketing-head.jpg",
      members: [
        { imgSrc: "mkMember1.jpg", name: "Jane Smith" },
        { imgSrc: "mkMember2.jpg", name: "Robert Brown" },
        { imgSrc: "mkMember3.jpg", name: "Emily Davis" },
        { imgSrc: "mkMember4.jpg", name: "Michael Lee" },
      ],
    },
    {
      teamName: "Outreach",
      teamHead: { name: "John Doe", role: "Outreach Head" },
      headImg: "Outreach-head.jpg",
      members: [
        { imgSrc: "oMember1.jpg", name: "Jane Smith" },
        { imgSrc: "oMember2.jpg", name: "Robert Brown" },
        { imgSrc: "oMember3.jpg", name: "Emily Davis" },
        { imgSrc: "oMember4.jpg", name: "Michael Lee" },
        { imgSrc: "oMember5.jpg", name: "Sarah Wilson" },
        { imgSrc: "oMember6.jpg", name: "David Martinez" },
        { imgSrc: "oMember7.jpg", name: "Laura Moore" },
      ],
    },
    {
      teamName: "Web Design",
      teamHead: { name: "John Doe", role: "Web Design Head" },
      headImg: "webdesign-head.jpg",
      members: [
        { imgSrc: "wMember1.jpg", name: "Jane Smith" },
        { imgSrc: "wMember2.jpg", name: "Robert Brown" },
        { imgSrc: "wMember3.jpg", name: "Emily Davis" },
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