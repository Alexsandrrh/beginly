$(document).ready(function () {

   let params = $('.params-block'),
       btnParams = $('.search-params'),
       blockVacancy = $('.vacancies'),
       blockFooter = $('.footer');

   btnParams.click(function () {
       params.toggleClass('-active');
       blockVacancy.toggleClass('-active');
       blockFooter.toggleClass('-active');
   });
});