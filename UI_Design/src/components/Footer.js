import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/AI.jpg' alt='' />

        <Flex>
          <ul>
            <li>
            AI refers to simulation of human intelligence in machines to think like humans which may also be applied to any machine that exhibits traits associated with a human mind.
            </li>
            <li>+1-123-456-7890</li>
            <li>info@CyberAI.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Our Services</li>
            <li>What We Do</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2022 Cyber AI. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}
