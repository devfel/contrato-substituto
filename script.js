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
  window.print();
});
