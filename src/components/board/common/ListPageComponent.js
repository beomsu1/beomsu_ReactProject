const ListPageComponent = ({movePage,prev,next,start,pageNums,end,page}) => {

    const handleClickPage = (pageNum) => {
        movePage(pageNum)
    }

    return ( 

        <div >
            <ul className="flex">
                    {prev ? <li className="m-2 underline"
                    onClick={() => handleClickPage(start-1)}
                    >PREV</li> : <></>}

                    {pageNums.map(num => <li key={num} className="m-2 underline "
                    onClick={() => handleClickPage(num)}
                    >
                    {/* page == num이랑 같을 시 빨간색으로 표시 */}
                    {page === num ? <span className="text-red-500">{num}</span> : <span>{num}</span>} 
                    </li>)}

                    {next ? <li className="m-2 underline"
                    onClick={() => handleClickPage(end+1)}
                    >NEXT</li> : <></>}
            </ul>
        </div>

     );
}
 
export default ListPageComponent;