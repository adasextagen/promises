let estudie = false
let temasQueEstudie = [
  'Vainilla',
  'html5',
  'SASS'
]
// definicion de promesa
let VoyAestudiar = new Promise((resolve, reject)=>{
  if(estudie){
    return resolve(temasQueEstudie)
  }else{
    return reject('Ño :(')
  }
})

// evaluación de promesa con then() y catch()
VoyAestudiar
  .then( (res) => {
    // extrae la respuesta en el caso de exito (resolve)
    res.forEach(e => console.log(e))
  })
  .catch( (error) => {
    // extrae la respuesta en el caso de error (reject)
    console.log(error)
  })

// Async & Await 
async function funcionAsincronnica(){
  try{
    // extrae la respuesta en el caso de exito (resolve)
    let response = await VoyAestudiar
    console.log(response)
  }catch(e){
    // extrae la respuesta en el caso de error (reject)    
    console.log(e)
  }
}

funcionAsincronnica()
