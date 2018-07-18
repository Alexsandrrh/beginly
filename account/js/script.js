$(document).ready(function () {
   let params = $('.params-block'),
       btnParams = $('.search-params'),
       blockVacancy = $('.vacancies');
   btnParams.click(function () {
       params.toggleClass('-active');
       blockVacancy.toggleClass('-active');
   });
});