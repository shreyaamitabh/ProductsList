import React from "react";
import BTable from "react-bootstrap/Table";
import './Table.css'
class Table extends React.Component {
    constructor(props)
    {
        super(props);

    }
    renderProduct = (items, action) => {
        return items.map((item, index) => {
          return (
            <tr key={index}>
              <td><img src={item.image}/></td>
              <td><p class="textAlign">{item.name}</p></td>
              <td><p class="textAlign">{item.category}</p></td>
              <td>
                <input class="textAlign" id="inputField"
                  type="text"
                  value={item.quantity}
                  onChange={e => action(e,item.id)}
                />
              </td>
            </tr>
          );
        });
      };
    render(){
        const{items, action}= this.props;
        return(
            <BTable  bordered hover >
                <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderProduct(items, action)}
        </tbody>
            </BTable>
        )
    }
}
export default Table