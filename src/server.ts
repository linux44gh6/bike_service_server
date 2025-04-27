import app from "./App"
const port = 3000
async function main(){
   try{
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
   }catch(err){
    throw new Error(`Error starting server: ${err}`)
   }
}

main()