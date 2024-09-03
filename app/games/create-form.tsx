"use client";

export default function Form() {
  return (
    <div>
      <h1>Form</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Description:
          <input type="text" name="description" />
        </label>
        <label>
          Image:
          <input type="text" name="image" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
