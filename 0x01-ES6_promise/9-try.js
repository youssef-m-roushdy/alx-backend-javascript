import divideFunction from "./8-try"

export default function guardrail(mathFunction) {
    const queue = []
    try {
    queue.push(mathFunction())
    }catch(err) {
        queue.push(String(err))
    }

    try{
        queue.push('Guardrail was processed')
    }catch(err) {
        queue.push(String(err))
    }
    
    return queue
    
}