<form action="/api/cardAdd" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
    <br />
  </input>
  <label for="image">Image:</label>
  <input type="text" id="image" name="image" required>
    <br />
  </input>
  <button type="submit">Submit</button>
</form>;

// use testing playground to find correct jest syntax
// screen.findbyrole('input type equivilent', {name: 'name of input'})
// user.type() is the event handler for input fields
