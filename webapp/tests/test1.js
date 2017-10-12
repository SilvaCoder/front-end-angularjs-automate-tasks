describe('check people on people\'s page', function() {
  it('should show all persons', function() {
    browser.get('https://localhost:8090/');

    var completedAmount = element.all(by.css('.person'));
    expect(completedAmount.count()).toEqual(10);  

  });
});