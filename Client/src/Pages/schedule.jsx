import styled from 'styled-components';
import scheduleBackgroundImage from '../assets/schedule_background.png';

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const HeaderContainer = styled.div`
  width: 100%;

  display:flex;
  justify-content: center;
`
const ScheduleHeader = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 483px;

  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
`

const Divider = styled.div`
  height: 15px;
  width: 100%;
  
  background-color: #4275EC;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 10px;

  margin-top: 5px;
  margin-bottom: 30px;
`

const ScheduleParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%; 
  padding-bottom: 25px;

  background-image: url(${scheduleBackgroundImage});
  background-size: cover;
  background-position: center;
`

const ScheduleContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  padding-left: 25px;
  padding-right: 25px;
  margin-top: 25px;

  @media (max-width: 1040px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`

const ScheduleGridItem = styled.div`
  border-style: solid;
  border-width: 3px;
  border-color: #4275EC;
  border-radius: 10px;

  padding: 20px;

  width: 483px;

  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1040px) {
    width: 100%;
  }
`

const ScheduleGridItemUpper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 20px;
`

const ScheduleGridItemLower = styled.div`
  font-size: 30px;
`

const ScheduleGridItemInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  font-weight: 500;
`

const DateContainer = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 32px;
`

const schedule28th = [
  {
    title: "Check-In Starts",
    time: "12:00 PM",
    location: "Location"
  },
  {
    title: "Welcome Ceremony",
    time: "1:00 - 1:30 PM",
    location: "Location"
  },
  {
    title: "Hacking Begins",
    time: "1:30 PM",
    location: "Location"
  },
  {
    title: "Hacking Begins",
    time: "1:30 PM",
    location: "Location"
  },
  {
    title: "Hacking Begins",
    time: "1:30 PM",
    location: "Location"
  },
  {
    title: "Hacking Begins",
    time: "1:30 PM",
    location: "Location"
  }
]

const dates = [
  {
    date: "Friday, March 28th",
    events: schedule28th
  },
  {
    date: "Friday, March 29th",
    events: schedule28th
  },
  {
    date: "Friday, March 30th",
    events: schedule28th
  },
  {
    date: "Friday, March 31st",
    events: schedule28th
  }
]

export default function Schedule() {
  return (
    <MainContainer>
      <HeaderContainer>
        <ScheduleHeader>
          Schedule
          <Divider/>
        </ScheduleHeader>
      </HeaderContainer>
      <ScheduleParentContainer>
        <ScheduleContainer>
          {dates.map((d) => (
            <ScheduleGridItem>
              <DateContainer>
                {d.date}
              </DateContainer>
              <Divider/>
              <ScheduleGridItemInner>
                {d.events.map((s) => (
                  <div>
                    <ScheduleGridItemUpper>
                      <span>{s.time}</span>
                      <span>{s.location}</span>
                    </ScheduleGridItemUpper>
                    <ScheduleGridItemLower>
                      {s.title}
                    </ScheduleGridItemLower>
                  </div>
                ))}
              </ScheduleGridItemInner>
            </ScheduleGridItem>
          ))}
        </ScheduleContainer>
      </ScheduleParentContainer>
    </MainContainer>
  )
}
