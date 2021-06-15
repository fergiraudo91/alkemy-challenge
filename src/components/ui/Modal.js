import React from 'react';

export const Modal = ({title, text, background, color}) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className={`modal-title ${background} ${color} rounded p-2`} id="exampleModalLabel">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {text}
                    </div>
                    <div className="modal-footer">
                        <button id="closeBtn" type="button" className="btn btn-warning" data-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
