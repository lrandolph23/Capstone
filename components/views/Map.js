import html from "html-literal";
export default (state) => html`
<h1>Share Your Experience</h1>
<section id="exps" class="container">
<form id="exps" class="left" method="POST" action="">
<h3>Experience Submission Form</h3>
<div class=left>
    <label for="who">Type:</label>
    <input
      type="radio"
      id="radio2"
      class="list1"
      name="exp"
      value="Alien"
    />
    <label for="who1">Alien</label>
    <input
      type="radio"
      id="radio3"
      class="list1"
      name="exp"
      value="Bigfoot"
    />
    <label for="who2">Bigfoot</label>
    <input
      type="radio"
      id="radio4"
      class="list1"
      name="exp"
      value="Ghost"
    />
    <label for="who3">Ghost</label>
    <!-- Other button
    <input
      type="radio"
      id="radio5"
      class="list1"
      name="exp"
      />
    <label for="who4">Other</label> -->
   <!-- Hidden other textbox -->
   <input
      type="text"
      id="radio6"
      class="list1"
      name="exp"
      placeholder="Other"
    />
</div>
<div class=left>
    <label for="where">Location:</label>
    <input
      type="text"
      name="where"
      id="where"
      placeholder="Experience Location"
      required
    />
</div>
<div class=left>
    <label for="what">Experience:</label>
    <input
      type="text"
      name="what"
      id="what"
      placeholder="What Happened"
      required
    />
</div>
  <input type="submit" name="submit" value="Submit Experience" />
</form>
</div>

<div class="right">
  <h3>Experience Submissions</h3>
<table id="expPost">
<tr>
  <td id="tbl">Who</td>
  <td id="tbl">Where</td>
  <td id="tbl">What</td>
</tr>
 ${state.exps
  .map(exp => {
    return `<tr><td>${exp.who}</td><td>${exp.where}</td><td>${exp.what}</td>`;
  })
  .join("")}
</table>
</div>
</section>
`;
