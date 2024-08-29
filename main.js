
function App() {
    const [counters, setCounters] = React.useState([
        { id:1, number:0 },
        { id:2, number:1 },
        { id:3, number:2 },
        { id:4, number:3 },
        { id:5, number:4 },
    ])

    const sum = counters.reduce((acc, curr) => {
        return acc + curr.number
    }, 0)

    function addCounter() {
        setCounters([...counters, {id:counters.length+1, number:0}])
    }

    const updateCounter = (id, n) => {
        console.log('id = ',id)
        let idx = counters.findIndex( el => el.id === id)
        console.log('counters array no.', idx)
        const newCounters = [...counters]
        if(newCounters[idx].number <= 0 && n === -1) {return}
        newCounters[idx].number += n
        console.log(newCounters)
        setCounters(newCounters)
    }

    function removeCounter(id) {
        setCounters( prev => prev.filter(el => el.id !== id))

    }

    return (
            <div className="app">
                <h1 className="show-sum">Sum = {sum}</h1>
                <button onClick={addCounter} className="btn btn-add">Add Counter</button>
            <hr />
            {counters.map (el => (
                <Counter key={el.id} item={el} updateCounter={updateCounter} removeCounter={removeCounter} />
                ))
                }

            </div>
    )
}
 

function Counter(props) {
    // console.log(props)
    const {item, updateCounter, removeCounter} = props
    return(
        <div className="counter">
            <button onClick={ () => updateCounter(item.id,-1)} className="btn btn-dec">-</button>
            <h3 className="number">{item.number}</h3>
            <button onClick={ () => updateCounter(item.id,1)} className="btn btn-inc">+</button>
            <button onClick={ () => updateCounter(item.id, - item.number)}className="btn btn-clr">C</button>
            <button onClick={ () => removeCounter(item.id)}className="btn btn-del">X</button>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)