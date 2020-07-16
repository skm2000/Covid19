import React from 'react'
import { Container,InputGroup,Row,DropdownButton,Dropdown,FormControl } from 'react-bootstrap';

const CountryPicker = () => {
    return (
        <Container>
            <Row className="pb-2">
                {/* <i class="fas fa-search" aria-hidden="true"></i> */}
                <InputGroup>
                    <FormControl
                    placeholder="Search for countries....."
                    aria-label="Search for countries....."
                    aria-describedby="basic-addon2"
                    />
                    <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title="Search"
                    id="input-group-dropdown-2"
                    >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
            </Row>
        </Container>
    )
}

export default CountryPicker;
