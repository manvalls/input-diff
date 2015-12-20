
function insertionDiff(oldText,newText){
  var oi = 0,
      ni = 0,
      result = [],
      start,part;

  if(!(oldText.length && newText.length)) return [newText];

  while(true){

    if(oldText[oi] === newText[ni]){

      start = oi;

      do{
        oi++;
        ni++;

        if(ni === newText.length){
          result.push([start,oi]);
          return result;
        }

        if(oi === oldText.length){
          result.push([start,oi],newText.slice(ni));
          return result;
        }

      }while(oldText[oi] === newText[ni]);

      result.push([start,oi]);

    }else{

      part = '';

      do{
        part += newText[ni];
        ni++;

        if(ni === newText.length){
          result.push(part);
          return result;
        }

      }while(oldText[oi] !== newText[ni]);

      result.push(part);

    }

  }
}

function deletionDiff(oldText,newText){
  var oi = 0,
      ni = 0,
      result = [],
      start;

  if(!(oldText.length && newText.length)) return [newText];

  while(true){

    if(oldText[oi] === newText[ni]){

      start = oi;

      do{
        oi++;
        ni++;

        if(ni === newText.length){
          result.push([start,oi]);
          return result;
        }

        if(oi === oldText.length){
          result.push([start,oi],newText.slice(ni));
          return result;
        }

      }while(oldText[oi] === newText[ni]);

      result.push([start,oi]);

    }else{

      do{
        oi++;

        if(oi === oldText.length){
          result.push(newText.slice(ni));
          return result;
        }

      }while(oldText[oi] !== newText[ni]);

    }

  }
}

exports.get = function(oldText,newText){
  oldText = (oldText || '') + '';
  newText = (newText || '') + '';

  if(oldText.length < newText.length) return insertionDiff(oldText,newText);
  return deletionDiff(oldText,newText);
};

exports.apply = function(text,diff){
  var result = '',
      i;

  text = (text || '') + '';
  for(i = 0;i < diff.length;i++){
    if(diff[i] instanceof Array) result += text.slice(diff[i][0],diff[i][1]);
    else result += diff[i];
  }

  return result;
};
