import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { finishAct, delAct } from "../redux/act-slice";
import { Table, Button } from "react-bootstrap";

const ListAct = () => {
  const activities = useSelector((state) => state.activities.activities);
  const dispatch = useDispatch();

  return (
    <div className="pt-3 list-act">
      <Table striped bordered variant="light">
        <thead>
          <tr>
            <th style={{ width: "5px" }} className="text-center">
              No
            </th>
            <th>Activities</th>
            <th className="text-center">Status</th>
            <th className="text-danger text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((v, i) => {
            return (
              <tr key={i + 1}>
                <th style={{ width: "5px" }} className="text-center">
                  {i + 1}
                </th>
                {!v.status ? (
                  <td style={{ width: "20rem" }}>{v.act}</td>
                ) : (
                  <th style={{ width: "20rem" }} className="text-success">
                    {v.act}
                  </th>
                )}

                <td className="text-center">
                  <Button
                    style={{ background: "none", border: "none" }}
                    onClick={() => dispatch(finishAct(v.act))}
                  >
                    <i
                      className={
                        (v.status
                          ? "bi bi-check-square-fill text-primary"
                          : "bi bi-check-square text-dark") + " fs-5"
                      }
                    />
                  </Button>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "none", border: "none" }}
                    onClick={() => dispatch(delAct(v.act))}
                  >
                    <i className="text-danger fs-5 bi bi-x-square-fill"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
          {!activities.length ? (
            <tr>
              <td colSpan={4} className="text-center">
                Empty
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>
    </div>
  );
};

export default ListAct;
