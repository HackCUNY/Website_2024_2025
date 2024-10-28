import styled from 'styled-components';
import { useState } from 'react';

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
`

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  border-bottom: 6px solid #3B82F6;
  padding-bottom: 0.5rem;
`

const FAQItem = styled.div`
  margin-bottom: 1rem;
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 4px;
`

const Question = styled.div`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #3B82F6;
  border-radius: 4px;

  &:hover {
    background-color: rgba(59, 130, 246, 0.2);
  }
`

const PlusIcon = styled.span`
  color: #3B82F6;
  font-size: 1.5rem;
  font-weight: bold;
  transition: transform 0.3s ease;
  transform: rotate(${props => props.isOpen ? '45deg' : '0'});
`

const Answer = styled.div`
  padding: ${props => props.isOpen ? '1rem' : '0'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${props => props.isOpen ? '1' : '0'};
  border-top: ${props => props.isOpen ? '1px solid rgba(59, 130, 246, 0.3)' : 'none'};
`

function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is HackCUNY?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      question: "When is HackCUNY?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
    },
    {
      question: "What if I haven't been to a Hackathon before?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor."
    },
    {
      question: "Am I available to apply?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "How do Teams work?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "When is the registration deadline?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      question: "What if I don't have a team?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      question: "Where can I go if I have more questions?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      question: "What are the rules?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>
      {faqData.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleFAQ(index)}>
            {faq.question}
            <PlusIcon isOpen={openIndex === index}>+</PlusIcon>
          </Question>
          <Answer isOpen={openIndex === index}>
            {faq.answer}
          </Answer>
        </FAQItem>
      ))}
    </FAQContainer>
  )
}

export default FAQS
