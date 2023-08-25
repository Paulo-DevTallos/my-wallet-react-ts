import { Table, TableHeadColumn } from "./styles"

export const TableArea = () => {
    return(
        <Table>
            <thead>
                <tr>
                    <TableHeadColumn width={100}>Data</TableHeadColumn>
                    <TableHeadColumn width={130}>Categoria</TableHeadColumn>
                    <TableHeadColumn>Título</TableHeadColumn>
                    <TableHeadColumn width={150}>Valor</TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                <td>

                </td>
            </tbody>
        </Table>
    )
}