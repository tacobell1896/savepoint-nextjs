"use client";

export default function Form() {
  return (
    <div>
      <h1>Form</h1>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Contents:
          <input type="text" name="contents" />
        </label>
        <label>
          Game:
          <select name="game">
            <option value="1">Game 1</option>
            <option value="2">Game 2</option>
            <option value="3">Game 3</option>
          </select>
        </label>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
