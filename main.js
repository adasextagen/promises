let estudie = true
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

let VoyAVerLosVideosDeLasClases = new Promise((resolve, reject)=>{
  let solution = () => {if(true){
    return resolve('te olvidaste compartir pantalla')
  }else{
    return reject('no tuve tiempo')
  }}
  setTimeout(solution, 2000)
})


// evaluación de promesa con then() y catch()
VoyAestudiar
  .then( (res) => {
    // extrae la respuesta en el caso de exito (resolve)
    //res.forEach(e => console.log(e))
  })
  .catch( (error) => {
    // extrae la respuesta en el caso de error (reject)
    //console.log(error)
  }).finally(()=>{
    //
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
  }finally{
    console.log('fin de la operación')
  }
}

Promise.all([VoyAestudiar, VoyAVerLosVideosDeLasClases])
  .then(res => console.log(res))

Promise.race([VoyAestudiar, VoyAVerLosVideosDeLasClases])
  .then(res => console.log(res))