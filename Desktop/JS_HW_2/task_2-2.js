

const calculateEngravingPrice = function (mess, pricePerWord) {
    return pricePerWord * mess.split(' ').length;
  };

  const mess = 'Proin sociis natoque et magnis parturient montes mus';

  const pricePerWord = 20;
  //10; 40;
  
  const messTwo ='Donec orci lectus aliquam est magnis';
  
  console.log(calculateEngravingPrice(mess,
    pricePerWord))
    console.log(calculateEngravingPrice(messTwo,
        pricePerWord))