import React , { Fragment} from "react";
import './Header.css'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
class Header extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        const {action}= this.props;
        return(
            <Fragment>
                <Jumbotron id="jumboContainer" fluid>
                    <Container>
                        <h1>Products List</h1>
                <div class="d-flex justify-content-around mt-5">
                 <Button  variant="info" onClick={()=>action("")}>All Categories</Button>
                 <Button  variant="info" onClick={()=>action("Milk")}>Milk</Button>
                 <Button variant="info" onClick={()=>action("Biscuit")}>Biscuit</Button>
                 <Button variant="info" onClick={()=>action("Rice")}>Rice</Button>
                 </div>
                    </Container>
                </Jumbotron>
            </Fragment>
        )
    }
}
export default Header