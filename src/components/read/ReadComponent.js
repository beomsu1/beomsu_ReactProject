import { useEffect, useState } from "react";
import { getOne } from "../../api/BoardAPI";

const initState = {
    bno: 0,
    title: '',
    content: '',
    writer: '',
    regDate: '',
    modDate: ''
}


const ReadComponent = ({ bno }) => {

    const [board, setBoard] = useState(initState)

    useEffect(() => {

        getOne(bno).then(data => {

            setBoard(data)
        })

    }, [bno])

    return (
        <div className="bg-blue-100 p-4 rounded-lg">
            <div className="text-blue-500 text-xl font-semibold mb-2">{board.bno}</div>
            <div className="bg-white p-4 rounded-lg shadow mb-2">
                <h2 className="text-2xl font-bold">{board.title}</h2>
                <p className="text-gray-600 mt-2">{board.content}</p>
            </div>
            <div className="flex justify-between items-center text-gray-500">
                <div>{board.writer}</div>
                <div>{board.regDate}</div>
            </div>
            <div className="text-gray-500 mt-2">Last Modified: {board.modDate}</div>
        </div>
    
    );
}

export default ReadComponent;