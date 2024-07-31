import { RowID, RowElement } from './interface';
import {insertRow, deleteRow, updateRow} from './crud';

const row : RowElement= {
    firstName: "Guillaume",
    lastName: "Salva"
}

const newRowId: RowID = insertRow(row);

const updatedRow: RowElement = {...row, age: 23 };

updateRow(newRowId, updatedRow);

deleteRow(newRowId);