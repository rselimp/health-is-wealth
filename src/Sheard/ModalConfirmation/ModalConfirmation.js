import React from 'react';

const ModalConfirmation = ({title,message,closeModal,handleDeleteDoctor,modalData}) => {
    return (
        <div>
            {/* The button to open modal */}
           

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() =>handleDeleteDoctor(modalData)} htmlFor="my-modal" className="btn btn-accent">delete</label>
                        <button onClick={closeModal} className='btn btn-outline'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirmation;