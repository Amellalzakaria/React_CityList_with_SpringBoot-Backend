
import React from 'react';
import { Table } from 'react-bootstrap';


const CityList = ({ cities }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Population</th>
                    {/* Add other column headers as needed */}
                </tr>
            </thead>
            <tbody>
                {cities?.map((city, index) => (
                    <tr key={city.id}>
                        <td>{index + 1}</td>
                        <td>{city.name}</td>
                        <td>{city.population}</td>
                        {/* Add other data cells as needed */}
                    </tr>
                ))}
            </tbody>
        </Table>
    );

};

export default CityList;