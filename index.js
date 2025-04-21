import express from 'express';

const app = express()

const port =3000;

app.use(express.json())

let Teas = []
let nextId = 1

app.post("/teas",(req, res) => {
// add a tea
const {name, price} = req.body
const newTea = {id: nextId++, name, price}
Teas.push(newTea)
res.status(201).send(newTea)
})
//get a tea
app.get("/teas",(req, res) => {
    res.status(200).send(Teas)
})
// getting tea by id
app.get("/teas/:id", (req, res) => {
const tea = Teas.find (t => t.id === parseInt(req.params.id)) 
if (!tea) {
    return res.status(404).send("tea not found")
    
}
    res.status(200).send(tea)
    
});

//Update tea
app.put('/teas/:id', (req,res) => {
    
    const tea = Teas.find (t => t.id === parseInt(req.params.id)) 

    if (!tea) {
        return res.status(404).send("tea not found")
    }
    const {name, price} = req.body
    tea.name = name
    tea.price= price
    res.status(200).send(tea);
});

// delet app
app.delete('/teas/:id', (req,res) => {
    
    const index = Teas.findIndex (t => t.id === parseInt(req.params.id)) 

    if (index === -1) {
        return res.status(404).send("tea not found")
    }
    Teas.splice(index, 1)
        return res.status(204).send("Deleted")
});
app.listen(port, () =>   {
    console.log(`server is running ${port}`)
    
});
