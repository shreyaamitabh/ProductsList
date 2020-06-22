import React from "react";
import BTable from "react-bootstrap/Table";
import "./Table.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  renderProduct = (items, action) => {
    return items.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <img src={item.image} />
          </td>
          <td>
            <p id="first" class="textAlign">
              <b>Name</b>: {item.name}
            </p>
            <p class="textAlign">
              <b>Category</b>: {item.category}
            </p>
          </td>
          <td>
            <p id="first" class="textAlign">
              <b>Quantity </b>
            </p>
            <input
              class="textAlign"
              id="inputField"
              type="text"
              value={item.quantity}
              onChange={(e) => action(e, item.id)}
            />
          </td>
        </tr>
      );
    });
  };
  render() {
    const { items, action, action1 } = this.props;
    return (
      <BTable id="table" hover>
        <thead>
          <tr id="rowHeader">
            <th id="product">
              <p>Products</p>
            </th>
            <th></th>
            <th>
              <DropdownButton id="dropdown-basic-button" title="Categories">
                <Dropdown.Item onClick={() => action1("")}>
                  All Products
                </Dropdown.Item>
                <Dropdown.Item onClick={() => action1("Milk")}>
                  Milk
                </Dropdown.Item>
                <Dropdown.Item onClick={() => action1("Rice")}>
                  Rice
                </Dropdown.Item>
                <Dropdown.Item onClick={() => action1("Biscuit")}>
                  Biscuit
                </Dropdown.Item>
              </DropdownButton>
            </th>
          </tr>
        </thead>
        <tbody>{this.renderProduct(items, action)}</tbody>
      </BTable>
    );
  }
}
export default Table;
