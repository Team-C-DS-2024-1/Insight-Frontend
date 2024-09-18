
interface Person {
    name: string;
    mood : string;
}

function TestComponent(person: Person){
    const { name, mood } = person;

    return (
        <>
            <div className="border-[3px] rounded-md border-green p-[20px] m-[20px]">
                <h1 className="text-[#75ff4b] text-3xl underline">This is a test Component</h1>
                <h2 className="text-blue-400 text-2xl">My name is {name}</h2>
                <p>Im feeling <span className="text-red-600 fond-bold underline">{mood}</span></p>
            </div>  
        </>
    );
}

export default TestComponent;