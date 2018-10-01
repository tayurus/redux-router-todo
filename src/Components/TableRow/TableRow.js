import React from 'react';

// Components
import { Button } from "./../Button/Button";

export const TableRow = props => {
    return (
      <tr>
        {props.type === "th" && props.items.map(th => <th>{th}</th>)}
        {props.type === "td" && props.items.map(td => <td>{td}</td>)}
        {
          props.type === "td editable" && props.map(td => <td>{td}</td>)
          && <Button title='✎' className="btn-warning" onClick={props.onEditClick}/>
          && <Button title='x' className="btn-danger" onClick={props.onRemoveClick}/>
        }
      </tr>
    );

};
