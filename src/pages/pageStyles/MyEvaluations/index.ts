// styles.ts

export const tableStyles = `
  .table {
    width: 95%;
    margin-bottom: 1rem;
    color: #212529;
    table-layout: fixed;
    border-collapse: collapse;
  }

  .table th,
  .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }

  .table thead th {
    vertical-align: bottom;
    text-align: left;
  }

  .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .data {
    width: 13%;
  }
  .materia {
    width: 55%;
  }
  .professor {
    width: 18%;
  }
  .detalhes {
    width: 10%;
  }

  .data-rows {
    font-weight: 500;
  }

  .table a {
    color: #007bff;
    text-decoration: none;
  }

  .table a:hover {
    color: #0056b3;
    text-decoration: none;
  }
`
