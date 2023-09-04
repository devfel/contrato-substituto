document.getElementById("optionSelect").addEventListener("change", function () {
  let selectedOptionText = this.options[this.selectedIndex].text;
  let selectedValueText = this.value;

  document.getElementById("displayedOption").innerText = selectedOptionText;
  document.getElementById("selectedValue").innerText = selectedValueText;
});

document.getElementById("textField").addEventListener("input", function () {
  document.getElementById("textFieldValue").innerText = this.value || "[Texto]";
});

document.getElementById("generatePDF").addEventListener("click", function () {
  let elementsToHide = document.querySelectorAll(".hide-for-pdf");
  elementsToHide.forEach((el) => {
    el.style.display = "none";
  });

  document.getElementById("textFieldValue").innerText =
    document.getElementById("textField").value;

  window.print();

  setTimeout(function () {
    elementsToHide.forEach((el) => {
      el.style.display = "";
    });
  }, 500);
});
