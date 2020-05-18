let okResponse = function(body) {
  return {
    'statusCode': 200,
    'body': JSON.stringify(
      {
        'codigoResultado': '00',
        'traceNumber': body.traceNumber,
        'referenceNumber': body.referenceNumber
      }
    )
  }
}

let invalidDniResponse = function(body) {
  return {
    'statusCode': 200,
    'body': JSON.stringify(
      {
        "codigoResultado": "85",
        "descripcionResultado": "En este momento su transaccion no puede ser procesada, por favor reintente mas tarde."
      }
    )
  }
}

let invalidCVVResponse = function(body) {
  return {
    'statusCode': 200,
    'body': JSON.stringify(
      {
        "codigoResultado": "54",
        "descripcionResultado": "Falló la transacción, datos incorrectos."
      }
    )
  }
}

let invalidDateResponse = function(body) {
  return {
    'statusCode': 200,
    'body': JSON.stringify(
      {
        "codigoResultado": "26",
        "descripcionResultado": "En este momento su transaccion no puede ser procesada, por favor reintente mas tarde."
      }
    )
  }
}

module.exports = [
  {
    request: {
      'method': 'GET',
      'path': '/'
    },
    response: {
      'statusCode': 200
    }
  },
  {
    request: {
      'method': 'POST',
      'path': '/validate'
    },
    response: function(urlParams, qsParams, bodyParams) {
      switch(bodyParams.user.TD) {
        case "1111222233334444":
          return okResponse(bodyParams);
        case "2222333344445555":
          return invalidDniResponse(bodyParams);
        case "3333444455556666":
          return invalidCVVResponse(bodyParams);
        case "4444555566667777":
          return invalidDateResponse(bodyParams);
        default:
          return {
            'statusCode': 422,
            'body': {
              "codigoResultado": "11",
              "descripcionResultado": "La tarjeta no existe dentro de los mocks disponibles"
            }
          }
      }
    }
  }
];