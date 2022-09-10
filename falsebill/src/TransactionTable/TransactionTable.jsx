import React from 'react'
import Table from 'react-bootstrap/Table';
import TransactionTableElement from './TransactionTableElement';

function TransactionTable({transactionList}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Detail</th>   
          <th>Billed at</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {transactionList?.map((e) => {
            console.log(e);
            return (
                <TransactionTableElement data={e}/>
            )
        })}
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TransactionTable;