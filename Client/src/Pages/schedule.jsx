// import React from 'react'
import styled from 'styled-components';

// For CSS styling, follow format below to prevent mergin conflict.
// Make sure you only code on your designated page. Don't Change any other file.*
// delete below when done
const Example_div = styled.div`
  color: red;
`

const ScheduleContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`

const ScheduleHeader = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 25px;
`

const Divider = styled.div`
  min-height: 14px;
  width: 100%;
  max-width: 383px;
  
  background-color: #4275EC;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 10px;
`

export default function Schedule() {
  return (
    <ScheduleContainer>
      <ScheduleHeader>
        Schedule
        <Divider>
        </Divider>
      </ScheduleHeader>
    </ScheduleContainer>
  )
}
