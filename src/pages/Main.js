import React from "react";

//////////// Components
import { Input } from "./../Components/Input/Input";
import { Button } from "./../Components/Button/Button";
import { TableRow } from "./../Components/TableRow/TableRow";

export const Main = props => {
  return (
    <section className="container">
      <h2 className="text-center">Поиск по списку дел</h2>

      <div className="d-flex align-items-center">
        <Input placeholder="Искать тут!" />
        <Button className="btn-primary" title="Найти!" />
      </div>

      <h2 className="text-center mt-5">Добавь новое дело:</h2>
      <div className="d-flex align-items-center ">
        <Input placeholder="Новое дело писать тут!" />
        <Button className="btn-primary" title="+" />
      </div>

      <table className="table table-bordered mt-3">
        <TableRow
          type="th"
          items={["Id", "Название", "Статус", "Управление"]}
        />
      </table>
    </section>
  );
};
