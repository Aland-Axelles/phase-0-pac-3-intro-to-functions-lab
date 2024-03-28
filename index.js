function shout(parameter) {
  return parameter.toUpperCase();
}

function whisper(parameter) {
  return parameter.toLowerCase();
}


function logShout(parameter) {
    const newParameter = parameter.toUpperCase();
  console.log(newParameter)
}


function logWhisper(parameter) {
    const newParameter = parameter.toLowerCase();
  console.log(newParameter)
}

function sayHiToHeadphonedRoommate(parameter) {
  if ( parameter === parameter.toLowerCase() ) {
    return "I can't hear you!"
  } if (parameter === parameter.toUpperCase() ) {
    return "YES INDEED!"
  } if ( parameter = "Let's have dinner together!") {
    return "I would love to!"
  }
}



console.log(shout("aland"));
console.log(whisper("alaNd"));
logShout("alandd");
logWhisper("alandD");

/* 
describe('sayHiToHeadphonedRoommate(string)', function() {
    it('returns "I can\'t hear you!" if `string` is lowercase', function() {
      expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
    })
  
    it('returns "YES INDEED!" if `string` is uppercase', function() {
      expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
    })
  
    it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
      expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
        "I would love to!"
      );
    });
  }) */