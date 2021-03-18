const advinhaMelhorCurso = (curso) => {
  return new Promise((resolve, reject) => {
    if(curso == 'Full Stack'){
      resolve({
        success: true,
        message: 'Acertou! Realmente o curso de Full Stack é o melhor da DH'
      })
    } else {
      reject({
        success: false,
        message: 'Que pena! você não advinhou o melhor curso, tente novamente.'
      })
    }
  })
}

const melhoresMateriasDoMelhorCurso = (resposta) => {
  return new Promise((resolve, reject) => {
    if(resposta.success){
      resolve('As matérias do melhor curso são: HTML, CSS, JS, etc...')  
    } else { 
      reject('Não acertou o melhor curso, portanto, não verá as melhores matérias');
    }
  })
}

// let retorno = advinhaMelhorCurso('Full Stak')
//   .then(resposta => {
//     return melhoresMateriasDoMelhorCurso(resposta)
//   })
//   .then(respostaDaSegundaPromise => {
//     return respostaDaSegundaPromise
//   })
//   .catch(error => {
//     return error
//   })

// consumindo a promise
let retorno = advinhaMelhorCurso('Full Stack')
  .then(resposta => {
    return resposta
  })
  .catch(error => {
    return error
  })

// obtendo o objeto de resposta e trabalhando o valor
retorno.then(resposta => {
  console.log(resposta) 
})