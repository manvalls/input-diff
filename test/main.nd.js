var t = require('u-test'),
    assert = require('assert'),
    diff = require('../main.js');

function test(oldValue,newValue){
  var data = diff.get(oldValue,newValue);
  assert.strictEqual(diff.apply(oldValue,data),newValue);
}

t('Basic',function(){
  test('fooo','bar');
  test('bar','fooo');
  test('Hi','Hi there!');
  test('Hi there!','Hi');
  test('Hi','');
  test('','Hi');
  test('Hi there!','Hiiii there!');
  test('Hiiii there!','Hi there!');
  test('Hello world!','Hello! :)');
});
