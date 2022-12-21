import React from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
function MainPage({ time }) {
  let { id } = useParams();
  if (!id || id > 4 || id < 1) {
    id = 1;
  }
  return (
    <div>
      <h3>Комната учатника {id}</h3>
      <div className="bg-danger bg-opacity-10 d-flex justify-content-center align-items-center timer mx-auto mt-4 position-relative rounded">
        <p className="m-0">{time}</p>
        <i className="fa-regular fa-hourglass-half position-absolute top-50 timer-icon translate-middle-y"></i>
      </div>
      <div>
        {" "}
        Для того, чтобы посмотреть другую комнаты, введите номер комнату через /
      </div>
      <div className=" mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</th>
              <th>УЧАСТНИК 1</th>
              <th>УЧАСТНИК 2</th>
              <th>УЧАСТНИК 3</th>
              <th>УЧАСТНИК 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Наличие комплекса мероприятий, повышающих стандарты качества
                изготовления
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Срок изготовления лота, дней</td>
              <td>80</td>
              <td>90</td>
              <td>75</td>
              <td>120</td>
            </tr>
            <tr>
              <td>Гарантийные обязательства, мес</td>
              <td>24</td>
              <td>24</td>
              <td>22</td>
              <td>36</td>
            </tr>
            <tr>
              <td>Условия оплаты</td>
              <td>30%</td>
              <td>100%</td>
              <td>60%</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Стоимость изготовления лота, руб (без НДС)</td>
              <td>
                <p className="m-0 text-primary">3,700,000 руб</p>
                <p className="m-0 text-danger">-25,000 руб</p>
                <p className="m-0 text-success">2,475,000 руб</p>
              </td>
              <td>
                <p className="m-0 text-primary">3,700,000 руб</p>
                <p className="m-0 text-danger">-25,000 руб</p>
                <p className="m-0 text-success">2,475,000 руб</p>
              </td>
              <td>
                <p className="m-0 text-primary">3,700,000 руб</p>
                <p className="m-0 text-danger">-25,000 руб</p>
                <p className="m-0 text-success">2,475,000 руб</p>
              </td>
              <td>
                <p className="m-0 text-primary">3,700,000 руб</p>
                <p className="m-0 text-danger">-25,000 руб</p>
                <p className="m-0 text-success">2,475,000 руб</p>
              </td>
            </tr>
            <tr>
              <td>Действия</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default MainPage;
