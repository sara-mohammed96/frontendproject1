import React, { useRef } from 'react'
import AddingCommentSection from './AddingCommentSection';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
export default function Print() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <AddingCommentSection ref={componentRef} />
            <button onClick={handlePrint}>Print this out!</button>

        </div>
    )
}
