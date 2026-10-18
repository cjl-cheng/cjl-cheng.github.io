const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = new Intl.DateTimeFormat("en", { year: "numeric" }).format(new Date());
}
