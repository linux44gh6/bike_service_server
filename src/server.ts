import app from "./App"
const port = 3000
async function main(){
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
}

main()