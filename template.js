const HomePage = (id) => {
  return `<div style="display:flex; flex-direction:column; align-items:center"> <h1>Warranty Registration</h1>
    <form style="display:flex; flex-direction:column; gap:1em; width:45%" action="/" method="post">
      <input style="padding: 10px 20px" type="text" name="serialNumber" value="${id}">
      <input style="padding: 10px 20px" type="text" name="name" placeholder="Name">
      <input style="padding: 10px 20px" type="text" name="email" placeholder="Email">
      <input style="padding: 10px 20px" type="text" name="product" placeholder="Product">
      <input style="padding: 10px 20px" type="date" name="purchaseDate" placeholder="Purchase Date">
      <input style="padding: 10px 20px" type="number" name="warrantyPeriod" placeholder="Warranty Period">
      <button style="padding: 10px 20px" type="submit">Submit</button>
    </form>
    </div>
    `;
};

const Login = () => {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>Login</title>
  </head>
  <body style="display:flex; flex-direction:column; align-items:center">
    <h1>Login</h1>
    <form style="display:flex; flex-direction:column; gap:1em; width:45%" action="/login" method="post">
        <label for="email">Email:</label>
        <input style="padding: 10px 20px"  type="email" name="email" id="email" required>
        <label for="password">Password:</label>
        <input style="padding: 10px 20px"  type="password" name="password" id="password" required>
      <button style="padding: 10px 20px" type="submit">Login</button>
    </form>
  </body>
</html>`;
};

const WarrantyTable = (warranties = []) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>Login</title>
  <style>
  table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
}

  </style>
  </head>
  <body>
  <table>
  <thead>
    <tr>
      <th>Serial ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Product Name</th>
      <th>Purchase Date</th>
      <th>Warranty Period</th>
    </tr>
  </thead>
  <tbody>
 ${warranties
   .map(
     (item) =>
       `<tr>
       <td>${item.serialNumber}</td>
       <td>${item.name}</td>
       <td>${item.email}</td>
       <td>${item.product}</td>
       <td>${new Date(item.purchaseDate).toLocaleDateString()}</td>
       <td>${item.warrantyPeriod}</td>
     </tr>`
   )
   .join('')}
  </tbody>
</table>
</body>
</html>
  `;
};

module.exports = {
  HomePage,
  Login,
  WarrantyTable,
};
