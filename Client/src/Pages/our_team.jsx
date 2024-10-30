import ourTeamUserImage from "/src/assets/our_team_user.png"
import styled from "styled-components"

const TeamContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 3rem 1rem;
  color: white;
  background: url('/src/assets/about_background.png') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  border-bottom: 6px solid #3B82F6;
  padding-bottom: 0.5rem;
`

const Description = styled.p`
  max-width: 900px;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
  text-align: center;
  border-bottom: 4px solid #3B82F6;
  padding-bottom: 0.5rem;
  width: fit-content;
`

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
`

const TeamRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`

const TeamMemberCard = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #3B82F6;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const MemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`

const MemberName = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0.5rem 0;
`

const MemberRole = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
`

export default function OurTeam() {
  const teamLead = Array(7).fill({ name: "Name Here", role: "Project Manager" })
  const organizers = Array(7).fill({ name: "Name Here", role: "Project Manager" })
  const volunteers = Array(7).fill({ name: "Name Here", role: "Project Manager" })

  return (
    <TeamContainer>
      <Title>Our Team</Title>
      <Description>
        We are incredibly proud of the dedicated team that made this hackathon possible. From initial planning
        to final execution, each team member brought their unique skills, passion, and tireless commitment to
        ensure this event was a success. We would like to extend our gratitude to the volunteers, mentors,
        and sponsors who supported this valuable project along the way. Your hard work, creativity, and
        determination have created a welcoming space for innovation, learning, and collaboration. Thank you for
        bringing this vision to life and inspiring the CUNY community to dream big and achieve together!
      </Description>

      <SectionTitle>Team Lead</SectionTitle>
      <TeamGrid>
        <TeamRow>
          {teamLead.slice(0, 4).map((member, index) => (
            <TeamMemberCard key={index}>
              <MemberImage src={ourTeamUserImage} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </TeamMemberCard>
          ))}
        </TeamRow>
        <TeamRow>
          {teamLead.slice(4).map((member, index) => (
            <TeamMemberCard key={index}>
              <MemberImage src={ourTeamUserImage} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </TeamMemberCard>
          ))}
        </TeamRow>
      </TeamGrid>

      <SectionTitle>Organizers</SectionTitle>
      <TeamGrid>
        <TeamRow>
          {organizers.slice(0, 4).map((member, index) => (
            <TeamMemberCard key={index}>
              <MemberImage src={ourTeamUserImage} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </TeamMemberCard>
          ))}
        </TeamRow>
        <TeamRow>
          {organizers.slice(4).map((member, index) => (
            <TeamMemberCard key={index}>
              <MemberImage src={ourTeamUserImage} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </TeamMemberCard>
          ))}
        </TeamRow>
      </TeamGrid>

      <SectionTitle>Volunteers</SectionTitle>
      <TeamGrid>
        <TeamRow>
          {volunteers.slice(0, 4).map((member, index) => (
            <TeamMemberCard key={index}>
              <MemberImage src={ourTeamUserImage} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </TeamMemberCard>
          ))}
        </TeamRow>
        <TeamRow>
          {volunteers.slice(4).map((member, index) => (
            <TeamMemberCard key={index}>
              <MemberImage src={ourTeamUserImage} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </TeamMemberCard>
          ))}
        </TeamRow>
      </TeamGrid>
    </TeamContainer>
  )
}