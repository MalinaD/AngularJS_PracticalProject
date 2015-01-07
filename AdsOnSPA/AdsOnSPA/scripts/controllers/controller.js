it('should initialize to model', function () {
    var currentUser = element(by.binding('currentUser'));
    var valid = element(by.binding('myForm.input.$valid'));

    expect(currentUser.getText()).toContain('user');
    expect(valid.getText()).toContain('true');
});

it('should be invalid if empty', function () {
    var currentUser = element(by.binding('currentUser'));
    var valid = element(by.binding('myForm.input.$valid'));
    var userInput = element(by.model('currentUser'));

    userInput.clear();
    userInput.sendKeys('');

    expect(currentUser.getText()).toEqual('currentUser =');
    expect(valid.getText()).toContain('false');
});

