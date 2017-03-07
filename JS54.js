// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        if(cnt==0)
        {
        title += " & Lovin' it!";
          cnt++;
        }
        document
            .querySelector("h1")
            .textContent = title;
      }
      else
      {
        cnt=0;
        var title= "A-025"
        document
        .querySelector("h1")
            .textContent = title;
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);
