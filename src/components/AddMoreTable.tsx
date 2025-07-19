import { useEffect, useMemo, useState } from "react";
import { IAddMoreTable, IInput, IThead } from "../utils/types";
import Input from "./Input";

const AddMoreTable = (props: IAddMoreTable) => {
  const { containerClassName, thead = [], tbody = [], onChange } = props;
  const [rows, setRows] = useState<Record<string, any>[]>(tbody || []);

  const memoizedTbody = useMemo(() => tbody, [tbody]);
  const memoizedRows = useMemo(() => rows, [rows]);

  useEffect(() => {
    if (memoizedTbody.length === 0) {
      const newRow = prepareRowObject(`row_1`);
      setRows([newRow]);
    }
  }, [memoizedTbody]);

  useEffect(() => {
    onChange && onChange(memoizedRows);
  }, [memoizedRows]);

  const prepareRowObject = (id: string) => {
    return thead.reduce(
      (acc: Record<string, any>, curr) => {
        acc[curr.name] = null;
        return acc;
      },
      { row_id: id }
    );
  };

  const addRow = () => {
    setRows((rows) => {
      const lastRowId = rows.at(-1)?.row_id;
      const nextId = parseInt(lastRowId.split("_")[1]) + 1;
      const newRow = prepareRowObject(`row_${nextId}`);
      return [...rows, newRow];
    });
  };

  const deleteRow = (id: string) => {
    setRows((rows) => rows.filter((e) => e.row_id !== id));
  };

  const handleChange = (id: string, name: string, value: string | number) => {
    setRows((rows) => {
      return rows.map((row) => {
        if (row.row_id === id) {
          row[name] = value;
        }
        return row;
      });
    });
  };

  const renderField = (head: IThead, row: Record<string, any>) => {
    if (head.element === "input") {
      const node = head as IInput;
      return (
        <Input
          {...node}
          label=""
          value={row?.[node?.name] || ""}
          className="border-none !ring-0 !p-0 !px-2"
          onChange={(value) => handleChange(row.row_id, node.name, value)}
        />
      );
    }
    return <></>;
  };
  return (
    <div className={`${containerClassName}`}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            {thead.map((head) => (
              <th key={head.name}>{head.label}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            return (
              <tr key={row.row_id}>
                <td className="text-center text-xs">{i + 1}</td>
                {thead.map((head) => (
                  <td key={head.name}>{renderField(head, row)}</td>
                ))}
                <td>
                  <div className="flex items-center gap-1">
                    {!(i === 0 && rows.length === 1) && (
                      <button
                        onClick={() => deleteRow(row.row_id)}
                        className="btn-table-action remove"
                      >
                        x
                      </button>
                    )}
                    <button onClick={addRow} className="btn-table-action add">
                      +
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AddMoreTable;
