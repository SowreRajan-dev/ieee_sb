import React from "react";
import styled from "styled-components";
import {
  Student_branch_chapter_advisor,
  student_branch_executive_committee,
  student_branch_members,
} from "../Data/updatedMembers";

function Members() {
  return (
    <>
    <MembersTag id = "members"/>
    <MembersContainer>
      <MemberHead>Members</MemberHead>
      <MemberSection>
        <SbBranchExcutive>
          <SbHead>Student Branch Executive Comittee</SbHead>
          <SbExecMembers>
            {student_branch_executive_committee.map((member, index) => (
              <SbExecMember key={index}>
                <SbExecMemberImage
                  src={member.imageUrl}
                  alt={member.member_name}
                />
                <SbExecMemberName>{member.member_name}</SbExecMemberName>
                <SbExecMemberDesig>{member.desig}</SbExecMemberDesig>
              </SbExecMember>
            ))}
          </SbExecMembers>
        </SbBranchExcutive>
        <br />
        <br />
        <SbChapterAdvisors>
          <SbHead>Student Branch Chapter Advisors</SbHead>
          <SbChapterAdvisorMembers>
            {Student_branch_chapter_advisor.map((member, index) => (
              <SbChapterAdvisorMember key={index}>
                <SbChapterAdvisorImage
                  src={member.imageUrl}
                  alt={member.member_name}
                />
                <SbChapterAdvisorName>
                  {member.member_name}
                </SbChapterAdvisorName>
                <SbChapterAdvisorDesig>{member.desig}</SbChapterAdvisorDesig>
              </SbChapterAdvisorMember>
            ))}
          </SbChapterAdvisorMembers>
        </SbChapterAdvisors>
        <br />
        <br />
        <SbBranchembers>
          <SbHead>Student Branch Members</SbHead>
          <SbMemberContainer>
            <SbMemberslist>
              {student_branch_members.map((member, index) => (
                <SbMemberProfile key={index}>
                  <SbMemberPic src={member.imageUrl} alt="stb" />
                  <SbDesc>
                    <SbMemberName>{member.member_name}</SbMemberName>
                    <SbDesig>{member.desig}</SbDesig>
                  </SbDesc>
                </SbMemberProfile>
              ))}
            </SbMemberslist>
          </SbMemberContainer>
        </SbBranchembers>
      </MemberSection>
    </MembersContainer>
    </>
  );
}

export default Members;

const MembersTag = styled.div``

const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top:10rem;
`;
const MemberHead = styled.p`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;

  font-family: "Montserrat", sans-serif;
  color: #005f94;
`;
const MemberSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SbBranchExcutive = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
`;
const SbHead = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;

  font-family: "Montserrat", sans-serif;
  color: #005f94;
`;

const SbExecMembers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    margin: 20px 0;
  }
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    margin: 20px 0;
  }
`;
const SbExecMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  width: 100%;
  height: 100%;
  margin-right: 1rem;
  margin-left: 1rem;
`;
const SbExecMemberImage = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
const SbExecMemberName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
  font-family: "Montserrat", sans-serif;
  color: #000;
`;
const SbExecMemberDesig = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  color: #000;
`;

const SbChapterAdvisors = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;

const SbChapterAdvisorMembers = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    margin: 20px 0;
  }
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    margin: 20px 0;
  }
`;

const SbChapterAdvisorMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-right: 1rem;
  margin-left: 1rem;
`;

const SbChapterAdvisorImage = styled.img`
  object-fit: cover;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
`;

const SbChapterAdvisorName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "Montserrat", sans-serif;
  color: #000;
`;

const SbChapterAdvisorDesig = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  color: #000;
`;

const SbBranchembers = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const SbMemberContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SbMemberProfile = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const SbMemberPic = styled.img`
  border-radius: 50%;
  width: 130px;
  height: 130px;
`;

const SbDesig = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  color: #000;
`;

const SbMemberName = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  color: #000;
  font-weight: 600;
`;

const SbDesc = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

const SbMemberslist = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  place-items: center;
  padding: 10px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
`;
