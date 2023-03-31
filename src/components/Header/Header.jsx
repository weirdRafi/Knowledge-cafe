import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className='border m-2 '>
      <Container className='d-flex justify-content-between'>
        <h3>Knowledge Cafe</h3>
        <div><img style={{width: "60px"}} src="https://icons-for-free.com/iconfiles/png/256/man+icon-1320184411389497968.png" alt="" /></div>
      </Container>
    </Navbar>
  );
}


export default Header;