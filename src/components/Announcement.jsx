
import styled from 'styled-components';

const Container = styled.div`
    height: 40px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    justify-content: center;

`

const Announcement = () => {
  return (
    <Container>Super Deal! Free Shipping on Order Over $50</Container>
  )
}

export default Announcement