<template >   
<div>
  <h2 class="pt-5">Admin Page</h2>
  <h3 class="pt-2">Users</h3>
  <button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Add User</button>
<table class="table w-50 mx-auto p-5">
  <thead>
    <tr class="bg-dark text-white-50">
      <th scope="col">UserID</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Gender</th>
      <th scope="col">Cellphone</th>
      <th scope="col">UserPass</th>
      <th scope="col">UserRole</th>
      <th scope="col">UserProfile</th>
      <th scope="col">JoinDate</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Delete</button></td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Edit</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Delete</button></td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Edit</button></td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Delete</button></td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Edit</button></td>
    </tr>
    
  </tbody>
</table>
</div>	
<div class="">

  <h3 class="pt-2">Products</h3>
  <button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Add Product</button>
<table class="table w-50 mx-auto p-5">
  <thead>
    <tr class="bg-dark text-white-50">
      <th scope="col">ID</th>
      <th scope="col">prodName</th>
      <th scope="col">prodDescription</th>
      <th scope="col">category</th>
      <th scope="col">price</th>
      <th scope="col">prodQuantity</th>
      <th scope="col">imgURL</th>
      <th scope="col">userId</th>c
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Delete</button></td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Edit</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Delete</button></td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Edit</button></td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Delete</button></td>
      <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Edit</button></td>
    </tr>
    
  </tbody>
</table>
</div>			
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .table{
      margin-top: 3%;
    }
</style>