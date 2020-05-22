import React from 'react';
import { Table,Button } from 'reactstrap';
import {
  Link
} from "react-router-dom";
export default class RecipieTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
    <>
      <div>
        <Button className="mt-5" tag={Link} to="/create" color="primary">Add New Recipie</Button>
      </div>
      <Table striped hover className="">
        <thead>
          <th>Catagory</th>
          <th>Type</th>
          <th>Name</th>
          <th>Keywords</th>
        </thead>
        <tbody>
          <tr>
            <td>Dinner</td>
            <td>Meat</td>
            <td>Chicken Parm</td>
            <td>Chicken, Cheese, Pasta</td>
          </tr>
        </tbody>
      </Table>
    </>

    )

  }
}
