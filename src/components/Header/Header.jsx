import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar>
      <Container >
        <Navbar.Brand href="#home">Knowledge Cafe</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <img style={{width: "40px", marginLeft: "1000px"}} src="https://icons-for-free.com/iconfiles/png/256/man+icon-1320184411389497968.png" alt="" />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;