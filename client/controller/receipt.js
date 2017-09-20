angular.module('mealpal')
  .controller('ReceiptController', function($scope, $location) {
    var id = $location.url().slice(9);
    // console.log(id)

    this.$onInit = () => {
      axios.get(`/receipt/${id}`)
      .then(items => {
        console.log('items', items)
        $scope.$apply(() => {
          this.payers = items.data.dinerArray;
          console.log('now payers is', this.payers);
        })
        // console.log(this.payers)
      })
      .catch(err => {
        console.log('receipt get error', err);
      })
    }
  })
