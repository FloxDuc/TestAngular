// spec.js
xdescribe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function() {
   firstNumber.sendKeys(4);
   secondNumber.sendKeys(6);
   goButton.click();

    // Fill this in.
   expect(latestResult.getText()).toEqual('10');
  });
});

xdescribe('Protractor Demo App v2', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a history', function() {
    add(1, 2);
    add(3, 4);

    expect(history.count()).toEqual(2);

    add(5, 6);

    expect(history.count()).toEqual(3);
  });
});


describe('Protractor My App ', function() {
  var menuLink = element(by.id('menuLink'));
  var gazLink = element(by.id('gazLink'));
  var statisticsLink = element(by.id('statisticsLink'));


  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://localhost:4200');
  });

  it('should have a history', function() {
    //go to gazLink
    browser.waitForAngular();
    browser.actions().mouseMove(menuLink).perform();
    browser.waitForAngular();
    gazLink.click().then(function (){
      var gazModelUserName ;//= element(by.model("gaz.userName"));
      expect(null).toBeNull();

    });


  });
});
