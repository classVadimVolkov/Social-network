import React, {useState} from "react";
import {Pagination} from "@mui/material";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const [page, setPage] = useState(props.currentPage)

    const handleChange = (event, value) => {
        setPage(value)
        props.onPageChanged(value)
    }

    return (
        <div>
            <Pagination count={pagesCount} page={page} showFirstButton showLastButton onChange={handleChange}/>
        </div>
    )
}

export default Paginator
