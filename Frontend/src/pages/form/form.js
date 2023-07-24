export default function Form() {
  return (
    <div>
      <h1>Test Form</h1>
      <form action="/api/cardAdd" method="post">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          aria-errormessage="empty_name"
          aria-invalid="true"
          required
        />
        <div id="empty_name">This field is required</div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          aria-errormessage="empty_image"
          aria-invalid="true"
          required
        />
        <div id="empty_image">This field is required</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
