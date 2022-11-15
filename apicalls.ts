async function getData(){
  return await fetch('https://rickandmortyapi.com/api/episode/')
  .then((response) => response.json())
      .then(  (data) =>  {
                  data.results.map( async (val)=>{
                      const chg =  await val.characters.map( async (chVal, v)=>{
                          let val2 =  await fetch(chVal)
                                      .then((response) => response.json())
                                      .then( async (chData) =>  {
                                          return  chData;

                                      },
                                      (err)=>{
                                          console.log('error')
                                      }
                                      )

                                      return val.characters[v] = val2

                      })
                      val.characters = chg;

                  })
                  return data
      
  });
}
getData().then((b)=>{ console.log(b)})
